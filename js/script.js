const burgerNode = document.querySelector('.burger');
const burgerCloseNode = document.querySelector('.burger-close');
const bodyHiddenNode = document.querySelector('.body-hidden');
const bodyNode = document.querySelector('.body');
const headerNavigationNode = document.querySelector('.header__navigation');
const navigationItemLinks = document.querySelectorAll('.header-navigation__item a');

burgerNode.addEventListener('click', function() {
    burgerNode.classList.add('hidden');
    burgerCloseNode.classList.remove('hidden');
    bodyHiddenNode.classList.remove('hidden');
    bodyNode.classList.add('lock');
    headerNavigationNode.style.height = "330px";
});

burgerCloseNode.addEventListener('click', function() {
    burgerNode.classList.remove('hidden');
    burgerCloseNode.classList.add('hidden');
    bodyHiddenNode.classList.add('hidden');
    bodyNode.classList.remove('lock');
    headerNavigationNode.style.height = "0px";
});

bodyHiddenNode.addEventListener('click', function() {
    burgerNode.classList.remove('hidden');
    burgerCloseNode.classList.add('hidden');
    bodyHiddenNode.classList.add('hidden');
    bodyNode.classList.remove('lock');
    headerNavigationNode.style.height = "0px";
});

navigationItemLinks.forEach(item => {
	item.addEventListener('click', function() {
		burgerNode.classList.remove('hidden');
		burgerCloseNode.classList.add('hidden');
		bodyHiddenNode.classList.add('hidden');
		bodyNode.classList.remove('lock');
		headerNavigationNode.style.height = "0px";
	});
});

