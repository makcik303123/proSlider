import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
	loop: true,

	// autoplay: {
	// 	delay: 4000,
	// },

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	speed: 500,

	effect: "creative",
	creativeEffect: {
		prev: {
			translate: ["-100%", 0, 0],
			rotate: [0, 0, -110],
		},
		next: {
			translate: ["100%", 0, 0],
			rotate: [0, 0, 110],
		},
	},

	centeredSlides: true,
	slidesPerView: "auto",

	slidesPerView: 2,
});

const nameField = document.getElementById("name");
const bonusField = document.getElementById("bonus");
const bottles = document.querySelectorAll(".slider__bottle");
let pepsiMaxSate = false;

swiper.on("realIndexChange", () => {
	const indexActiveSlide = swiper.realIndex + 1;
	const activeSlide = document.getElementById(indexActiveSlide);
	console.log();

	console.log(indexActiveSlide, activeSlide.getAttribute("data-name"));

	nameField.innerText = activeSlide.getAttribute("data-name");

	if (pepsiMaxSate) {
		bonusField.innerText = bonusField.getAttribute("data-type-1");
		// bottles[0].classList.add()
	} else {
		bonusField.innerText = bonusField.getAttribute("data-type-2");
	}

	bottles.forEach((bottle) => {
		bottle.classList.toggle("unactive");
	});

	pepsiMaxSate = !pepsiMaxSate;
});
