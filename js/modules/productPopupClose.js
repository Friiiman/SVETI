export function productPopupClose() {
    const closeBtn = document.querySelector(".breadcrumbs__close");
    const productDescriptionEl = document.querySelector(".product-description");
    const bodyEl = document.querySelector("body");
    closeBtn.addEventListener("click", (e) => {
        bodyEl.classList.remove("body--scroll-off");
        productDescriptionEl.remove();
    });

    productDescriptionEl.addEventListener("click", (e) => {
        const { target } = e;
        if (target.classList.contains("product-description")) {
            bodyEl.classList.remove("body--scroll-off");
            productDescriptionEl.remove();
        }
    });
}
