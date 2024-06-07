// //1. Enums
// //Are used to store a group of constants
// //There are 2 type of enums: 1. numeric 2. string
// //Enums are separated by coma
// //Enum is transpiled into object when consoled
//  enum Color {
//     Red = 2, //If default value is set then it will print that value. This is numeric enum
//     Blue,
//     Green = "Green" //string enum
// }
// console.log(Color.Blue); //To get value of the key
// console.log(Color[1]); //To get key of the value
// let currentColor: Color = Color.Red
// console.log(Color["Red"]); 
//  enum Role {
//     Teacher,
//     Student
// }
// let roles = "Teacher"
// if (role === "Teacher") {
//     console.log("Hello Teacher");
// } else if (role === "Student"){
//     console.log("Hello Student");
// }
// // h.w: const enum
// //2. Any
// let myName: any = "Warsa"
// myName = 9
// myName = true
// myName = undefined
// myName = {"chocolate"}
// //We can assign any to variables whose data type is already defined
// let a: any
// let b: string = a
// let c: number = a
// //3. Unknown 
// //intentionally type nhi pata to unknown use krskte hain
// let favFood: unknown = "red"
// favFood = 5
// favFood = false
// //We can't assign unknown to variables whose data type is already defined
// let c: unknown
// let d: string = c
// let e: number = c
//4. Never: data type jo exist hi nhi krti ho
//5. Typecasting
//converting unknown data type into another
// let f: unknown
// f = "abc"
// console.log((f as string).toUpperCase()) 
//6. Tuples
// let arr: [string, number, boolean] = ["warsa", 18, true]
// arr.push("xyz")
//Optional parameter
//1. Rest parameter
function sayHello() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log("Hello " + names);
}
sayHello("Okasha", "Aneeq", "Atia");
