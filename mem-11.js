const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${id}:${name}`);
});

customEmitter.emit("response", "parth", 12);
