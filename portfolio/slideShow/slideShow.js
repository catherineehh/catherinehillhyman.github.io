var slideIndex = [1,1,1];
var slideID = ["byhImg", "byhBookImg", "testImg"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function nextSlide(n, no){
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no){
  var i;
  var slides = document.getElementsByClassName(slideID[no]);
  if (n > slides.length){
    slideIndex[no] = 1;
  }
  if (n < 1){
    slideIndex[no] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[no]-1].style.display = "flex";
}

showSlides(slideIndex);
