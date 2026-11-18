
const EventEmitter = require('events');

const schoolBell = new EventEmitter();


schoolBell.on('classStart', () => {
    console.log("Class Started! Students, please settle down.");
});

schoolBell.on('classEnd', () => {
    console.log("Class Ended! Time to go home.");
});

schoolBell.emit('classStart');
schoolBell.emit('classEnd');

console.log("School bell system running...");

setTimeout(() => {
    console.log("Ring Bell - setTimeout");
}, 0);

setImmediate(() => {
    console.log("Ring Bell - setImmediate");
});

process.nextTick(() => {
    console.log("Ring Bell - process.nextTick");
});

console.log("End of program");
