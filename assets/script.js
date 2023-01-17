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

/*-- Content loaded _ initialisation ---*/

document.addEventListener("DOMContentLoaded", function () {
	const banner = document.getElementById("banner");
	let img = document.createElement('img');

	img.classList.add("index");
	img.src = "./assets/images/slideshow/" + slides[0].image;
	img.setAttribute('actual', 0)
	img.setAttribute('id', 'img_banner');
	console.log(slides[0].image);
	banner.appendChild(img);
	banner.setAttribute('current', 0);
	initDot();
	addTagline();
});

/*-- initDot _ initialisation des bullet points ---*/

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

/*-- addTagline _ change la tagline ---*/


function addTagline() {
	document.getElementById('tagline').innerHTML = slides[stock].tagLine;
}

/*-- activeDot _ Change le bullet point en valeur ---*/

function activeDot(scrollSens, stock) {
	document.querySelector('[idx="' + stock + '"]').classList.add('dot_selected');
	document.querySelector('[idx="' + (scrollSens == 0 ? (stock == 0 ? (slides.length - 1) : stock - 1) : (stock == slides.length - 1 ? 0 : stock + 1)) + '"]').classList.remove('dot_selected');
}

/*-- scrollLeft | scrollRight _ Change l'image du caroussel au clique ---*/

document.getElementById("left_arrow").addEventListener("click", function () {
	let img_banner = document.getElementById('img_banner');
	let stock = img_banner.getAttribute('actual');

	stock--;
	if (stock == -1) {
		stock = slides.length - 1;
	}
	img_banner.src = "./assets/images/slideshow/" + slides[stock].image;
	img_banner.setAttribute('actual', stock)
	activeDot(1, stock);
	addTagline();
});


document.getElementById("right_arrow").addEventListener("click", function () {
	let img_banner = document.getElementById('img_banner');
	let stock = img_banner.getAttribute('actual');

	stock++;
	if (stock == (slides.length)) {
		stock = 0;
	}
	img_banner.src = "./assets/images/slideshow/" + slides[stock].image;
	img_banner.setAttribute('actual', stock)
	activeDot(0, stock);
	addTagline();
});
