
const gallery = document.querySelector(".row");
const NUMBER_OF_IMAGES = 3;
const column1 = document.createElement("div");
column1.classList.add('column', '1');
const column2 = document.createElement("div");
column2.classList.add('column', '2');
const column3 = document.createElement("div");
column3.classList.add('column', '3');
const column4 = document.createElement("div");
column4.classList.add('column', '4');
gallery.appendChild(column1);
gallery.appendChild(column2);
gallery.appendChild(column3);
gallery.appendChild(column4);

for (let imageNo = 1; imageNo <= NUMBER_OF_IMAGES; imageNo++) {
  let imageToInsert = document.createElement("img");
  imageToInsert.src = `/flexibleGallery/${imageNo}.jpg`;
  imageToInsert.classList.add('hover-shadow');
  imageToInsert.onclick = function () { openModal(); currentSlide(imageNo) };
  if (imageNo == 1 || imageNo % 4 == 0) {
    column1.appendChild(imageToInsert)
  }
  else if (imageNo == 2 || (imageNo - 1) % 4 == 0) {
    column2.appendChild(imageToInsert)
  }
  else if (imageNo == 3 || (imageNo - 2) % 4 == 0) {
    column3.appendChild(imageToInsert)
  }
  else if (imageNo == 4 || (imageNo - 3) % 4 == 0) {
    column4.appendChild(imageToInsert)
  }
}
// Modal elements: 
const modalContent = document.querySelector(".modal-content");
for (let imageNo = 1; imageNo <= NUMBER_OF_IMAGES; imageNo++) {
  let divWithImage = document.createElement("div");
  divWithImage.classList.add('myModalSlides');
  let imageToInsert = document.createElement("img");
  imageToInsert.src = `/flexibleGallery/${imageNo}.jpg`;
  divWithImage.appendChild(imageToInsert);
  modalContent.appendChild(divWithImage);
}
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
let slideIndex = 1
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myModalSlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}
