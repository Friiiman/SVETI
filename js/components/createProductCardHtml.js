export function createProductCardHtml(postsData, cardsContainer) {
    postsData.forEach(({ productId, imgSrc, additionalImgSrcFirst, productName, productPrice }) => {
        const productCardEl = `
            <article id="${productId}" class="product-card">
                <img src="${imgSrc}" alt="Product photo" width="1200" height="1600" loading="lazy" class="product-card__img">
                <img src="${additionalImgSrcFirst}" alt="Product photo" loading="lazy" class="product-card__img product-card__img-hover">
                <div class="product-card__text">
                    <h3 class="product-card__title">${productName}</h3>
                    <span class="product-card__price">${productPrice} ₽</span>
                </div>
            </article>
        `;
        cardsContainer.insertAdjacentHTML("beforeend", productCardEl);
    });
}
