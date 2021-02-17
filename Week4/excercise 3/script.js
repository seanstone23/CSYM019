function loadFunction(){
var element = document.getElementById('myTitle');
element.firstChild.nodeValue = 'New Heading';

var element = document.getElementById('myPara');
element.firstChild.nodeValue = 'New Paragraph';
}

document.addEventListener('DOMContentLoaded', loadFunction);
