const openButton = document.getElementById("modal-open");
const modal = document.getElementById("modal");
const mask = document.getElementById("mask")

openButton.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.add("modal_open");
    mask.classList.add("mask_open");

    const closeButton = document.getElementById("modal-close");
    closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("modal_open");
        mask.classList.remove("mask_open");
    });
});




