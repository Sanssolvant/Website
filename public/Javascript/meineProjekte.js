const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
	slideIcons.forEach((slideIcon) => {
		slideIcon.classList.remove("active");
	});

	slideNumber++;

	if (slideNumber > numberOfSlides - 1) {
		slideNumber = 0;
	}

	slides[slideNumber].classList.add("active");
	slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
	slideIcons.forEach((slideIcon) => {
		slideIcon.classList.remove("active");
	});

	slideNumber--;

	if (slideNumber < 0) {
		slideNumber = numberOfSlides - 1;
	}

	slides[slideNumber].classList.add("active");
	slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
	playSlider = setInterval(function () {
		slides.forEach((slide) => {
			slide.classList.remove("active");
		});
		slideIcons.forEach((slideIcon) => {
			slideIcon.classList.remove("active");
		});

		slideNumber++;

		if (slideNumber > numberOfSlides - 1) {
			slideNumber = 0;
		}

		slides[slideNumber].classList.add("active");
		slideIcons[slideNumber].classList.add("active");
	}, 5000);
};
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
	clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
	repeater();
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function showMenu() {
	document.getElementById("menu-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
	if (!e.target.matches(".nav-bar")) {
		var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains("show")) {
			myDropdown.classList.remove("show");
		}
	}
};

//Setzt die Sprache auf andere Seite
let sprache = localStorage.getItem("sprache");
let hash = window.location.hash;
if (sprache === "en" && hash === "") {
	window.location.hash = "#en";
} else if (sprache === "de" && hash === "") {
	window.location.hash = "#de";
}

const dataReload = document.querySelectorAll("[data-reload]");
const language = {
	en: {
		// Auf jeder Seite gleich
		de: "DE-Deutsch",
		en: "EN-English",
		Home: "Home",
		Contact: "Contact",
		Aboutme: "About me",
		myProjects: "my Projects",

		/* Header titel */
		header_meineProjekte: "my Projects",
		header_kontakt: "Contact",
		header_über_mich: "About me",
		header_startseite: "Home",

		/* meine Projekte webseite */
		viergewinnt_text: "The classic Connect Four game.",
		Players: "(2 Players)",
		Download: "Download",
		bankomat_text: "A mix between an ATM and e-banking.",
		MySql: "(Connected with a MySql database)",
		umrechner_text: "A converter from/to Hexidecimal, Binary, and Decimal.",
		zeitmesser_text: "Measures how long a program has been open.",
		html_text: "The website you are currently on was created by myself,",
		standard_languages: "using the standard languages",
		html: "HTML/CSS/Javascript.",
		viergewinnt_title: "Connect Four",
		bankomat_title: "ATM",
		umrechner_title: "Converter",
		zeitmesser_title: "Timer",
		webseite_title: "Website",
	},
	de: {
		// Auf jeder Seite gleich
		Home: "Startseite",
		Contact: "Kontakt",
		Aboutme: "Über mich",
		myProjects: "meine Projekte",
		de: "DE-Deutsch",
		en: "EN-English",

		/* Header titel */
		header_meineProjekte: "meine Projekte",
		header_kontakt: "Kontakt",
		header_über_mich: "Über mich",
		header_startseite: "Startseite",

		/* meine Projekte webseite */
		viergewinnt_text: "Das klassische Viergewinnt Spiel.",
		Players: "(2 Spieler)",
		Download: "Herunterladen",
		bankomat_text: "Eine Mischung aus Geldautomat und E-Banking.",
		MySql: "(Verbunden mit einer MySql-Datenbank)",
		umrechner_text: "Ein Konverter von/nach Hexadezimal, Binär und Dezimal.",
		zeitmesser_text: "Misst, wie lange ein Programm geöffnet ist.",
		html_text: "Die Website, auf der Sie sich gerade befinden, wurde von mir selbst erstellt,",
		standard_languages: "unter Verwendung der Standardsprachen",
		html: "HTML/CSS/Javascript.",
		viergewinnt_title: "Viergewinnt",
		bankomat_title: "Bankomat",
		umrechner_title: "Umrechner",
		zeitmesser_title: "Zeitmesser",
		webseite_title: "Webseite",
	},
};

// Sprache setzen
if (window.location.hash) {
	if (window.location.hash === "#en") {
		document.querySelectorAll(".nav-bar")[0].textContent = language.en.Home;
		document.querySelectorAll(".nav-bar")[1].textContent = language.en.Contact;
		document.querySelectorAll(".nav-bar")[2].textContent = language.en.Aboutme;
		document.querySelectorAll(".nav-bar")[3].textContent = language.en.myProjects;

		// Oben auf jeder Seite gleich
		document.querySelector("#titel").textContent = language.en.header_meineProjekte;

		document.querySelectorAll(".meineProjekte-text-title")[0].textContent = language.en.viergewinnt_title;
		document.querySelectorAll(".meineProjekte-text-title")[1].textContent = language.en.bankomat_title;
		document.querySelectorAll(".meineProjekte-text-title")[2].textContent = language.en.umrechner_title;
		document.querySelectorAll(".meineProjekte-text-title")[3].textContent = language.en.zeitmesser_title;
		document.querySelectorAll(".meineProjekte-text-title")[4].textContent = language.en.webseite_title;

		document.querySelector(".viergewinnt-text").textContent = language.en.viergewinnt_text;
		document.querySelector(".spieler").textContent = language.en.Players;

		document.querySelectorAll(".herunterladen")[0].textContent = language.en.Download;
		document.querySelectorAll(".herunterladen")[1].textContent = language.en.Download;
		document.querySelectorAll(".herunterladen")[2].textContent = language.en.Download;
		document.querySelectorAll(".herunterladen")[3].textContent = language.en.Download;

		document.querySelector(".bankomat-text").textContent = language.en.bankomat_text;
		document.querySelector(".mysql").textContent = language.en.MySql;

		document.querySelector(".umrechner-text").textContent = language.en.umrechner_text;

		document.querySelector(".zeitmesser-text").textContent = language.en.zeitmesser_text;

		document.querySelector(".webseite-text").textContent = language.en.html_text;

		document.querySelector(".standard-language").textContent = language.en.standard_languages;

		document.querySelector(".hsj").textContent = language.en.html;

		// Variable über weiter Seiten schicken
		localStorage.setItem("sprache", "en");
	}

	if (window.location.hash === "#de") {
		document.querySelectorAll(".nav-bar")[0].textContent = language.de.Home;
		document.querySelectorAll(".nav-bar")[1].textContent = language.de.Contact;
		document.querySelectorAll(".nav-bar")[2].textContent = language.de.Aboutme;
		document.querySelectorAll(".nav-bar")[3].textContent = language.de.myProjects;

		// Oben auf jeder Seite gleich
		document.querySelector("#titel").textContent = language.de.header_meineProjekte;

		document.querySelectorAll(".meineProjekte-text-title")[0].textContent = language.de.viergewinnt_title;
		document.querySelectorAll(".meineProjekte-text-title")[1].textContent = language.de.bankomat_title;
		document.querySelectorAll(".meineProjekte-text-title")[2].textContent = language.de.umrechner_title;
		document.querySelectorAll(".meineProjekte-text-title")[3].textContent = language.de.zeitmesser_title;
		document.querySelectorAll(".meineProjekte-text-title")[4].textContent = language.de.webseite_title;

		document.querySelector(".viergewinnt-text").textContent = language.de.viergewinnt_text;
		document.querySelector(".spieler").textContent = language.de.Players;

		document.querySelectorAll(".herunterladen").textContent = language.de.Download;

		document.querySelector(".bankomat-text").textContent = language.de.bankomat_text;
		document.querySelector(".mysql").textContent = language.de.MySql;

		document.querySelector(".umrechner-text").textContent = language.de.umrechner_text;

		document.querySelector(".zeitmesser-text").textContent = language.de.zeitmesser_text;

		document.querySelector(".webseite-text").textContent = language.de.html_text;

		document.querySelector(".standard-language").textContent = language.de.standard_languages;

		document.querySelector(".hsj").textContent = language.de.html;

		// Variable über weiter Seiten schicken
		localStorage.setItem("sprache", "de");
	}
}

function reloadPage() {
	setTimeout(function reload() {
		location.reload(true);
	}, 100);
}
