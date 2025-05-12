import { createElement } from './utils.js';

export function createElements(shirts) {
    const mainContainer = createElement({
        elementName: 'div',
        className: 'main-cont',
    });
    document.body.append(mainContainer);

    const header = createElement({
        elementName: 'h1',
        inner: 'Our T-Shirts'
    });
    mainContainer.append(header);

    const containerTshirts = createElement({
        elementName: 'div',
        className: 'cont-tshirts',
    });
    mainContainer.append(containerTshirts);

   for (let i = 0; i < shirts.length; i++) {
        const card = createElement({
            elementName: 'div',
            className: 'card',
        });
        containerTshirts.append(card);

        const cardImg = createElement({
            elementName: 'img',
            className: 'card-img',
        });
        if (!shirts[i].colors?.pink?.front){
            cardImg.src = shirts[i].default.front;
        } else {
        cardImg.src = shirts[i].colors.pink.front;
        }
        card.append(cardImg);


        const cardFooter = createElement({
            elementName: 'div',
            className: 'card-footer',
        });
        card.append(cardFooter);

        const cardName = createElement({
            elementName: 'h2',
            className: 'card-name',
            inner: shirts[i].name,
        });
        cardFooter.append(cardName);

        const price = createElement({
            elementName: 'h3',
            className: 'card-price',
            inner: shirts[i].price,
        });
        cardFooter.append(price);

        const cardColors = createElement({
            elementName: 'span',
            className: 'card-colors',
            inner: `${Object.keys(shirts[i].colors).length} colors`,
        });
        cardFooter.append(cardColors);

        const btnsContainer = createElement({
            elementName: 'div',
            className: 'btns-container',
        });
        cardFooter.append(btnsContainer);
    
        const viewBtn = createElement({
            elementName: 'button',
            className: 'view-btn',
            inner: 'Quick View'
        });
        btnsContainer.append(viewBtn);
    
        const pageBtn = createElement({
            elementName: 'button',
            className: 'page-btn',
            inner: 'See Page'
        });
        btnsContainer.append(pageBtn);
    }
   

}