// function add(a, b) {
//      return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function multi(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }
// let sumO = document.getElementById("digit1").value;
// let sumT = document.getElementById("digit2").value;
// let result = document.getElementsByClassName("add");
// console.log(result);
// alert(result);
// // function calculate(a, b, operator) {
// //     switch (operator) {
// //         case "+": return add(a, b);
// //         case "-": return sub(a, b);
// //         case "*": return multi(a, b);
// //         case "/": return div(a, b);
// //         default:
// //             break;
// //     }
// // }

// let x = 5, y = 10 , z;
// // console.log(multi(x, y));
// // console.log("calculate"(x, y, "*"))
// function myFunction() {
//     var x = document.getElementById("myText").value;
//     document.getElementById("demo").innerHTML = x;
//     x;
//   }
// function getFunction(){
//     var a = document.getElementById('manoj').value;
// }
// function add(){
//     var a = document.getElementById("digit1").value;
//     document.getElementById("result").innerHTML=a;
// }
// let a=1,b=4,c;
// function ad(){
//     c = a+b;
//     alert(c);
// }

/* <p id="demo"></p> */


//function myFunction() {//
// let xN = 1;
// let yX = 4;
// var resX = "sum of x,y" + (xN + yX);
// document.getElementById("demo").innerHTML = resX;
//}
// console.log("sum of x,y", resX);

// //split
// let cm = "pawan kalyan";
// let ap = cm.split("");
// console.log("split", ap);

// let aA = "5";
// let bB = 10;
// let CS = bB + "5";
// console.log("adding char and number", CS);

// // reverse string
// function reverseString(state) {
//     return state.split("").reverse().join("")
// }
// console.log("reverse string", reverseString("andhra pradesh"));

// let para = "babviugbvlkjab paiuebfkkbib";
function characterCount(word, character) {

    let count = 0;
    for (i = 0; i < word.length; i++) {

        if (word[i] == character) { //if the character in the word is equal to  the character passed in as a parameter increment count
            count++;
        }
    }
    return "The letter " + character + " appears " + count + " times in the word " + word;
}
function characterCount(word,character) {
    let count = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == character) {
            count++;
        }
    }
    return count;
}
console.log(characterCount("Manoj Parna","b"))


let obj={};

let str="Manoj Parna";
str=str.split(" ").join("");
console.log(str.length)
for(let i=0;i<str.length;i++){
    obj.hasOwnProperty(str.charAt(i))?obj[str.charAt(i)]++:obj[str.charAt(i)]=1
}
console.log(obj);

function add(a,b){
    return a+b;
}
console.log(add(1,4));