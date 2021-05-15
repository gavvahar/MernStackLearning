const events = require("events");
const em = new events.EventEmitter();

em.addListener('FirstEvent', function (data) {
  console.log('First subscriber: ' + data);
});

em.on('SecondEvent', function (data) {
  console.log('First subscriber: ' + data);
});

em.on('car', function (data)
{
  console.log('First subscriber: ' + data);
});

em.emit("FirstEvent", "This is my first event emitter.");

em.emit('SecondEvent', 'This is my second event emitter.');

em.emit('car', "Subaru WRX STI");