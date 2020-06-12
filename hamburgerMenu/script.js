const burger= document.querySelector('div.burger');
const menu = document.querySelector('div.menu');
const text = document.querySelector('div.text');
burger.addEventListener('click', function(){
   menu.classList.toggle('menu-show');
   burger.classList.toggle('menu-show');
   text.classList.toggle('menu-show');
});