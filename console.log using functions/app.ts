//Make a function that works like console.log

function log(...message: any[]): void {
   for (let i = 0; i < message.length; i++){
    console.log(message[i]);
   }
}

log("hi", "bye", "lie")