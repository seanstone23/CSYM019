function clickTitle(){
  var element = document.getElementById('myTitle');
  element.firstChild.nodeValue = 'New Heading';
}

function clickPara(){
  var element = document.getElementById('myPara');
  element.firstChild.nodeValue = 'New Paragraph';
}

function loadFunction(){
  var element = document.getElementById('myTitle');
  element.addEventListener('click', clickTitle);

  var element = document.getElementById('myPara');
  element.addEventListener('click', clickPara);
}

document.addEventListener('DOMContentLoaded', loadFunction);
