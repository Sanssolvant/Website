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

		/* Expirydate Webseite  */
		register: "Register",
		mainsite: "Main page",
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

		/* Expirydate Webseite  */
		register: "Registrierung",
		mainsite: "Haupseite",
	},
};

// Sprache setzen
if (window.location.hash) {
	if (window.location.hash === "#en") {
		// Auf jeder Seite gleich
		document.querySelectorAll(".nav-bar")[0].textContent = language.en.Home;
		document.querySelectorAll(".nav-bar")[1].textContent = language.en.Contact;
		document.querySelectorAll(".nav-bar")[2].textContent = language.en.Aboutme;
		document.querySelectorAll(".nav-bar")[3].textContent = language.en.myProjects;
		//--------------------------------------

		document.querySelector(".register").textContent = language.en.register;
		document.querySelector(".mainsite").textContent = language.en.mainsite;

		localStorage.setItem("sprache", "en");
	}
	if (window.location.hash === "#de") {
		document.querySelectorAll(".nav-bar")[0].textContent = language.de.Home;
		document.querySelectorAll(".nav-bar")[1].textContent = language.de.Contact;
		document.querySelectorAll(".nav-bar")[2].textContent = language.de.Aboutme;
		document.querySelectorAll(".nav-bar")[3].textContent = language.de.myProjects;

		// Oben auf jeder Seite gleich
		document.querySelector(".register").textContent = language.de.register;
		document.querySelector(".mainsite").textContent = language.de.mainsite;

		localStorage.setItem("sprache", "de");
	}
}

function reloadPage() {
	setTimeout(function reload() {
		location.reload(true);
	}, 100);
}
