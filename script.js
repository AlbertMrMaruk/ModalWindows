"use strict";
const button = document.querySelectorAll(".show-modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModal = function () {
  // modal.classList.add("hidden")
  modal.classList = ["modal hidden"];
  overlay.classList = ["overlay hidden"];
};
const openModal = function () {
  //   modal.classList.remove('hidden');
  modal.classList = ["modal"];
  overlay.classList = ["overlay"];
};
const btnClk = function (btn) {
  btn.addEventListener("click", function () {
    openModal();
  });
};
for (let i = 0; i < button.length; i++) {
  btnClk(button[i]);
}
closeBtn.addEventListener("click", function () {
  closeModal();
});
overlay.addEventListener("click", function () {
  closeModal();
});
document.addEventListener("keydown", function (e) {
  if (e.code == "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    console.log("esc");
  }
});
