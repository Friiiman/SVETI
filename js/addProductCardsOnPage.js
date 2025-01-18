import { addProductCard } from './modules/addProductCard.js';

let type = document.title.split(' ')[0]
let typeToFilter = 'none';

switch (type) {
    case 'Бусы':
        typeToFilter = 'beads';
        break;
    case 'Браслеты':
        typeToFilter = 'bracelets';
        break;
    case 'Чокеры':
        typeToFilter = 'chokers';
        break;
    case 'Серьги':
        typeToFilter = 'earrings';
        break;
    case 'Комплекты':
        typeToFilter = 'komplects';
        break;
    case 'Колье':
        typeToFilter = 'necklace';
        break;
    case 'Подвески':
        typeToFilter = 'pendants';
        break;
    case 'Кольца':
        typeToFilter = 'rings';
        break;
    case 'Сотуары':
        typeToFilter = 'sautoir';
        break;
    default:
        typeToFilter = 'none';
}

addProductCard(typeToFilter);
