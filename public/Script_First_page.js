/* Functie pentru a face nav sticky*/
window.onscroll = function() {sticky_navbar()};
    
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function sticky_navbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*Functie pentru a face nav responsive*/
function responsive_navbar() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function color_change() {
  var x = document.getElementsByClassName("content");
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = "#" + randomColor;
  }
}

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

function grid_color_changer(){
  var c = document.getElementById("myDIV").children;
  var i;
  for (i = 0; i < c.length; i++) {
    c[i].style.backgroundColor = "red";
  }
}

function del() {
  document.getElementById("myDIV").classList.toggle("new_grid-container");
}

function citat_fond_diff(){
  var elem = document.getElementById("titlu");
  var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("font");
  document.getElementById("citat_mod").style.font  = theCSSprop;
}

var tog;
function startColor() {
  tog = setInterval(setColor, 1500);
}

function setColor() {
var x = document.getElementById("titlu");
var randomColor = Math.floor(Math.random()*16777215).toString(16);
x.style.backgroundColor = "#" + randomColor;
}

function stopColor() {
clearInterval(tog);
}

function show_date() {
  var v = new Date();
  document.getElementById("data_afis").innerHTML = v ;
}