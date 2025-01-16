export function createImgPopup() {
    const imgContainer = document.querySelector(".product-description__left");

    imgContainer.addEventListener("click", (e) => {
        const { target } = e;
        let src = target.getAttribute("src");
        if (target.classList.contains("product-description__img")) {
            createImgPopupHtml(imgContainer, src);
        }

        const productDescriptionPopupEl = document.querySelector(".product-description__popup");

        imgPopupClose()

        productDescriptionPopupEl.addEventListener("click", (e) => {
            const { target } = e;
            if (target.classList.contains("product-description__popup")) {
                productDescriptionPopupEl.remove();
            }
        });

        function imgPopupClose() {
            const closeBtn = document.querySelector(".product-description__popup-close");
            closeBtn.addEventListener("click", (e) => {
                productDescriptionPopupEl.remove();
            });
        }
    });

    function createImgPopupHtml(cardsContainer, imgSrc) {
        const imgPopupEl = `
            <div class="product-description__popup">
                <div class="product-description__popup-inner">
                    <img src="${imgSrc}" alt="Фото изделия" loading="lazy" class="product-description__popup-img">
                    <img src="./styles/img/close-popup-img.svg" alt="Закрыть окно" class="product-description__popup-close">
                </div>
            </div>
        `;
        cardsContainer.insertAdjacentHTML("beforeend", imgPopupEl);
    }
}
