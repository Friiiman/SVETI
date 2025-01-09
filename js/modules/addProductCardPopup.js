import { getData } from './getData.js';
import { createProductCardPopup } from './createProductCardPopup.js';

export async function addProductCardPopup() {
    const postsData = await getData();
    const pageMainEl = document.querySelector(".page-main");
    const cardsContainer = document.querySelector(".products");

    cardsContainer.addEventListener('click', function (event) {
        const productCard = event.target.closest('.product-card');
        let id = productCard.getAttribute('id');
        let newData = postsData.filter(product => product.productId === id);
        const body = document.querySelector("body");

        if (event.target.closest('.product-card')) {
            body.classList.add("body--scroll-off");

            createProductCardPopup(newData, pageMainEl);
        }

        function popupClose() {
            const closeBtn = document.querySelector(".breadcrumbs__close");
            closeBtn.addEventListener("click", (e) => {
                const body = document.querySelector("body");
                body.classList.remove("body--scroll-off");

                const productDescriptionEl = document.querySelector(".product-description");
                productDescriptionEl.remove();
            });
        }
        popupClose();

    });
}
