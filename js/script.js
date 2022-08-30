const burgerNode = document.querySelector('.burger');
const burgerCloseNode = document.querySelector('.burger-close');
const bodyHiddenNode = document.querySelector('.body-hidden');
const bodyNode = document.querySelector('.body');
const headerNavigationNode = document.querySelector('.header-navigation');
const navigationItemLinks = document.querySelectorAll('.header-navigation__item a');

burgerNode.addEventListener('click', function() {
    burgerNode.classList.toggle('hidden');
    burgerCloseNode.classList.toggle('hidden');
    bodyHiddenNode.classList.toggle('hidden');
    bodyNode.classList.toggle('lock');
    headerNavigationNode.style.height = "330px";
});

burgerCloseNode.addEventListener('click', function() {
    burgerNode.classList.toggle('hidden');
    burgerCloseNode.classList.toggle('hidden');
    bodyHiddenNode.classList.toggle('hidden');
    bodyNode.classList.toggle('lock');
    headerNavigationNode.style.height = "0px";
});

bodyHiddenNode.addEventListener('click', function() {
    burgerNode.classList.toggle('hidden');
    burgerCloseNode.classList.toggle('hidden');
    bodyHiddenNode.classList.toggle('hidden');
    bodyNode.classList.toggle('lock');
    headerNavigationNode.style.height = "0px";
});

navigationItemLinks.forEach(item => {
    item.addEventListener('click', function() {
        burgerNode.classList.toggle('hidden');
        burgerCloseNode.classList.toggle('hidden');
        bodyHiddenNode.classList.toggle('hidden');
        bodyNode.classList.toggle('lock');
        headerNavigationNode.style.height = "0px";
    });
});