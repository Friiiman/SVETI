import { getData } from '../components/getData.js';
import { createProductCardHtml } from '../components/createProductCardHtml.js';
import { removeErrorImg } from '../components/removeErrorImg.js';

export async function addProductCardMain() {
    let postsData = await getData();
    const cardsContainer = document.querySelector(".products__main");

    postsData = postsData.reverse().slice(0, 8);
    createProductCardHtml(postsData, cardsContainer);
    removeErrorImg('.product-card__img-hover');
}
