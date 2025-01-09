export function productPopupClose() {
    const closeBtn = document.querySelector(".breadcrumbs__close");
    closeBtn.addEventListener("click", (e) => {
        const bodyEl = document.querySelector("body");
        bodyEl.classList.remove("body--scroll-off");

        const productDescriptionEl = document.querySelector(".product-description");
        productDescriptionEl.remove();
    });
}