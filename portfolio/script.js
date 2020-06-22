const $doc = $(document);
const $header = $("header");
const $main = $("main");
const $footer= $(".footer");
const $social_media = $(".social-media");

$doc.on("scroll", function () {
  const scrollPos = $doc.scrollTop();
  const sectionOffset = $main.offset().top;
  const headerHeight = $header.outerHeight();
  const footerOffset = $footer.offset().top;

  if (scrollPos < sectionOffset) {
    $header.css({
      opacity: 1 - scrollPos / headerHeight,
      filter: `grayscale(${(2 * scrollPos) / headerHeight}), contrast(0.3);`,
    });
  }


    if (scrollPos+headerHeight > footerOffset) {
     
      $social_media.addClass("hide")
   
  }
  else {
    $social_media.removeClass("hide");
  }
});
// SCROLL DOWN 
const arrow = document.querySelector(".container");
const porttfolio = document.querySelector("div.portfolio-section");
arrow.addEventListener("click", (e)=>{
    console.log("click")
    porttfolio.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});


