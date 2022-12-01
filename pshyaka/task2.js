const item = [{
  name: 'Bike',
  price: 100
}, {
  name: 'TV',
  price: 200
}, {
  name: 'Album',
  price: 10
}, {
  name: 'Book',
  price: 5
}, {
  name: 'Phone',
  price: 500
}, {
  name: 'Computer',
  price: 1000
}, ]

let sortedItems;

/**
 * 1 . Filter and show the product that will be bought 
 * when you don't have much money I mean Cheap one
 */
sortedItems = item.sort((a, b) => a.price - b.price);
const cheapest = sortedItems[0];
console.log({cheapest});

/**
 * 2 . Filter and show the product that will be expensive in the array
 */
sortedItems = item.sort((a, b) => a.price - b.price);
const mostExpensive = sortedItems[sortedItems.length - 1];
console.log({mostExpensive});

/**
 * 3 . Calculate the full price of all product combined
 */
const grandTotal = item.reduce((a, b) => b.price + a, 0);
console.log({grandTotal});

/**
 * 4 . Calculate the full price of all product combined and
 * remove product that are under the 10 dollar
 */
const filteredItems = item.filter((i) => i.price >= 10);
const subTotal = filteredItems.reduce((a, b) => b.price + a, 0);
console.log({subTotal});
