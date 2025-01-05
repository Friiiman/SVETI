import { getData } from './getData.js';
import { pagination } from './pagination.js';
import { createProductCardHtml } from './createProductCardHtml.js';

export async function addProductCard(typeToFilter = 'none') {
    let postsData = await getData();
    if (typeToFilter !== 'none') {  
        postsData = postsData.filter(product => product.type === typeToFilter);
    }
    const cardsContainer = document.querySelector(".products__product-cards");

    createProductCardHtml(postsData, cardsContainer);

    pagination();
}
