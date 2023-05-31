const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu_box');


const burgerClick = ()=>{
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu_box--active');


};

hamburger.addEventListener("click",burgerClick,false);




