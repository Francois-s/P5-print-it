const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var img = document.createElement('img');
let stock = 0;

document.addEventListener("DOMContentLoaded", function () {
	const banner = document.getElementById("banner");
	img.classList.add("index");
	img.src = "./assets/images/slideshow/" + slides[stock].image;
	console.log(slides[stock].image);
	banner.appendChild(img);
	banner.setAttribute('current', 0);
	initDot();
	addTagline();
});

function initDot() {
	const containerDiv = document.getElementById('dots');
	slides.forEach((s, idx) => {
		let dot = document.createElement('DIV');
		dot.classList.add('dot');
		if (idx == 0)
			dot.classList.add('dot_selected');
		dot.setAttribute('idx', idx)
		containerDiv.appendChild(dot);
	});
}

function addTagline() {
	var tagline_1 = document.getElementById('tagline');
	tagline_1.innerHTML = slides[stock].tagLine;
	
}

function activeDot(x) {
	let currentElem = document.querySelector('[idx="' + stock + '"]');
	let presElement = document.querySelector('[idx="' + (x == 0 ? (stock == 0 ? (slides.length - 1) : stock - 1) : (stock == slides.length - 1 ? 0 : stock + 1)) + '"]');

	currentElem.classList.add('dot_selected');
	presElement.classList.remove('dot_selected');
}

function scrollLeft() {
	stock--;
	if (stock == -1)
		stock = slides.length - 1;
	img.src = "./assets/images/slideshow/" + slides[stock].image;
	activeDot(1);
	addTagline();
}

function scrollRight() {
	stock++;
	if (stock == (slides.length))
		stock = 0;
	img.src = "./assets/images/slideshow/" + slides[stock].image;
	activeDot(0);
	addTagline();
}

document.getElementById("left_arrow").addEventListener("click", scrollLeft);
document.getElementById("right_arrow").addEventListener("click", scrollRight);