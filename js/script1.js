/*
 * Funkcija slideshow za menjanje slike na svake 2.5 sekunde
 */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

/*
 * JavaScript funcije za galeriju
 */

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideI = 1;
showSlidesGallery(slideI);

function plusSlides(n) {
  showSlidesGallery((slideI += n));
}

function currentSlide(n) {
  showSlidesGallery((slideI = n));
}

function showSlidesGallery(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideI = 1;
  }
  if (n < 1) {
    slideI = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideI - 1].style.display = "block";
  dots[slideI - 1].className += " active";
  captionText.innerHTML = dots[slideI - 1].alt;
}

/*
 * Responsive menu - funcija koja dodaje class name za prikaz responsive menija u css
 */
function responsiveMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
