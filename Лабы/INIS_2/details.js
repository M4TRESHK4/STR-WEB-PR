const shirt = JSON.parse(localStorage.getItem('shirt'));
const imgGroup = document.querySelector('.imgGroup');
const priceGroup = document.querySelector('.priceGroup');
const colorGroup = document.querySelector('.colorGroup');

localStorage.setItem('side', 'front');//устанавливаю началные значения
localStorage.setItem('color', Object.keys(shirt.colors)[0]);

const h2 = document.createElement('h2');
h2.textContent = shirt.name || 'Shirt with no name';
const img = document.createElement('img');
img.src = '../' + shirt.colors.white['front'];
imgGroup.appendChild(h2);
imgGroup.appendChild(img);
const p = document.createElement('p');
p.textContent = shirt.price;
const text = document.createElement('p');
if (shirt.description.length > 50)
    text.textContent = shirt.description.substring(0, 50) + '...';
else text.textContent = 'some text here';
priceGroup.appendChild(p);
priceGroup.appendChild(text);
const side = document.createElement('div');
side.className = 'side';
const t1 = document.createElement('p');
t1.textContent = 'Side:';
const bF = document.createElement('button');
bF.textContent = 'Front';
bF.addEventListener('click', () => {
    localStorage.setItem('side', 'front');
    const color = localStorage.getItem('color');
    img.src = '../' + shirt.colors[color]['front'];
});
const bB = document.createElement('button');
bB.textContent = 'Back';
bB.addEventListener('click', () => {
    localStorage.setItem('side', 'back');
    const color = localStorage.getItem('color');
    img.src = '../' + shirt.colors[color]['back'];
});
side.appendChild(t1);
side.appendChild(bF);
side.appendChild(bB);
colorGroup.appendChild(side);
const colorG = document.createElement('div');
colorG.className = 'color';
const t2 = document.createElement('p');
t2.textContent = 'Color:';
colorG.appendChild(t2);
Object.keys(shirt.colors).forEach(color => {
    const b = document.createElement('button');
    b.textContent = color;
    b.addEventListener('click', () => {
        localStorage.setItem('color', color);
        const side = localStorage.getItem('side');
        img.src = '../' + shirt.colors[color][side];
    });
    b.style.backgroundColor = color;
    colorG.appendChild(b);
});
colorGroup.appendChild(colorG);