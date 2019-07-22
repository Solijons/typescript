import Item from './Item';
import Transactions from './Transactions';

const largePizza = new Item(1, 'Large pizaa', 22.99);
const mediumPizza = new Item(2, 'Medium pizza', 15.99)
const smallPizza = new Item(3, 'Small pizza', 12.99);


const tx = new Transactions();
tx.addItem(largePizza);
tx.addItem(mediumPizza);
tx.addItem(smallPizza);

const add = (a: number, b: number) => {
    return a + b;
}
add(5,6);

console.log(tx.toString());

const tx2 = new Transactions();
tx2.addItem(largePizza);
console.log(tx2.toString());

    // HW
    // Perform task in pure js
// Inheretance
    // pizza item
    // bevarage item
// pizza => item + toppings
// beverage => item + different types