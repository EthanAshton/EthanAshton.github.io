let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

function aufunction() {
 document.getElementById("ssid").className = "noshowslideshow-container"

  document.getElementById("prev").className = "nonprev"

  document.getElementById("next").className = "nonnext"

  document.getElementById("dots").className = "nondot"

  document.getElementById("auclick").className = "aboutus"

  document.getElementById("cuclick").className = "noncontactus"

  document.getElementById("bnclick").className = "nonbooknow"

  document.getElementById("pgclick").className = "nonphotogallary"
}

function homefunction() {
 document.getElementById("ssid").className = "slideshow-container"

  document.getElementById("prev").className = "prev"

  document.getElementById("next").className = "next"

  document.getElementById("dots").className = "dot"
  
  document.getElementById("auclick").className = "nonaboutus"

  document.getElementById("cuclick").className = "noncontactus"

document.getElementById("bnclick").className = "nonbooknow"

document.getElementById("pgclick").className = "nonphotogallary"

}

function cufunction() {
 document.getElementById("ssid").className = "noshowslideshow-container"

  document.getElementById("prev").className = "nonprev"

  document.getElementById("next").className = "nonnext"

  document.getElementById("dots").className = "nondot"

document.getElementById("cuclick").className = "contactus"

    document.getElementById("auclick").className = "nonaboutus"

  document.getElementById("bnclick").className = "nonbooknow"

  document.getElementById("pgclick").className = "nonphotogallary"
}

function bnfunction() {
 document.getElementById("ssid").className = "noshowslideshow-container"

  document.getElementById("prev").className = "nonprev"

  document.getElementById("next").className = "nonnext"

  document.getElementById("dots").className = "nondot"

document.getElementById("bnclick").className = "booknow"

    document.getElementById("auclick").className = "nonaboutus"

    document.getElementById("cuclick").className = "noncontactus"

  document.getElementById("pgclick").className = "nonphotogallary"
}

function pgfunction() {
 document.getElementById("ssid").className = "noshowslideshow-container"

  document.getElementById("prev").className = "nonprev"

  document.getElementById("next").className = "nonnext"

  document.getElementById("dots").className = "nondot"

document.getElementById("pgclick").className = "photogallary"

    document.getElementById("auclick").className = "nonaboutus"

    document.getElementById("cuclick").className = "noncontactus"

  document.getElementById("bnclick").className = "nonbooknow"

}

function opengoogle() {
  window.open("https://calendar.google.com/calendar")
}

function openig() {
  window.open("https://www.instagram.com/")
}

function openfb() {
  window.open("https://www.facebook.com/")
}

