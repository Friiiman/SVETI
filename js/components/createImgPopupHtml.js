export function createImgPopupHtml(cardsContainer, imgSrc) {
    const imgPopupEl = `
        <div class="product-description__popup">
            <div class="product-description__popup-inner">
                <img src="${imgSrc}" alt="Фото изделия" class="product-description__popup-img">
                <img src="./styles/img/close-popup-img.svg" alt="Закрыть окно" class="product-description__popup-close">
            </div>
        </div>
    `;
    cardsContainer.insertAdjacentHTML("beforeend", imgPopupEl);
}
