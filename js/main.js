fetch("js/data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const cardsContainer = document.querySelector(".products__main");
        data = data.slice(0, 8);
        data.forEach(({ productId, imgSrc, productName, productPrice }) => {
            const productCardEl = `
                <a id="${productId}" href="#" class="product-card">
                    <img src="${imgSrc}" alt="Product photo" class="product-card__img">
                    <div class="product-card__text">
                        <span class="product-card__title">${productName}</span>
                        <span class="product-card__price">${productPrice} ₽</span>
                    </div>
                </a>
            `;
            cardsContainer.insertAdjacentHTML("beforeend", productCardEl);
        });
    });