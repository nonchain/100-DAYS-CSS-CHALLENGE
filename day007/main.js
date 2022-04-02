const notifications = document.querySelector('.notifications');

const searchIcon = document.querySelector('.search__icon');
const searchBox = document.querySelector('.search');
const menuIcon = document.querySelector('.menu__icon');
const menuBox = document.querySelector('.menu');

searchIcon.addEventListener('click', () =>
{
    searchBox.classList.toggle('show-search');
});

menuIcon.addEventListener('click', () =>
{
    menuBox.classList.toggle('show-menu');
    notifications.classList.toggle('move-notif');
});