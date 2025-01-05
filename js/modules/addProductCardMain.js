import { getData } from './getData.js';
import { createProductCardHtml } from './createProductCardHtml.js';

export async function addProductCardMain() {
    let postsData = await getData();
    const cardsContainer = document.querySelector(".products__main");

    postsData = postsData.reverse().slice(0, 8);
    createProductCardHtml(postsData, cardsContainer);
}