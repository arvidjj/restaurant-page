import menuItem from './menuItem.js'

let item1 = new menuItem('Pizza Natural', 'Mmm yummy x2!', 15.99, 'pizza.jpg')
let item2 = new menuItem('Empanadas', 'Mmm yummy x3!', 5.99, 'empanada.jpg')
let item3 = new menuItem('Burger', 'Mmm yummy x4!', 10.99, 'burger.jpg')
let item4 = new menuItem('Meat Sandwich', 'Sandwich with lomito meat', 14.99, 'sandwich.jpg')
let item5 = new menuItem('All Meat Burrito', 'Includes every meat in existence', 99.99, 'burrito.jpg')
let item6 = new menuItem('Simple Salad', 'Healthy and tasty <br>Includes:', 4.99, 'salad.jpg')

const itemsStored = [];

function addItem(item) {
    itemsStored.push(item)
}

addItem(item1);
addItem(item2);
addItem(item3);
addItem(item4);
addItem(item5);
addItem(item6);

export { itemsStored, addItem };
