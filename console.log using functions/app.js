//Make a function that works like console.log
function log() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
}
log("hi", "bye", "lie");
log("cake", "ice cream", "chocolate");
