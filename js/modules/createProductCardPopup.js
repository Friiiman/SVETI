export function createProductCardPopup(postsData, cardsContainer) {
    postsData.forEach(({ productId, imgSrc, additionalImgSrcFirst, additionalImgSrcSecond, productName, productPrice, breadcrumbs, description, length }) => {
        const productCardEl = `
            <div id="p-${productId}" class="product-description">
                <div class="product-description__inner">
                    <nav class="breadcrumbs">
                        <ul class="breadcrumbs__list">
                            <li class="breadcrumbs__item">
                                <a href="all-products.html" class="breadcrumbs__link">Все изделия</a>
                            </li>
                            <li class="breadcrumbs__item">
                                <a href="#" class="breadcrumbs__link">${breadcrumbs}</a>
                            </li>
                            <li class="breadcrumbs__item">
                                <a href="#" class="breadcrumbs__link">${productName}</a>
                            </li>
                        </ul>
                        <img src="./styles/img/cross-close.svg" alt="Закрыть" class="breadcrumbs__close">
                    </nav>
                    <div class="product-description__left">
                        <img src="${imgSrc}" alt="Фото товара" class="product-description__img">
                        <img src="${additionalImgSrcFirst}" alt="Фото товара" class="product-description__img">
                        <img src="${additionalImgSrcSecond}" alt="Фото товара" class="product-description__img">
                    </div>
                    <div class="product-description__right">
                        <h2 class="product-description__title">${productName}</h2>
                        <p class="product-description__text">${description}</p>
                        <span class="product-description__char"><strong>Длина: </strong>${length} см</span>
                        <span class="product-description__price">${productPrice} ₽</span>
                        <button class="product-description__button">Купить в один клик</button>
                        <details class="product-description__details">
                            <summary class="product-description__summary">Уход за изделием</summary>
                            <h3>РЕКОМЕНДАЦИИ ПО УХОДУ ЗА УКРАШЕНИЯМИ</h3>
                            <p>Чтобы любимые украшения оставались с вами как можно дольше, очень важно во время их эксплуатации придерживаться следующих правил:</p>
                            <ul>
                                <li>Изделия не должны контактировать с водой, спиртовыми растворами, кремами, духами, дезодорантами и средствами для волос.<br>
                                </li>
                                <li>Не рекомендуем в украшениях посещать фитнес, солярий, пляж, СПА процедуры и заниматься уборкой.<br>
                                </li>
                                <li>Не наносите парфюмерию, крема и лосьоны, если на вас украшения. Дайте время средствам высохнуть или впитаться.<br>
                                </li>
                                <li>Очищать бижутерию можно мягкой тканевой салфеткой, либо ватой с использованием специальных чистящих средств.<br>
                                </li>
                                <li>Храните изделия отдельно друг от друга, на открытой поверхности. Используйте пыльники только для транспортировки.<br>
                                </li>
                                <li>Обязательно снимайте украшения перед сном.<br>
                                </li>
                                <li>Не подвергайте изделия механическим воздействиям. Предохраняйте от ударов и падений.<br>
                                </li>
                                <li>В украшениях не рекомендуется купаться. Хлорированная и соленая вода являются агрессивной химической средой для покрытий ювелирных сплавов.<br>
                                </li>
                            </ul>
                            <p>Промывайте металлические элементы украшения каждый раз после долгой носки: окуните изделие в раствор из хозяйственного мыла без отдушек и примесей, промойте в проточной воде и высушите на мягкой ткани. Опасайтесь повреждения защитного слоя, которым покрыты ювелирные сплавы.</p>
                            <p>Изделия с металлом нельзя чистить с помощью порошков и абразивов.</p>
                            <p>Вставки из каучука, дерева и жемчуга нельзя подвергать воздействию воды и моющих средств.</p>
                            <p><br><strong>ВАЖНО</strong></p>
                            <p>Даже при соблюдении всех перечисленных нюансов, украшения все равно могут потемнеть в случае, если у вас нарушен PH-баланс организма.</p>
                            <p><strong>PH</strong>&nbsp;- это баланс кислотно-щелочной среды. Если в любой из жидкостей организма повышается количества ионов, то Ph-баланс начинает смещаться в кислую сторону. При повышении кислотной среды нарушается усвоение минералов, а из-за их отсутствия, вся кислота выходит через дыхание и пот.</p>
                            <p>Кислота разрушает покрытие любой бижутерии и в случае таких проблем со здоровьем, избежать потемнения практически невозможно.</p>
                        </details>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.insertAdjacentHTML("afterbegin", productCardEl);
    });
}