var wallmodal = document.getElementById("wallModal");
var wallbtn = document.getElementById("thewall");

var bandmodal = document.getElementById("bandModal");
var bandbtn = document.getElementById("portfolio");

var modaalmodal = document.getElementById("modaalModal");
var modaalbtn = document.getElementById("modaal2");

var scrollmodal = document.getElementById("scrollModal");
var scrollbtn = document.getElementById("scroll");

var aperturemodal = document.getElementById("apertureModal");
var aperturebtn = document.getElementById("aperture");

var bootmodal = document.getElementById("bootModal");
var bootbtn = document.getElementById("js+boot");

var modal = document.getElementsByClassName("modal");
var span = document.getElementsByClassName("close")[0];

wallbtn.onclick = function () {
    wallmodal.style.display = "block";
};

bandbtn.onclick = function () {
    bandmodal.style.display = "block";
};

scrollbtn.onclick = function () {
    scrollmodal.style.display = "block";
};

aperturebtn.onclick = function () {
    aperturemodal.style.display = "block";
};

modaalbtn.onclick = function () {
    modaalmodal.style.display = "block";
};

bootbtn.onclick = function () {
    bootmodal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {wallmodal.style.display = "none";
    }
};