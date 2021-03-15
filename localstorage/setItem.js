//
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
let myObj = JSON.stringify(obj)
localStorage.setItem("details", myObj);
//
//geitem
console.log(myObj);
console.log(JSON.parse(localStorage.getItem("details")));
//
//removeitem
console.log(localStorage.removeItem("session"));
console.log(localStorage.key(1));
console.log(localStorage.clear());
//
let arrays = ["name", "age"];
// let sarray = arrays.toString()
let lstore = arrays.push(JSON.stringify(localStorage.setItem("local", arrays)));
//var a = []; a. push(JSON. parse(localStorage.
console.log(lstore);