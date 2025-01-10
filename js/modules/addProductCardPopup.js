import { getData } from './getData.js';
import { createProductCardPopup } from './createProductCardPopup.js';
import { productPopupClose } from './productPopupClose.js';
import { removePopupErrorImg } from './removePopupErrorImg.js';

export async function addProductCardPopup() {
    const postsData = await getData();
    const pageMainEl = document.querySelector(".page-main");
    const cardsContainer = document.querySelector(".products");
    
    cardsContainer.addEventListener('click', function (event) {
        
        if (event.target.closest('.product-card')) {
            const bodyEl = document.querySelector("body");
            const productCard = event.target.closest('.product-card');
            let id = productCard.getAttribute('id');
            let newData = postsData.filter(product => product.productId === id);
            bodyEl.classList.add("body--scroll-off");

            createProductCardPopup(newData, pageMainEl);
            productPopupClose();
            removePopupErrorImg();
        }
    });
}
