const EventEmitter = require('node:events');
const DrinkMachine = require('./drink-machine');

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(size, topping) {
        this.orderNumber++;
        this.emit('order', size, topping);
    }

    displayOrderNumber() {
        console.log('Current order number:', this.orderNumber);
    }
}

const drinkMachine = new DrinkMachine();
const pizzaShop = new PizzaShop();

pizzaShop.on('order', (size, topping) => {
    console.log('Order received, will bake a ' + size + ' pizza with ' + topping);
    drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'mushrooms');
pizzaShop.displayOrderNumber();