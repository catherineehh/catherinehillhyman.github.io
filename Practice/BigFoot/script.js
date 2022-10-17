function loadBigFoot(){
  document.getElementById('bigFoot').src ='bigfoot.png'
}

function moveBigFoot() {
  alert('Woohoo, you win! You found Bigfoot!');
  var picture = document.getElementById('bigFoot');

  var x = Math.random() * 1000;
  var y = Math.random() * 1000;

  picture.style.top = x + 'px';
  picture.style.left = y + 'px';
}
