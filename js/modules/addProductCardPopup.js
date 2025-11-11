import { getData } from '../components/getData.js';
import { createProductCardPopupHtml } from '../components/createProductCardPopupHtml.js';
import { productPopupClose } from '../components/productPopupClose.js';
import { removeErrorImg } from '../components/removeErrorImg.js';
import { createImgPopup } from '../components/createImgPopup.js';
import { slider } from '../components/slider.js';

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

            createProductCardPopupHtml(newData, pageMainEl);
            productPopupClose();
            removeErrorImg('.product-description__img');
            createImgPopup();

            const imgWrap = document.querySelectorAll('.product-description__img-wrap');
            imgWrap.forEach((item) => {
                const imgElement = item.querySelector('.product-description__img');
                imgElement.addEventListener('error', function () {
                    item.remove();
                });
            });

            setTimeout(() => {
                const sliderEl = document.querySelector('.slider__container');
                const imgSlider = sliderEl.querySelectorAll('img');
                imgSlider.forEach((item) => {
                    if (item.naturalHeight === 0) {
                        item.remove();
                    }
                });
                slider();
            }, 50);

        }
    });
}
