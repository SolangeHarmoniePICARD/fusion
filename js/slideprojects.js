var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var underscores = document.getElementsByClassName("underscore");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < underscores.length; i++) {
      underscores[i].className = underscores[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";
  underscores[slideIndex-1].className += " active-slide";
}
