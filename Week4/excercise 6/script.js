function inputFunction(){
  var element = document.getElementById('myInput');
  alert(element.value);
}

function loadFunction(){
  var element = document.getElementById('myButton');
  element.addEventListener('click', inputFunction);
}

document.addEventListener('DOMContentLoaded', loadFunction);
