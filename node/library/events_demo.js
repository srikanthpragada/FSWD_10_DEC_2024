
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const countHandler = (count) => console.log(count)

// Register event handlers for event 
eventEmitter.on('count', countHandler)    // first event handler
eventEmitter.on('count', (count) => console.log(`Count = ${count}`))  // second event handlers

// Raise event 
eventEmitter.emit('count', 1)

eventEmitter.removeListener('count', countHandler)

eventEmitter.emit('count', 10)
