//editors
var html = document.getElementById("editor-html");
var css = document.getElementById("editor-css");
var js = document.getElementById("editor-js");
//tabs
var htmlTab = document.getElementById("html-tab");
var cssTab = document.getElementById("css-tab");
var jsTab = document.getElementById("js-tab");
//iframe and hotbar
var hotbar = document.getElementById("hotbar");
var output = document.getElementById("output");

//toggle
function toggle(type) {
  //editors left
  if (type === 1) {
    //html parts
    //tab
    htmlTab.style.top = "10%";
    htmlTab.style.right = "0";
    htmlTab.style.bottom = "85%";
    htmlTab.style.left = "0";
    htmlTab.style.width = "50%";
    htmlTab.style.height = "5%";
    //editor
    html.style.top = "15%";
    html.style.right = "0";
    html.style.bottom = "60%";
    html.style.left = "0";
    html.style.width = "50%";
    html.style.height = "25%";
    //css parts
    //tab
    cssTab.style.top = "40%";
    cssTab.style.right = "0";
    cssTab.style.bottom = "55%";
    cssTab.style.left = "0";
    cssTab.style.width = "50%";
    cssTab.style.height = "5%";
    //editor
    css.style.top = "45%";
    css.style.right = "0";
    css.style.bottom = "30%";
    css.style.left = "0";
    css.style.width = "50%";
    css.style.height = "30%";
    //js parts
    //tab
    jsTab.style.top = "70%";
    jsTab.style.right = "0";
    jsTab.style.bottom = "25%";
    jsTab.style.left = "0";
    jsTab.style.width = "50%";
    jsTab.style.height = "5%";
    //editor
    js.style.top = "75%";
    js.style.right = "0";
    js.style.bottom = "0";
    js.style.left = "0";
    js.style.width = "50%";
    js.style.height = "30%";
    //output
    output.style.top = "15%";
    output.style.right = "50%";
    output.style.bottom = "0";
    output.style.left = "50%";
    output.style.width = "50%";
    output.style.height = "85%";
    //hotbar
    hotbar.style.top = "10%";
    hotbar.style.right = "50%";
    hotbar.style.bottom = "0";
    hotbar.style.left = "50%";
    hotbar.style.width = "50%";
    hotbar.style.height = "5%";
  }
  //editors bottom
  if (type === 2) {
    //html
    html.style.top = "75%";
    html.style.right = "0";
    html.style.bottom = "0";
    html.style.left = "0";
    html.style.width = "33%";
    html.style.height = "25%";
    //tab
    htmlTab.style.top = "70%";
    htmlTab.style.right = "0";
    htmlTab.style.bottom = "20%";
    htmlTab.style.left = "0";
    htmlTab.style.width = "33%";
    htmlTab.style.height = "5%";
    //css
    css.style.top = "75%";
    css.style.right = "33%";
    css.style.bottom = "0";
    css.style.left = "33%";
    css.style.width = "34%";
    css.style.height = "25%";
    //tab
    cssTab.style.top = "70%";
    cssTab.style.right = "33%";
    cssTab.style.bottom = "20%";
    cssTab.style.left = "33%";
    cssTab.style.width = "34%";
    cssTab.style.height = "5%";
    //js
    js.style.top = "75%";
    js.style.right = "0";
    js.style.bottom = "0";
    js.style.left = "67%";
    js.style.width = "33%";
    js.style.height = "25%";
    //tab
    jsTab.style.top = "70%";
    jsTab.style.right = "0";
    jsTab.style.bottom = "20%";
    jsTab.style.left = "67%";
    jsTab.style.width = "34%";
    jsTab.style.height = "5%";
    //output
    output.style.top = "15%";
    output.style.right = "0";
    output.style.bottom = "30%";
    output.style.left = "0";
    output.style.width = "100%";
    output.style.height = "60%";
    //hotbar
    hotbar.style.top = "10%";
    hotbar.style.right = "50%";
    hotbar.style.bottom = "0";
    hotbar.style.left = "0";
    hotbar.style.width = "100%";
    hotbar.style.height = "5%";
  }
  //editors top
  if (type === 3) {
    //html
    html.style.top = "15%";
    html.style.right = "0";
    html.style.bottom = "60%";
    html.style.left = "0";
    html.style.width = "33%";
    html.style.height = "25%";
    //tab
    htmlTab.style.top = "10%";
    htmlTab.style.right = "0";
    htmlTab.style.bottom = "85%";
    htmlTab.style.left = "0";
    htmlTab.style.width = "33%";
    htmlTab.style.height = "5%";
    //css
    css.style.top = "15%";
    css.style.right = "33%";
    css.style.bottom = "60%";
    css.style.left = "33%";
    css.style.width = "34%";
    css.style.height = "25%";
    //tab
    cssTab.style.top = "10%";
    cssTab.style.right = "33%";
    cssTab.style.bottom = "85%";
    cssTab.style.left = "33%";
    cssTab.style.width = "34%";
    cssTab.style.height = "5%";
    //js
    js.style.top = "15%";
    js.style.right = "0";
    js.style.bottom = "60%";
    js.style.left = "67%";
    js.style.width = "33%";
    js.style.height = "25%";
    //tab
    jsTab.style.top = "10%";
    jsTab.style.right = "0";
    jsTab.style.bottom = "85%";
    jsTab.style.left = "67%";
    jsTab.style.width = "34%";
    jsTab.style.height = "5%";
    //output
    output.style.top = "45%";
    output.style.right = "0";
    output.style.bottom = "0";
    output.style.left = "0";
    output.style.width = "100%";
    output.style.height = "60%";
    //hotbar
    hotbar.style.top = "40%";
    hotbar.style.right = "50%";
    hotbar.style.bottom = "0";
    hotbar.style.left = "0";
    hotbar.style.width = "100%";
    hotbar.style.height = "5%";
  }
  //editors right
  if (type === 4) {
    //html
    html.style.top = "15%";
    html.style.right = "0";
    html.style.bottom = "60%";
    html.style.left = "50%";
    html.style.width = "50%";
    html.style.height = "25%";
    //tab
    htmlTab.style.top = "10%";
    htmlTab.style.right = "0";
    htmlTab.style.bottom = "85%";
    htmlTab.style.left = "50%";
    htmlTab.style.width = "50%";
    htmlTab.style.height = "5%";
    //css
    css.style.top = "45%";
    css.style.right = "0";
    css.style.bottom = "30%";
    css.style.left = "50%";
    css.style.width = "50%";
    css.style.height = "25%";
    //tab
    cssTab.style.top = "40%";
    cssTab.style.right = "0";
    cssTab.style.bottom = "30%";
    cssTab.style.left = "50%";
    cssTab.style.width = "50%";
    cssTab.style.height = "5%";
    //js
    js.style.top = "75%";
    js.style.right = "0";
    js.style.bottom = "0";
    js.style.left = "50%";
    js.style.width = "50%";
    js.style.height = "25%";
    //tab
    jsTab.style.top = "70%";
    jsTab.style.right = "0";
    jsTab.style.bottom = "25%";
    jsTab.style.left = "50%";
    jsTab.style.width = "50%";
    jsTab.style.height = "5%";
    //output
    output.style.top = "10%";
    output.style.right = "50%";
    output.style.bottom = "0";
    output.style.left = "0";
    output.style.width = "50%";
    output.style.height = "90%";
    //hotbar
    hotbar.style.top = "10%";
    hotbar.style.right = "50%";
    hotbar.style.bottom = "0";
    hotbar.style.left = "0";
    hotbar.style.width = "50%";
    hotbar.style.height = "5%";
  }
  //full output
  if (type === 5) {
    //output
    output.style.top = "10%";
    output.style.right = "0%";
    output.style.bottom = "0";
    output.style.left = "0%";
    output.style.width = "100%";
    output.style.height = "90%";
    output.style.zIndex = "10";
  }
  //full editor
  if (type === 6) {
    //html
    html.style.top = "15%";
    html.style.right = "0";
    html.style.bottom = "0";
    html.style.left = "0";
    html.style.width = "33%";
    html.style.height = "85%";
    //tab
    htmlTab.style.top = "10%";
    htmlTab.style.right = "0";
    htmlTab.style.bottom = "85%";
    htmlTab.style.left = "0";
    htmlTab.style.width = "33%";
    htmlTab.style.height = "5%";
    //css
    css.style.top = "15%";
    css.style.right = "0";
    css.style.bottom = "0";
    css.style.left = "33%";
    css.style.width = "34%";
    css.style.height = "85%";
    //tab
    cssTab.style.top = "10%";
    cssTab.style.right = "33%";
    cssTab.style.bottom = "85%";
    cssTab.style.left = "33%";
    cssTab.style.width = "34%";
    cssTab.style.height = "5%";
    //js
    js.style.top = "15%";
    js.style.right = "0";
    js.style.bottom = "0";
    js.style.left = "67%";
    js.style.width = "33%";
    js.style.height = "85%";
    //tab
    jsTab.style.top = "10%";
    jsTab.style.right = "0";
    jsTab.style.bottom = "85%";
    jsTab.style.left = "67%";
    jsTab.style.width = "34%";
    jsTab.style.height = "5%";
  }
}