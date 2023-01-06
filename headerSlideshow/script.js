let slideHeaderIndex = 0;
showSlidesHeader();

function showSlidesHeader() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideHeaderIndex++;
    if (slideHeaderIndex > slides.length) { slideHeaderIndex = 1 }
    slides[slideHeaderIndex - 1].style.display = "block";
    setTimeout(showSlidesHeader, 3000); // Change image every 2 seconds
}
