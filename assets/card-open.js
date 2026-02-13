document.addEventListener("click", function(e) {

  if (e.target.classList.contains("product-card__modal-trigger")) {
    const id = e.target.dataset.productId;
    document.getElementById("quick-view-" + id).classList.add("active");
  }

  if (
    e.target.classList.contains("quick-view-modal__overlay") ||
    e.target.classList.contains("quick-view-modal__close")
  ) {
    e.target.closest(".quick-view-modal").classList.remove("active");
  }

});
