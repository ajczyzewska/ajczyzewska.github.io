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
    porttfolio.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

// SCROLL ON MENU CLICK
const $portfolio_btn = $(".portfolio.menu");
$portfolio_btn.on('click', function() {
  porttfolio.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
})

const contact = document.querySelector(".footer");
const $contact_btn = $(".contact.menu");
$contact_btn.on('click', function() {
  contact.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
})


// SKILLS BAR
jQuery(document).ready(function() {
  // HTML
  jQuery(".bar-color").css({
    "background": "#fd7726cf",
    "width": "95%"
  });
  // CSS
  jQuery(".skills:nth-of-type(2) .bar-color").css({
    "width": "80%"
  });
  //jQuery
  jQuery(".skills:nth-of-type(3) .bar-color").css({
    "width": "70%"
  });
  // js
  jQuery(".skills:nth-of-type(4) .bar-color").css({
    "width": "55%"
  });
  // Cypress
  jQuery(".skills:nth-of-type(5) .bar-color").css({
    "width": "75%"
  });
  // ReactJS
  jQuery(".skills:nth-of-type(6) .bar-color").css({
    "width": "30%"
  });
  //Axios
  jQuery(".skills:nth-of-type(7) .bar-color").css({
    "width": "55%"
  });
  //Figma
  jQuery(".skills:nth-of-type(8) .bar-color").css({
    "width": "80%"
  });
  //Github
  jQuery(".skills:nth-of-type(9) .bar-color").css({
    "width": "80%"
  });
});