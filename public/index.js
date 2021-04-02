const burger = document.querySelector('#burger');
const navLinks = document.querySelector('.links');
const burgerLines = document.querySelectorAll('#burger div'); /* RETURNS ARRAY OF 3 DIVS */

burger.addEventListener('click', () => {
    navLinks.classList.toggle('links-active');
    burgerLines.forEach(item => {
        item.classList.toggle('x-animation');
    });
});