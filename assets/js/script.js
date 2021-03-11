const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page2_5 = document.getElementById("page2-5");
const page2_7_5 = document.getElementById("page2-7-5");
const page3 = document.getElementById("page3");
const tic = document.getElementById("tic");
const tac = document.getElementById("tac");
const toe = document.getElementById("toe");
const play_button = document.getElementById("play-button");
const play_span = document.querySelector("#play-button span");
const multiplayer_option = document.getElementById("multiplayer-option");
const computer_option = document.getElementById("computer-option");
const status_text = document.getElementById("status-text");
const back_button = document.querySelector(".back-button span");
const turn = document.getElementById("whos-turn");
const submit = document.querySelector(".submit");
const input1 = document.getElementById("text1");
const input2 = document.getElementById("text2");
const notice_field = document.querySelector(".notice-field");
const confirm_popup = document.querySelector(".confirm");
const yes_play_again = document.querySelector(".yes");
const no_play_again = document.querySelector(".no");
window.onload = ()=> {
  document.querySelector("portrait-screen").style.display = "block";
  setTimeout(()=> {
    page1.style.display = "none";
    page2.style.display = "block";
    animationForMenu();
  },850);
};
function animationForMenu() {
  let iTic = -100;
  const interval3 = setInterval(()=> {
    tic.style.transform = "translateY(" + iTic + "px)";
    iTic+=0.5;
    if(iTic >= 0) {
      clearInterval(interval3);
      let iTac = 300;
      const interval4 = setInterval(()=> {
        tac.style.transform = "translateX(" + iTac + "px)";
        iTac-=1.5;
        if(iTac <= 0) {
          clearInterval(interval4);
          let iToe = -300;
          const interval5 = setInterval(()=> {
            toe.style.transform = "translateX(" + iToe + "px)";
            iToe+=1.5;
            if(iToe >= 0) {
              clearInterval(interval5);
              setTimeout(()=> {
                let l = 80;
                const interval6 = setInterval(()=> {
                  play_button.style.fontSize = l + "px";
                  l--;
                  if(l <= 50) clearInterval(interval6);
                },1);
                let m = 0;
                const interval7 = setInterval(()=> {
                  play_button.style.opacity = m;
                  m+=0.1;
                  if(m >= 1) clearInterval(interval7);
                },1);
              },500);
            }
          },1);
        }
      },1);
    }
  },1);
}
play_span.onclick = ()=> {
  setTimeout(()=> {
    page2.style.display = "none";
    animationForMiddlePage();
  },200);
};
let isMove;
function animationForMiddlePage() {
  isMove = true;
  page2_5.style.display = "block";
  multiplayer_option.style.transform = "translateX(-150%)";
  computer_option.style.transform = "translateX(150%)";
  let i = -150;
  const intrvl = setInterval(()=> {
    multiplayer_option.style.transform = "translateX(" + i + "%)";
    i+=1.9;
    if(i >= 0) {
      isMove = false;
      clearInterval(intrvl);
      multiplayer_option.style.transform = "translateX(0%)";
      multiplayer_option.onmouseover = ()=> {
        if(!isMove) multiplayer_option.style.transform = "scale(1.1, 1.1)";
      };
      multiplayer_option.onmouseout = ()=> {
        if(!isMove) multiplayer_option.style.transform = "scale(1, 1)";
      };
    }
  },1);
  let j = 150;
  const intrvl2 = setInterval(()=> {
    computer_option.style.transform = "translateX(" + j + "%)";
    j-=1.9;
    if(j <= 0) {
      isMove = false;
      clearInterval(intrvl2);
      computer_option.style.transform = "translateX(0%)";
      computer_option.onmouseover = ()=> {
        if(!isMove) computer_option.style.transform = "scale(1.1, 1.1)";
      };
      computer_option.onmouseout = ()=> {
        if(!isMove) computer_option.style.transform = "scale(1, 1)";
      };
    }
  },1);
}
multiplayer_option.onclick = ()=> {
  isMultiplayer = true;
  isComputer = false;
  setTimeout(()=> {
    page2_5.style.display = "none";
    page2_7_5.style.display = "block";
  },200);
};
let player1, player2;
submit.onclick = ()=> {
  player1 = input1.value;
  player2 = input2.value;
  if(player1 !== "" && player2 !== "") {
    notice_field.style.display = "none";
    setTimeout(()=> {
      page2_7_5.style.display = "none";
      page3.style.display = "block";
      animationForBox();
      const interval_popup = setInterval(()=> {
        if(isGameStarted) {
          place3InARow();
          clearInterval(interval_popup);
        }
      },1);
    },200);
  } else {
    notice_field.style.display = "block";
  }
};
computer_option.onclick = ()=> {
  isComputer = true;
  isMultiplayer = false;
  setTimeout(()=> {
    page2_5.style.display = "none";
    page3.style.display = "block";
    animationForBox();
    const interval_popup = setInterval(()=> {
      if(isGameStarted) {
        place3InARow();
        clearInterval(interval_popup);
      }
    },1);
  },200);
};
function animationForBox() {
  let i = 0;
  const myInterval = setInterval(()=> {
    box[i].style.display = "block";
    i++;
    if(i == box.length) {
      clearInterval(myInterval);
      isGameStarted = true;
      turn.style.display = "block";
      if(isComputer) turn.innerHTML = "Your turn";
      else turn.innerHTML = player1 + "'s turn";
    }
  },100);
}
function confirm_play_again() {
  isPopupDisplayed = true;
  confirm_popup.style.display = "block";
  confirm_popup.style.opacity = "0";
  confirm_popup.style.transform = "translate(-50%, -50%) scale(0, 0)";
  let i = 0;
  const interval = setInterval(()=> {
    confirm_popup.style.opacity = i;
    i+=0.02;
    if(i > 1) clearInterval(interval);
  },1);
  let j = 0;
  const interval2 = setInterval(()=> {
    confirm_popup.style.transform = "translate(-50%, -50%) scale(" + j + ", " + j + ")";
    j+=0.02;
    if(j > 1) clearInterval(interval2);
  },1);
}
const box = document.querySelectorAll(".box div");
const box_span = document.querySelectorAll(".box span");
let didWin = false;
let didLose = false;
let isDraw = false;
let isYourTurn = true;
let isGameStarted = false;
let isComputer = false;
let isMultiplayer = false;
let xo = "X";
let didPlayerWin = false;
let cpu_thinking_time;
let isPopupDisplayed = false;
let isTheFirstOne = true;
let random_number;
for(let i = 0; i < box.length; i++) {
  box[i].onclick = ()=> {
    if(box_span[i].innerHTML === "" && !didWin && !didLose && isYourTurn && isGameStarted && isComputer && !isPopupDisplayed) {
      cpu_thinking_time = 2 * parseInt(Math.random()*1000);
      status_text.style.fontSize = "40px";
      isYourTurn = false;
      turn.innerHTML = "Computer's turn";
      box_span[i].innerHTML = "X";
      let k = 0;
      let isContinue = true;
      for(let j = 0; j <= 6; j+=3) {
        if(box_span[j].innerHTML + box_span[j+1].innerHTML + box_span[j+2].innerHTML === "XXX") {
          didWin = true;
          turn.style.display = "none";
          animationForWin();
          setTimeout(()=> {
            confirm_play_again();
          },1000);
        }
        else if(box_span[k].innerHTML + box_span[k+3].innerHTML + box_span[k+6].innerHTML === "XXX") {
          didWin = true;
          turn.style.display = "none";
          animationForWin();
          setTimeout(()=> {
            confirm_play_again();
          },1000);
        }
        else if(box_span[0].innerHTML + box_span[4].innerHTML + box_span[8].innerHTML === "XXX") {
          didWin = true;
          turn.style.display = "none";
          animationForWin();
          setTimeout(()=> {
            confirm_play_again();
          },1000);
        }
        else if(box_span[2].innerHTML + box_span[4].innerHTML + box_span[6].innerHTML === "XXX") {
          didWin = true;
          turn.style.display = "none";
          animationForWin();
          setTimeout(()=> {
            confirm_play_again();
          },1000);
        }
        k++;
      }
      setTimeout(()=> {
      isYourTurn = true;
      turn.innerHTML = "Your turn";
      random_number = Math.floor(Math.random()*10) % box_span.length;
      while(true) {
        if(!isTheFirstOne) break;
        if(box_span[random_number].innerHTML == "") {
          isContinue = false;
          isTheFirstOne = false;
          box_span[random_number].innerHTML = "O";
          break;
        } else random_number = Math.floor(Math.random()*10) % box_span.length;
      }
      k = 0;
      for(let j = 0; j <= 6; j+=3) {
        if(box_span[j].innerHTML + box_span[j+1].innerHTML + box_span[j+2].innerHTML === "OO") {
          isContinue = false;
          if(box_span[j].innerHTML === "") {
            if(!didWin) {
              box_span[j].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          else if(box_span[j+1].innerHTML === "") {
            if(!didWin) {
              box_span[j+1].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          else if(box_span[j+2].innerHTML === "") {
            if(!didWin) {
              box_span[j+2].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          break;
        } else if(box_span[k].innerHTML + box_span[k+3].innerHTML + box_span[k+6].innerHTML === "OO") {
          isContinue = false;
          if(box_span[k].innerHTML === "") {
            if(!didWin) {
              box_span[k].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          else if(box_span[k+3].innerHTML === "") {
            if(!didWin) {
              box_span[k+3].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          else if(box_span[k+6].innerHTML === "") {
            if(!didWin) {
              box_span[k+6].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          break;
        } else if(box_span[0].innerHTML + box_span[4].innerHTML + box_span[8].innerHTML === "OO") {
          isContinue = false;
          if(box_span[0].innerHTML === "") {
            if(!didWin) {
              box_span[0].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          else if(box_span[4].innerHTML === "") {
            if(!didWin) {
              box_span[4].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          else if(box_span[8].innerHTML === "") {
            if(!didWin) {
              box_span[8].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          break;
        } else if(box_span[2].innerHTML + box_span[4].innerHTML + box_span[6].innerHTML === "OO") {
          isContinue = false;
          if(box_span[2].innerHTML === "") {
            if(!didWin) {
              box_span[2].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          else if(box_span[4].innerHTML === "") {
            if(!didWin) {
              box_span[4].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          else if(box_span[6].innerHTML === "") {
            if(!didWin) {
              box_span[6].innerHTML = "O";
              didLose = true;
              turn.style.display = "none";
              animationForLose();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
          break;
        }
        k++;
      }
      k = 0;
      for(let j = 0; j <= 6; j+=3) {
        if(!isContinue) break;
        if(box_span[j].innerHTML + box_span[j+1].innerHTML + box_span[j+2].innerHTML === "XX") {
          isContinue = false;
          if(box_span[j].innerHTML === "") {
            if(!didWin) box_span[j].innerHTML = "O";
          }
          else if(box_span[j+1].innerHTML === "") {
            if(!didWin) box_span[j+1].innerHTML = "O";
          }
          else if(box_span[j+2].innerHTML === "") {
            if(!didWin) box_span[j+2].innerHTML = "O";
          }
          break;
        } else if(box_span[k].innerHTML + box_span[k+3].innerHTML + box_span[k+6].innerHTML === "XX") {
          isContinue = false;
          if(box_span[k].innerHTML === "") {
            if(!didWin) box_span[k].innerHTML = "O";
          }
          else if(box_span[k+3].innerHTML === "") {
            if(!didWin) box_span[k+3].innerHTML = "O";
          }
          else if(box_span[k+6].innerHTML === "") {
            if(!didWin) box_span[k+6].innerHTML = "O";
          }
          break;
        } else if(box_span[0].innerHTML + box_span[4].innerHTML + box_span[8].innerHTML === "XX") {
          isContinue = false;
          if(box_span[0].innerHTML === "") {
            if(!didWin) box_span[0].innerHTML = "O";
          }
          else if(box_span[4].innerHTML === "") {
            if(!didWin) box_span[4].innerHTML = "O";
          }
          else if(box_span[8].innerHTML === "") {
            if(!didWin) box_span[8].innerHTML = "O";
          }
          break;
        } else if(box_span[2].innerHTML + box_span[4].innerHTML + box_span[6].innerHTML === "XX") {
          isContinue = false;
          if(box_span[2].innerHTML === "") {
            if(!didWin) box_span[2].innerHTML = "O";
          }
          else if(box_span[4].innerHTML === "") {
            if(!didWin) box_span[4].innerHTML = "O";
          }
          else if(box_span[6].innerHTML === "") {
            if(!didWin) box_span[6].innerHTML = "O";
          }
          break;
        }
        k++;
      }
      k = 0;
      for(let j = 0; j <= 6; j+=3) {
        if(!isContinue) break;
        if(box_span[j].innerHTML + box_span[j+1].innerHTML + box_span[j+2].innerHTML === "" || box_span[j].innerHTML + box_span[j+1].innerHTML + box_span[j+2].innerHTML === "O") {
          isContinue = false;
          if(box_span[j].innerHTML === "") {
            if(!didWin) box_span[j].innerHTML = "O";
          }
          else if(box_span[j+1].innerHTML === "") {
            if(!didWin) box_span[j+1].innerHTML = "O";
          }
          else if(box_span[j+2].innerHTML === "") {
            if(!didWin) box_span[j+2].innerHTML = "O";
          }
          break;
        } else if(box_span[k].innerHTML + box_span[k+3].innerHTML + box_span[k+6].innerHTML === "" || box_span[k].innerHTML + box_span[k+3].innerHTML + box_span[k+6].innerHTML === "O") {
          isContinue = false;
          if(box_span[k].innerHTML === "") {
            if(!didWin) box_span[k].innerHTML = "O";
          }
          else if(box_span[k+3].innerHTML === "") {
            if(!didWin) box_span[k+3].innerHTML = "O";
          }
          else if(box_span[k+6].innerHTML === "") {
            if(!didWin) box_span[k+6].innerHTML = "O";
          }
          break;
        } else if(box_span[0].innerHTML + box_span[4].innerHTML + box_span[8].innerHTML === "" || box_span[0].innerHTML + box_span[4].innerHTML + box_span[8].innerHTML === "O") {
          isContinue = false;
          if(box_span[0].innerHTML === "") {
            if(!didWin) box_span[0].innerHTML = "O";
          }
          else if(box_span[4].innerHTML === "") {
            if(!didWin) box_span[4].innerHTML = "O";
          }
          else if(box_span[8].innerHTML === "") {
            if(!didWin) box_span[8].innerHTML = "O";
          }
          break;
        } else if(box_span[2].innerHTML + box_span[4].innerHTML + box_span[6].innerHTML === "" || box_span[2].innerHTML + box_span[4].innerHTML + box_span[6].innerHTML === "O") {
          isContinue = false;
          if(box_span[2].innerHTML === "") {
            if(!didWin) box_span[2].innerHTML = "O";
          }
          else if(box_span[4].innerHTML === "") {
            if(!didWin) box_span[4].innerHTML = "O";
          }
          else if(box_span[6].innerHTML === "") {
            if(!didWin) box_span[6].innerHTML = "O";
          }
          break;
        }
        k++;
      }
      for(let i = 0; i < 9; i++) {
        if(!isContinue) break;
        if(box_span[i].innerHTML === "") {
          if(!didWin) box_span[i].innerHTML = "O";
          break;
        }
      }
      },cpu_thinking_time);
      for(let i = 0; i < box.length; i++) {
        if(box_span[i].innerHTML !== "") {
          if(i === box.length-1) {
            if(!didWin && !didLose) {
              isDraw = true;
              turn.style.display = "none";
              animationForDraw();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
        } else break;
      }
    } else if(box_span[i].innerHTML === "" && isGameStarted && isMultiplayer && !didPlayerWin && !isPopupDisplayed) {
      status_text.style.fontSize = "25px";
      box_span[i].innerHTML = xo;
      if(box_span[i].innerHTML === "X") {
        xo = "O";
        turn.innerHTML = player2 + "'s turn";
      } else {
        xo = "X";
        turn.innerHTML = player1 + "'s turn";
      }
      const xxxooo = ["XXX", "OOO"];
      const player = [player1, player2];
      for(let k = 0; k < xxxooo.length; k++) {
        let j = 0;
        for(let i = 0; i < 3; i++) {
          if(box_span[i].innerHTML + box_span[i+3].innerHTML + box_span[i+6].innerHTML === xxxooo[k]) {
            didPlayerWin = true;
            turn.style.display = "none";
            animationForPlayerWin(player[k].toUpperCase() + " WIN");
            setTimeout(()=> {
              confirm_play_again();
            },1000);
            break;
          } else if(box_span[j].innerHTML + box_span[j+1].innerHTML + box_span[j+2].innerHTML === xxxooo[k]) {
            didPlayerWin = true;
            turn.style.display = "none";
            animationForPlayerWin(player[k].toUpperCase() + " WIN");
            setTimeout(()=> {
              confirm_play_again();
            },1000);
            break;
          } else if(box_span[0].innerHTML + box_span[4].innerHTML + box_span[8].innerHTML === xxxooo[k]) {
            didPlayerWin = true;
            turn.style.display = "none";
            animationForPlayerWin(player[k].toUpperCase() + " WIN");
            setTimeout(()=> {
              confirm_play_again();
            },1000);
            break;
          } else if(box_span[2].innerHTML + box_span[4].innerHTML + box_span[6].innerHTML === xxxooo[k]) {
            didPlayerWin = true;
            turn.style.display = "none";
            animationForPlayerWin(player[k].toUpperCase() + " WIN");
            setTimeout(()=> {
              confirm_play_again();
            },1000);
            break;
          }
          j+=3;
        }
      }
      for(let i = 0; i < box.length; i++) {
        if(box_span[i].innerHTML !== "") {
          if(i === box.length-1) {
            if(!didPlayerWin) {
              isDraw = true;
              turn.style.display = "none";
              animationForDraw();
              setTimeout(()=> {
                confirm_play_again();
              },1000);
            }
          }
        } else break;
      }
    }
  };
}
function animationForDraw() {
  status_text.style.fontSize = "40px";
  const draw_text = ["D", "DR", "DRA", "DRAW"];
  let j = 0;
  const draw_interval = setInterval(()=> {
    status_text.innerHTML = draw_text[j];
    j++;
    if(j == draw_text.length) clearInterval(draw_interval);
  },200);
}
function animationForWin() {
  const win_text = ["W", "WI", "WIN"];
  let i = 0;
  const win_interval = setInterval(()=> {
    status_text.innerHTML = win_text[i];
    i++;
    if(i == win_text.length) clearInterval(win_interval);
  },200);
}
function animationForLose() {
  const lose_text = ["L", "LO", "LOS", "LOSE"];
  let i = 0;
  const lose_interval = setInterval(()=> {
    status_text.innerHTML = lose_text[i];
    i++;
    if(i == lose_text.length) clearInterval(lose_interval);
  },200);
}
function animationForPlayerWin(player_name) {
  let str = player_name.split("");
  const animation_data = new Array(str.length);
  let part_of_str = str[0];
  for(let i = 0; i < str.length; i++) {
    animation_data[i] = part_of_str;
    if(i < str.length-1) part_of_str += str[i+1];
  }
  let j = 0;
  const interval = setInterval(()=> {
    status_text.innerHTML = animation_data[j];
    j++;
    if(j == animation_data.length) clearInterval(interval);
  },200);
}
back_button.onclick = ()=> {
  if(!isPopupDisplayed) {
    setTimeout(()=> {
      page3.style.display = "none";
      page2.style.display = "block";
      didWin = false;
      didLose = false;
      isDraw = false;
      didPlayerWin = false;
      xo = "X";
      isGameStarted = false;
      isTheFirstOne = true;
      status_text.innerHTML = "";
      turn.innerHTML = "";
      tic.style.transform = "translateY(-100px)";
      tac.style.transform = "translateX(300px)";
      toe.style.transform = "translateX(-300px)";
      play_button.style.fontSize = "80px";
      play_button.style.opacity = "0";
      animationForMenu();
      for(let i = 0; i < box.length; i++) {
        box_span[i].innerHTML = "";
        box[i].style.display = "none";
      }
    },200);
  }
};
yes_play_again.onclick = ()=> {
  setTimeout(()=> {
    isPopupDisplayed = false;
    confirm_popup.style.display = "none";
    didWin = false;
    didLose = false;
    isDraw = false;
    didPlayerWin = false;
    xo = "X";
    isGameStarted = false;
    isTheFirstOne = true;
    status_text.innerHTML = "";
    turn.innerHTML = "";
    animationForBox();
    for(let i = 0; i < box.length; i++) {
      box_span[i].innerHTML = "";
      box[i].style.display = "none";
    }
  },200);
};
no_play_again.onclick = ()=> {
  setTimeout(()=> {
    isPopupDisplayed = false;
    confirm_popup.style.display = "none";
  },200);
};
const place3row = document.querySelector(".place3-in-a-row");
const close = document.querySelector(".close");
function place3InARow() {
  place3row.style.display = "block";
  isPopupDisplayed = true;
  let i = 0;
  const interval = setInterval(()=> {
    place3row.style.transform = "translate(-50%,-50%) scale(" + i + ", " + i + ")";
    i+=0.02;
    if(i > 1) clearInterval(interval);
  },1);  
}
close.onclick = ()=> {
  setTimeout(()=> {
    isPopupDisplayed = false;
    place3row.style.transform = "translate(-50%,-50%) scale(0, 0)";
    place3row.style.display = "none";
  },200);
};