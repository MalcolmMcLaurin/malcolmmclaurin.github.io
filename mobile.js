var svp = document.getElementById("sidepanelserve");
var sp = document.getElementById("sidepanel");


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

var lin = document.getElementById("linx");

var bkgif = document.getElementById("bkgif");

var ready = false;

function displayPanel() {
  svp.style.opacity = "1";
  sp.style.opacity = "1";
  svp.style.zIndex = "999";
  sp.style.zIndex = "999";
  sv.style.opacity = "0";
  set.style.opacity = "0"; 
  fp.style.opacity = "0";
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

  sv.style.opacity = "0";
  fp.style.opacity = "0";

  ws.style.width = "100%";
  ws.style.opacity = "1";
  ws.style.left = "0px";

  wsde.style.opacity = "0";
  wstr.style.opacity = "0";
  wsqu.style.opacity = "0";

  ws.style.zIndex = "0";
  wsde.style.zIndex = "-1";
  wstr.style.zIndex = "-1";
  wsqu.style.zIndex = "-1";

  wsde.style.left = "0px";
  wstr.style.left = "0px";
  wsqu.style.left = "0px";

  wsde.style.width = "100%";
  wstr.style.width = "100%";
  wsqu.style.width = "100%";

  bkgif.style.opacity = "0";
  lin.style.zIndex = "999";
  lin.style.left = "0px";
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

  sv.style.opacity = "0";
  fp.style.opacity = "0";

  wsde.style.width = "100%";
  wsde.style.opacity = "1";
  wsde.style.left = "0px";

  ws.style.opacity = "0";
  wstr.style.opacity = "0";
  wsqu.style.opacity = "0";

  ws.style.zIndex = "-1";
  wsde.style.zIndex = "0";
  wstr.style.zIndex = "-1";
  wsqu.style.zIndex = "-1";

  ws.style.left = "0px";
  wstr.style.left = "0px";
  wsqu.style.left = "0px";

  ws.style.width = "100%";
  wstr.style.width = "100%";
  wsqu.style.width = "100%";

  bkgif.style.opacity = "0";
  lin.style.zIndex = "999";
  lin.style.left = "0px";
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

  sv.style.opacity = "0";
  fp.style.opacity = "0";

  wstr.style.width = "100%";
  wstr.style.opacity = "1";
  wstr.style.left = "0px";

  wsde.style.opacity = "0";
  ws.style.opacity = "0";
  wsqu.style.opacity = "0";

  ws.style.zIndex = "-1";
  wsde.style.zIndex = "-1";
  wstr.style.zIndex = "0";
  wsqu.style.zIndex = "-1";

  wsde.style.left = "0px";
  ws.style.left = "0px";
  wsqu.style.left = "0px";

  wsde.style.width = "100%";
  ws.style.width = "100%";
  wsqu.style.width = "100%";

  bkgif.style.opacity = "0";
  lin.style.zIndex = "999";
  lin.style.left = "0px";
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

  sv.style.opacity = "0";
  fp.style.opacity = "0";

  wsqu.style.width = "100%";
  wsqu.style.opacity = "1";
  wsqu.style.left = "0px";

  wsde.style.opacity = "0";
  wstr.style.opacity = "0";
  ws.style.opacity = "0";

  ws.style.zIndex = "-1";
  wsde.style.zIndex = "-1";
  wstr.style.zIndex = "-1";
  wsqu.style.zIndex = "0";

  wsde.style.left = "0px";
  wstr.style.left = "0px";
  ws.style.left = "0px";

  wsde.style.width = "100%";
  wstr.style.width = "100%";
  ws.style.width = "100%";

  bkgif.style.opacity = "0";
  lin.style.zIndex = "999";
  lin.style.left = "0px";
}