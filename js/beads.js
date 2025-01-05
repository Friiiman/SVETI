import { pagination } from './pagination.js';

async function getData() {
    const response = await fetch("js/data.json");
    const data = await response.json();
    return data;
}

async function addProductCard() {
    let postsData = await getData();
    const typeToFilter = 'beads';
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

function pagination() {
    const content = document.querySelector('.products__product-cards');
    const itemsPerPage = 12; // set number of items per page
    let currentPage = 0;
    const items = Array.from(content.getElementsByTagName('a')).slice(0);

    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        items.forEach((item, index) => {
            item.classList.toggle('pagination--hidden', index < startIndex || index >= endIndex);
        });
        updateActiveButtonStates();
    }
}

addProductCard();
