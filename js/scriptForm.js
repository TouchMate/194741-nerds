var link = document.querySelector(".address__btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content__close");
var form = popup.querySelector(".mail-form");
var fieldName = popup.querySelector("[name=full-name]");
var fieldEmail = popup.querySelector("[name=email]");
var textarea = popup.querySelector(".mail-form__textarea");


link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	fieldName.focus();
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});
window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});