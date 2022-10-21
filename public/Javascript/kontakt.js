/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
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

/* Kontakt Seite */

const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

portfolioItems.forEach((portfolioItem) => {
	portfolioItem.addEventListener("mouseover", () => {
		portfolioItem.childNodes[1].classList.add("img-darken");
	});

	portfolioItem.addEventListener("mouseout", () => {
		portfolioItem.childNodes[1].classList.remove("img-darken");
	});
});

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

		/* kontakt webseite */
		alert_success: "Message Sent! Thank you for contacting me.",
		alert_error: "Something went wrong! Please try again.",
		contact_form: "Contact Me",
		YourName: "Name",
		YourEmail: "Email",
		Subject: "Subject",
		Message: "Message",
		Send: "Send",
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

		/* kontakt webseite */
		alert_success: "Nachricht gesendet! Danke fürs kontaktieren",
		alert_error: "Etwas ist schief gelaufen! Bitte versuche es erneut.",
		contact_form: "Kontaktiere mich",
		YourName: "Name",
		YourEmail: "Email",
		Subject: "Thema",
		Message: "Nachricht",
		Send: "Senden",
	},
};

// Sprache setzen
if (window.location.hash) {
	if (window.location.hash === "#en") {
		document.querySelectorAll(".nav-bar")[0].textContent = language.en.Home;
		document.querySelectorAll(".nav-bar")[1].textContent = language.en.Contact;
		document.querySelectorAll(".nav-bar")[2].textContent = language.en.Aboutme;
		document.querySelectorAll(".nav-bar")[3].textContent =
			language.en.myProjects;

		// Oben auf jeder Seite gleich
		document.querySelector("#titel").textContent = language.en.header_kontakt;

		document.querySelector(".contact-form h1").textContent =
			language.en.contact_form;

		document.querySelectorAll(".text-box-name").placeholder =
			language.en.YourName;

		document.querySelectorAll(".text-box-email").placeholder =
			language.en.YourEmail;

		document.querySelector(".text-box-subject").placeholder =
			language.en.Subject;

		document.querySelector(".text-box-message").placeholder =
			language.en.Message;

		document.querySelector(".send-btn").textContent = language.en.Send;

		document.querySelector("#alert-success").textContent =
			language.en.alert_success;

		document.querySelector("#alert-error").textContent =
			language.en.alert_error;

		// Variable über weiter Seiten schicken
		localStorage.setItem("en", "en");
	}
	if (window.location.hash === "#de") {
		document.querySelectorAll(".nav-bar")[0].textContent = language.de.Home;
		document.querySelectorAll(".nav-bar")[1].textContent = language.de.Contact;
		document.querySelectorAll(".nav-bar")[2].textContent = language.de.Aboutme;
		document.querySelectorAll(".nav-bar")[3].textContent =
			language.de.myProjects;

		// Oben auf jeder Seite gleich
		document.querySelector("#titel").textContent = language.de.header_kontakt;

		document.querySelector(".contact-form h1").textContent =
			language.de.contact_form;

		document.querySelectorAll(".text-box-name").placeholder =
			language.de.YourName;

		document.querySelectorAll(".text-box-email").placeholder =
			language.de.YourEmail;

		document.querySelector(".text-box-subject").placeholder =
			language.de.Subject;

		document.querySelector(".text-box-message").placeholder =
			language.de.Message;

		document.querySelector(".send-btn").textContent = language.en.Send;

		document.querySelector("#alert-success").textContent =
			language.de.alert_success;

		document.querySelector("#alert-error").textContent =
			language.de.alert_error;

		// Variable über weiter Seiten schicken
		localStorage.setItem("de", "de");
	}
}

function reloadPage() {
	setTimeout(function reload() {
		location.reload(true);
	}, 100);
}

const contactForm = document.querySelector(".contact");
let namen = document.querySelector(".text-box-name");
let email = document.querySelector(".text-box-email");
let subject = document.querySelector(".text-box-subject");
let message = document.querySelector(".text-box-message");

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();

	let formData = {
		name: namen.value,
		email: email.value,
		subject: subject.value,
		message: message.value,
	};

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.onload = function () {
		console.log(xhr.responseText);
		if (xhr.responseText == "Success") {
			document.querySelector("#alert-success").style.display = "block";
			namen.value = " ";
			email.value = " ";
			subject.value = " ";
			message.value = " ";
		} else {
			document.querySelector("#alert-error").style.display = "block";
		}
	};

	xhr.send(JSON.stringify(formData));
});
