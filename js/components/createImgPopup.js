import { createImgPopupHtml } from './createImgPopupHtml.js';

export function createImgPopup() {
    const imgContainer = document.querySelector(".product-description__left");

    imgContainer.addEventListener("click", (e) => {
        const { target } = e;
        let src = target.getAttribute("src");
        if (target.classList.contains("product-description__img")) {
            createImgPopupHtml(imgContainer, src);
            popupClose();
        }

        function popupClose() {
            const productDescriptionPopupEl = document.querySelector(".product-description__popup");
            const closeBtn = document.querySelector(".product-description__popup-close");

            closeBtn.addEventListener("click", (e) => {
                productDescriptionPopupEl.remove();
            });

            productDescriptionPopupEl.addEventListener("click", (e) => {
                const { target } = e;
                if (target.classList.contains("product-description__popup")) {
                    productDescriptionPopupEl.remove();
                }
            });
        }
    });
}
