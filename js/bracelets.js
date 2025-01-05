import { pagination } from './pagination.js';

async function getData() {
    const response = await fetch("js/data.json");
    const data = await response.json();
    return data;
}

async function addProductCard() {
    let postsData = await getData();
    const typeToFilter = 'bracelets';
    postsData = postsData.filter(product => product.type === typeToFilter);
    const cardsContainer = document.querySelector(".products__product-cards");

    postsData.forEach(({ productId, imgSrc, productName, productPrice }) => {
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

    pagination();
}

addProductCard();
