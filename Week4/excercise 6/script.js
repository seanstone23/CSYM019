function inputFunction(){
  var element = document.getElementById('myInput');
  var div = document.getElementById('content');
  div.firstChild.nodeValue = element.value;
}

function loadFunction(){
  var element = document.getElementById('myButton');
  element.addEventListener('click', inputFunction);
}

document.addEventListener('DOMContentLoaded', loadFunction);
