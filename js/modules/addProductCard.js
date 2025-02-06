import { getData } from '../components/getData.js';
import { pagination } from '../components/pagination.js';
import { createProductCardHtml } from '../components/createProductCardHtml.js';
import { removeErrorImg } from '../components/removeErrorImg.js';

export async function addProductCard(typeToFilter = 'none') {
    let postsData = await getData();
    if (typeToFilter !== 'none') {  
        postsData = postsData.filter(product => product.type === typeToFilter);
    }
    const cardsContainer = document.querySelector(".products__product-cards");

    createProductCardHtml(postsData, cardsContainer);
    removeErrorImg(".product-card__img-hover");

    pagination();
}
