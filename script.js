var svp = document.getElementById("sidepanelserve");
var sp = document.getElementById("sidepanel");

var svpd = document.getElementById("sidepanelservede");
var spd = document.getElementById("sidepanelde");

var cpl = document.getElementById("cpl");

var sv = document.getElementById("serve");
var set = document.getElementById("set");
var fp = document.getElementById("fpw");
var tt = document.getElementById("turtles");
var go = document.getElementById("go");

var r1 = document.getElementById("resh");
var r2 = document.getElementById("resh2");
var rss = document.getElementById("resspace");
var g1 = document.getElementById("gen1");
var gui = document.getElementById("guide");

var bkg = document.getElementById("bkg");

var ws = document.getElementById("ws");
var wsde = document.getElementById("wsde");
var wstr = document.getElementById("wstr");
var wsqu = document.getElementById("wsqu");

var bkgif = document.getElementById("bkgif");

var ready = false;

var ww = 800;
var hh = 600;

var scrnw = window.innerWidth;
var scrnh = window.innerHeight;

function initiate(){
  if(scrnw <= ww || scrnh <= hh){
    document.location.href = "mobile.html";
  }
}

function displayPanel() {
  svp.style.opacity = "1";
  sp.style.opacity = "1";
  tt.style.textAlign = "left";
  go.style.backgroundPosition = "left";
  fp.style.left = "-300px";
  set.style.justifyContent = "left";
}

function big1() {
  r1.style.margin = "0 auto";
  rss.style.display = "block";
  g1.style.background = "gray";
  rss.style.background = "clear";
  r1.style.width = "900px";
  r1.style.height = "850px";
  r1.style.top = "-150px";
  gui.style.opacity = "0";
  rss.style.height = "0px";
  r1.style.boxShadow = "0px 0px 3px 1px darkgray";
  ready = true;
}

function check() {
  if (ready === true) {
    g1.addEventListener("click", () => {
      location.reload();
    });
  }
  ready = false;
}

function start() {
  svp.style.left = "100%";
  svp.style.width = "40%";
  svp.style.backgroundImage =
    "url(https://cdn.glitch.global/9169d231-8c93-4181-bba6-4e8d8bfd705f/nick-nice-gPm8h3DS1s4-unsplash.jpg?v=1665151317012)";
  svp.style.backgroundSize = "cover";
  svp.style.backgroundPosition = "center";
  svp.style.filter = "brightness(40%)";

  sp.style.left = "100%";
  sp.style.width = "40%";
  sp.style.color = "white";

  svpd.style.left = "0px";
  svpd.style.backgroundPosition = "center";
  svpd.style.filter = "brightness(60%)";

  spd.style.left = "0px";
  spd.style.color = "white";

  sv.style.opacity = "0";
  fp.style.opacity = "0";

  ws.style.width = "1200px";
  ws.style.opacity = "1";
  ws.style.left = "500px";

  wsde.style.opacity = "0";
  wstr.style.opacity = "0";
  wsqu.style.opacity = "0";

  ws.style.zIndex = "0";
  wsde.style.zIndex = "-1";
  wstr.style.zIndex = "-1";
  wsqu.style.zIndex = "-1";

  wsde.style.left = "500px";
  wstr.style.left = "500px";
  wsqu.style.left = "500px";

  wsde.style.width = "1200px";
  wstr.style.width = "1200px";
  wsqu.style.width = "1200px";

  bkgif.style.opacity = "0";
}

function start2() {
  svp.style.left = "100%";
  svp.style.width = "40%";
  svp.style.backgroundImage =
    "url(https://cdn.glitch.global/9169d231-8c93-4181-bba6-4e8d8bfd705f/nick-nice-gPm8h3DS1s4-unsplash.jpg?v=1665151317012)";
  svp.style.backgroundSize = "cover";
  svp.style.backgroundPosition = "center";
  svp.style.filter = "brightness(40%)";

  sp.style.left = "100%";
  sp.style.width = "40%";
  sp.style.color = "white";

  svpd.style.left = "0px";
  svpd.style.backgroundPosition = "center";
  svpd.style.filter = "brightness(60%)";

  spd.style.left = "0px";
  spd.style.color = "white";

  sv.style.opacity = "0";
  fp.style.opacity = "0";

  wsde.style.width = "1200px";
  wsde.style.opacity = "1";
  wsde.style.left = "500px";

  ws.style.opacity = "0";
  wstr.style.opacity = "0";
  wsqu.style.opacity = "0";

  ws.style.zIndex = "-1";
  wsde.style.zIndex = "0";
  wstr.style.zIndex = "-1";
  wsqu.style.zIndex = "-1";

  ws.style.left = "500px";
  wstr.style.left = "500px";
  wsqu.style.left = "500px";

  ws.style.width = "1200px";
  wstr.style.width = "1200px";
  wsqu.style.width = "1200px";

  bkgif.style.opacity = "0";
}

function start3() {
  svp.style.left = "100%";
  svp.style.width = "40%";
  svp.style.backgroundImage =
    "url(https://cdn.glitch.global/9169d231-8c93-4181-bba6-4e8d8bfd705f/nick-nice-gPm8h3DS1s4-unsplash.jpg?v=1665151317012)";
  svp.style.backgroundSize = "cover";
  svp.style.backgroundPosition = "center";
  svp.style.filter = "brightness(40%)";

  sp.style.left = "100%";
  sp.style.width = "40%";
  sp.style.color = "white";

  svpd.style.left = "0px";
  svpd.style.backgroundPosition = "center";
  svpd.style.filter = "brightness(60%)";

  spd.style.left = "0px";
  spd.style.color = "white";

  sv.style.opacity = "0";
  fp.style.opacity = "0";

  wstr.style.width = "1200px";
  wstr.style.opacity = "1";
  wstr.style.left = "500px";

  wsde.style.opacity = "0";
  ws.style.opacity = "0";
  wsqu.style.opacity = "0";

  ws.style.zIndex = "-1";
  wsde.style.zIndex = "-1";
  wstr.style.zIndex = "0";
  wsqu.style.zIndex = "-1";

  wsde.style.left = "500px";
  ws.style.left = "500px";
  wsqu.style.left = "500px";

  wsde.style.width = "1200px";
  ws.style.width = "1200px";
  wsqu.style.width = "1200px";

  bkgif.style.opacity = "0";
}

function start4() {
  svp.style.left = "100%";
  svp.style.width = "40%";
  svp.style.backgroundImage =
    "url(https://cdn.glitch.global/9169d231-8c93-4181-bba6-4e8d8bfd705f/nick-nice-gPm8h3DS1s4-unsplash.jpg?v=1665151317012)";
  svp.style.backgroundSize = "cover";
  svp.style.backgroundPosition = "center";
  svp.style.filter = "brightness(40%)";

  sp.style.left = "100%";
  sp.style.width = "40%";
  sp.style.color = "white";

  svpd.style.left = "0px";
  svpd.style.backgroundPosition = "center";
  svpd.style.filter = "brightness(60%)";

  spd.style.left = "0px";
  spd.style.color = "white";

  sv.style.opacity = "0";
  fp.style.opacity = "0";

  wsqu.style.width = "1200px";
  wsqu.style.opacity = "1";
  wsqu.style.left = "500px";

  wsde.style.opacity = "0";
  wstr.style.opacity = "0";
  ws.style.opacity = "0";

  ws.style.zIndex = "-1";
  wsde.style.zIndex = "-1";
  wstr.style.zIndex = "-1";
  wsqu.style.zIndex = "0";

  wsde.style.left = "500px";
  wstr.style.left = "500px";
  ws.style.left = "500px";

  wsde.style.width = "1200px";
  wstr.style.width = "1200px";
  ws.style.width = "1200px";

  bkgif.style.opacity = "0";
}
