const showModal = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal");
const comfirmModal = document.querySelector(".comfirm-modal");
const backDrop = document.querySelector(".back-drop");
const modal = document.querySelector(".modal");
const showComfirm = document.querySelector(".comfirm");
console.log(showModal, closeModal, comfirmModal, backDrop);
showModal.addEventListener("click", () => {
  backDrop.style.display = "block";
  modal.style.transform = "translateY(8%)";
  modal.style.opacity = "1";
});
function closeFunc() {
  backDrop.style.display = "none";
  modal.style.transform = "translateY(-100vh)";
  modal.style.opacity = "0";
}
closeModal.addEventListener("click", closeFunc);
backDrop.addEventListener("click", closeFunc);
comfirmModal.addEventListener("click", () => {
  alert("you clicked on the comfirm");
});
