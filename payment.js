const confirmButton = document.querySelector(".confirm");
const closeButton = document.querySelector(".modal-items button");
const modal = document.querySelector(".modal-container");

//Open the modal when confirm button is clicked
confirmButton.addEventListener("click", function() {
    modal.style.display = "flex";
})

//Close the modal when the "OK" button in the modal is clicked
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
})