const burgerMenu = document.getElementById('burger-menu')
const burgerMenuIcon = document.querySelector('.burger-menu-icon')
const arrowHeading = document.querySelector('.arrow')
const mainHeading = document.querySelector('.main-heading')

window.onresize = checkBurgerMenu;

function checkBurgerMenu() {
	burgerMenu.style.display = 'none'
	document.querySelector('body').style.overflow = ''
}

document.addEventListener("DOMContentLoaded", () => {
	burgerMenu.style.display = 'none'
	mainHeading.style.display = 'block'
});

function burgerMenuExpand() {
	if (burgerMenu.style.display === 'none') {
		burgerMenu.style.display = 'flex'
		document.querySelector('body').style.overflow = 'hidden'
	} else {
		burgerMenu.style.display = 'none'
		document.querySelector('body').style.overflow = ''
	}
}

function arrowPlacing() {
	let currW = window.innerWidth
	console.log(`${currW - 32}px`)
}

document.querySelector('body').addEventListener('click', (event) => {
	if (burgerMenu.style.display = 'flex' && !burgerMenuIcon.contains(event.target.parentNode)) {
		burgerMenu.style.display = 'none'
		document.querySelector('body').style.overflow = ''
	}
})
