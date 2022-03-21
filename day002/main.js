const menu = document.querySelector('.menu');

const topLine = document.querySelector('.top__line');
const midLine = document.querySelector('.mid__line');
const bottomLine = document.querySelector('.bottom__line');

menu.addEventListener('click', ()=>
{
    topLine.classList.toggle('top__rotate');
    midLine.classList.toggle('mid__rotate');
    bottomLine.classList.toggle('bottom__rotate');
});