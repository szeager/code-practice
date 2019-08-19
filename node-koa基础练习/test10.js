var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
//将事件处理程序分配给事件： 在触发scream事件的同时执行myEventHandler
eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// 触发scream事件
eventEmitter.emit('scream');