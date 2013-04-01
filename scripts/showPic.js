function showPic(whichpic) {
/*var source = whichpic.getAttribute("href");
var placeholder = document.getElementById("placeholder");
placeholder.setAttribute("src",source);*/
document.getElementById("placeholder").setAttribute("src",whichpic.getAttribute("href"));
}