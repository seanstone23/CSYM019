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
  element.addEventListener('mouseenter', clickTitle);

  var element = document.getElementById('myPara');
  element.addEventListener('mouseleave', clickPara);
}

document.addEventListener('DOMContentLoaded', loadFunction);
