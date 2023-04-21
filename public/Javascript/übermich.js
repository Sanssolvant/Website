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

		/* Übermich Webseite  */
		hime: "That's me...",
		übermich_text:
			"Born and raised in Uznach, Switzerland, I quickly found interest in the world of computer science. From a young age I was fascinated by this rectangular thing called computer, at the age of 18 I configured and assembled my first one.Over the years, my attention turned more and more towards programming, so much that at the end of 2022 I started a shortened second apprenticeship for 2 years as a computer scientist specializing in application development in Zürich.",
		übermich_text2:
			"At the moment I haven't really specialized yet in any IT area or programming language. But, I have gained most experience in the areas of Java and website programming. In a small part of my projects, I was able to build up some knowledge on MySQL databases.",
		übermich_text3: "Have a look at the register ",
		übermich_text4: "my projects,",
		übermich_text5: "there you will find some current written projects.",
		datUnterschrift: "Uznach, 03. September. 2022",
		lebenslauf: "Download",
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

		/* Übermich Webseite  */
		hime: "Das bin ich...",
		übermich_text:
			"Geboren und aufgewachsen in Uznach, Schweiz, fand ich schnelles Interesse für die Welt der Informatik. Schon in jungen Jahren faszinierte mich dieses rechteckige Ding namens Computer, im Alter von 18 Jahren konfigurierte und Baute ich meinen ersten zusammen. Mit den Jahren richtete sich mein Augenmerk immer mehr in Richtung des Programmierens, so sehr, dass ich nun Ende 2022 eine verkürzte zweit Lehre für 2 Jahre als Berufsumsteiger Informatiker Fachrichtung Applikationsentwicklung in Zürich startete.",
		übermich_text2:
			"Zurzeit habe ich mich noch nicht wirklich auf ein IT-Gebiet oder Programmiersprache spezialisiert. Die meiste Erfahrung habe ich aber auf den Gebieten Java und Webseiten Programmierung gesammelt. Bei einem kleinen Teil meiner Projekten, konnte ich auch schon etwas Wissen in MySQL Datenbanken aufbauen.",
		übermich_text3: "Schauen Sie sich doch auf dem Register",
		übermich_text4: "meine Projekte",
		übermich_text5: "um, dort finden Sie einige aktuelle geschriebene Projekte.",
		datUnterschrift: "Uznach, 03. September. 2022",
		lebenslauf: "Herunterladen",
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
		document.querySelector("#titel").textContent = language.en.header_über_mich;

		document.querySelector(".das-bin-ich-title").textContent = language.en.hime;

		document.querySelector(".übermich-text").textContent = language.en.übermich_text;

		document.querySelector(".übermich-text2").textContent = language.en.übermich_text2;

		document.querySelector(".übermich-text3").textContent = language.en.übermich_text3;

		document.querySelector(".übermich-text4").textContent = language.en.übermich_text4;

		document.querySelector(".übermich-text5").textContent = language.en.übermich_text5;

		document.querySelector(".übermich-datum").textContent = language.en.datUnterschrift;

		/* document.querySelector(".cv").textContent = language.en.lebenslauf; */

		localStorage.setItem("sprache", "en");
	}
	if (window.location.hash === "#de") {
		document.querySelectorAll(".nav-bar")[0].textContent = language.de.Home;
		document.querySelectorAll(".nav-bar")[1].textContent = language.de.Contact;
		document.querySelectorAll(".nav-bar")[2].textContent = language.de.Aboutme;
		document.querySelectorAll(".nav-bar")[3].textContent = language.de.myProjects;

		// Oben auf jeder Seite gleich
		document.querySelector("#titel").textContent = language.de.header_über_mich;

		document.querySelector(".das-bin-ich-title").textContent = language.de.hime;

		document.querySelector(".übermich-text").textContent = language.de.übermich_text;

		document.querySelector(".übermich-text2").textContent = language.de.übermich_text2;

		document.querySelector(".übermich-text3").textContent = language.de.übermich_text3;

		document.querySelector(".übermich-text4").textContent = language.de.übermich_text4;

		document.querySelector(".übermich-text5").textContent = language.de.übermich_text5;

		document.querySelector(".übermich-datum").textContent = language.de.datUnterschrift;

		/* 	document.querySelector(".cv").textContent = language.de.lebenslauf; */

		localStorage.setItem("sprache", "de");
	}
}

function reloadPage() {
	setTimeout(function reload() {
		location.reload(true);
	}, 100);
}
