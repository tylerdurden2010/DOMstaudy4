function showPic(whichpic) {
/*var source = whichpic.getAttribute("href");
var placeholder = document.getElementById("placeholder");
placeholder.setAttribute("src",source);*/
if (!document.getElementById("placeholder")) return false;
document.getElementById("placeholder").setAttribute("src",whichpic.getAttribute("href"));
if (!document.getElementById("description")) return false;
var text = whichpic.getAttribute("title");
var description = document.getElementById("description");
description.firstChild.nodeValue = text;
}
/*This alert statement will give you the value you¡¯re looking for:
alert(description.childNodes[0].nodeValue);
This will return a value of ¡°Choose an image.¡± This means that you¡¯re accessing the
childNodes array and getting the value of the first element (index number zero).
*/
function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for ( var i=0; i < links.length; i++) {
	links[i].onclick = function() {
	showPic(this);
	return false;
				}
					}
}


function countBodyChildren() {
var body_element = document.getElementsByTagName("body")[0];
alert (body_element.nodeType);
/*
 Yet, when we invoke the  countBodyChildren function, we get a much higher figure. This is because
elements are just one type of node.The childNodes property returns an array containing all types of nodes, 
not just element
nodes. It will bring back all the attribute nodes and text nodes as well. In fact, just about
everything in a document is some kind of node. Even spaces and line breaks are inter-
preted as nodes and are included in the childNodes array.
That explains why the result produced by countBodyChildren is so high
*/
}
function popUp(winURL) {
window.open(winURL,"popup","width=320,height=480");
}
//window.onload = countBodyChildren;

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
	window.onload = func;
}
 else {
	window.onload = function() {
	oldonload();
	func();
			}
	}
}





