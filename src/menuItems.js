import menuItem from './menuItem.js'

let item1 = new menuItem('Pizza Natural', 'Mmm yummy x2!', 15.99, 'pizza.jpg')
let item2 = new menuItem('Empanadas', 'Mmm yummy x3!', 5.99, 'empanada.jpg')

const itemsStored = [];

function addItem(item) {
    itemsStored.push(item)
}

addItem(item1);
addItem(item2);

export { itemsStored, addItem };
