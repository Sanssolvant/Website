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
		if (xhr.responseText == "success") {
			alert("Email sent");
			namen.value = "";
			email.value = "";
			subject.value = "";
			message.value = "";
		} else {
			alert("Something went wrong");
		}
	};

	xhr.send(JSON.stringify(formData));
});
