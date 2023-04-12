const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu_box');


const burgerClick = ()=>{
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu_box--active');


};

hamburger.addEventListener("click",burgerClick,false);

const skill_inner =document.querySelector('.skill_inner');
const skill = document.querySelector('.skill');

const skillSkroll = ()=> {
    skill_inner.classList.toggle('skill_inner--scroll');
}

skill.addEventListener("scroll",skillSkroll,false);

