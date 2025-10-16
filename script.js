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
  // Loop through each skill and set the width based on data attribute
  jQuery(".skills[data-skill-level]").each(function() {
    const skillLevel = jQuery(this).data("skill-level");
    jQuery(this).find(".bar-color").css({
      "background": "#fd7726cf",
      "width": skillLevel + "%"
    });
  });
});

// MOBILE MENU ANIMATION
const burger= document.querySelector('div.burger.mobile');
const menu = document.querySelector('div.menu.mobile');
const header = document.querySelector('header');
burger.addEventListener('click', function(){
   menu.classList.toggle('menu-show');
   burger.classList.toggle('menu-show');
   header.classList.toggle('menu-show');
});

// TYPING ANIMATION
const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');
const bioText = "Software engineer with over a decade of experience in software development. She is passionate about building great products and is known for her knack for improving even the most well-built systems. A specialist in JavaScript, she is always keen to expand her knowledge and master new technologies.";

let charIndex = 0;
let typingSpeed = 40; // milliseconds per character

function typeText() {
  if (charIndex < bioText.length) {
    typingText.textContent += bioText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    // Hide cursor after typing is complete
    setTimeout(() => {
      cursor.style.display = 'none';
    }, 2000);
  }
}

// Start typing after a delay (to allow header animations to complete)
setTimeout(() => {
  typeText();
}, 3000);