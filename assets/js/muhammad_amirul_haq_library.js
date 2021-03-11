try {
  document.body.style.margin = 0;
  document.getElementsByTagName("portrait-screen")[0].style.display = "block";
  document.getElementsByTagName("portrait-screen")[0].style.position = "absolute";
  document.getElementsByTagName("portrait-screen")[0].style.left = 0;
  document.getElementsByTagName("portrait-screen")[0].style.right = 0;
  document.getElementsByTagName("portrait-screen")[0].style.marginLeft = "auto";
  document.getElementsByTagName("portrait-screen")[0].style.marginRight = "auto";
  document.getElementsByTagName("portrait-screen")[0].style.top = 0;
  document.getElementsByTagName("portrait-screen")[0].style.bottom = 0;
  document.getElementsByTagName("portrait-screen")[0].style.marginTop = "auto";
  document.getElementsByTagName("portrait-screen")[0].style.marginBottom = "auto";
  document.getElementsByTagName("portrait-screen")[0].style.overflow = "hidden";
  if(window.innerWidth >= 5/8 * window.innerHeight) {
    document.getElementsByTagName("portrait-screen")[0].style.width = 5/8 * window.innerHeight + "px";
    document.getElementsByTagName("portrait-screen")[0].style.height = window.innerHeight + "px";
  } else {
    document.getElementsByTagName("portrait-screen")[0].style.width = 100 + "vw";
    document.getElementsByTagName("portrait-screen")[0].style.height = 8/5 * 100 + "vw";
  }
  window.onresize = ()=> {
    if(window.innerWidth >= 5/8 * window.innerHeight) {
      document.getElementsByTagName("portrait-screen")[0].style.width = 5/8 * window.innerHeight + "px";
      document.getElementsByTagName("portrait-screen")[0].style.height = window.innerHeight + "px";
    } else {
      document.getElementsByTagName("portrait-screen")[0].style.width = 100 + "vw";
      document.getElementsByTagName("portrait-screen")[0].style.height = 8/5 * 100 + "vw";
    }
  };
  console.log("A custom element as <portrait-screen> is already in memory [single use]");
} catch(err) {
  console.log("A custom element as <portrait-screen> is already in memory [single use]");
}
console.log("A custom element as <circle-loader> is already in memory [multiple use]");
for(let i = 0; i < document.getElementsByTagName("circle-loader").length; i++) {
  document.getElementsByTagName("circle-loader")[i].style.border = "5px solid rgb(221, 221, 221)";
  document.getElementsByTagName("circle-loader")[i].style.borderLeft = "5px solid rgb(112, 112, 112)";
  document.getElementsByTagName("circle-loader")[i].style.position = "absolute";
  document.getElementsByTagName("circle-loader")[i].style.top = "50%";
  document.getElementsByTagName("circle-loader")[i].style.left = "50%";
  document.getElementsByTagName("circle-loader")[i].style.width = "25px";
  document.getElementsByTagName("circle-loader")[i].style.height = "25px";
  document.getElementsByTagName("circle-loader")[i].style.borderRadius = "50%";
  const circle_loading = function() {
    let j = 0;
    setInterval(()=> {
      document.getElementsByTagName("circle-loader")[i].style.transform = "translate(-50%, -50%) rotate(" + j + "deg)";
      j+=1.5;
    },1);
  }();
}