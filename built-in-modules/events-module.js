const EventEmitter = require('events');

const emitter = new EventEmitter();
let eventName = 'order-pizza';

function eventHandler(size, topping) {
    console.log("Your " + size + " pizza order with " + topping + " has been received!");
}

emitter.on(eventName, eventHandler);
emitter.on(eventName, (size) => {
    if (size === "large") {
        console.log("Big pizza order detected");
    }
})


emitter.emit(eventName, "large", "mushroom");
