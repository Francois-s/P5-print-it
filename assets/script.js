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

const banner = document.getElementById("banner");
let stk = 0;
var img = document.createElement('img');


/*document.addEventListener("DOMContentLoaded", function() {
  // code
});*/
document.body.onload = function () { /* function create */
	img.classList.add("index");
	img.src = "./assets/images/slideshow/" + slides[stk].image;
	console.log(slides[stk].image);
	banner.appendChild(img);
	banner.setAttribute('current', 0);
	initDot();
}

function initDot() {
	const containerDiv = document.getElementById('dots');
	slides.forEach((s, idx) => {
		let dot = document.createElement('DIV');
		dot.classList.add('dot');
		dot.setAttribute('idx', idx)
		containerDiv.appendChild(dot);
	});
}

function activeDot() {

}

function scrollLeft() {
	stk--;
	if (stk == -1)
		stk = slides.length - 1;
	console.log(slides[stk].image);
	img.src = "./assets/images/slideshow/" + slides[stk].image;
	activeDot();
}

function scrollRight() {
	stk++;
	if (stk == (slides.length))
		stk = 0;
	console.log(slides[stk].image);
	img.src = "./assets/images/slideshow/" + slides[stk].image;
	activeDot();
}

document.getElementById("left_arrow").addEventListener("click", scrollLeft);
document.getElementById("right_arrow").addEventListener("click", scrollRight);