// let fruits = ['Mango', 'Apple', 'Orange', 'Banana'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log("---------------------------");
// console.log("For Each");
// console.log("---------------------------");

// let students = [ 
//     {
//         name: "Teja",
//         age: 27,
//         grp: "CSE",
//         roll_no: "134p1a0505"
//     },
//     {
//         name: "Manoj",
//         age: 28,
//         grp: "MECH",
//         roll_no: "124p1a0543"
//     },
//     {
//         name: "Partha",
//         age: 25,
//         grp: "ECE",
//         roll_no: "134p1a0508"
//     }
// ];

// let rollNoToChange = "13p4a1";
// students.forEach((student) => {
//     student.roll_no = student.roll_no.replace("134p1a", rollNoToChange);
// })
// console.log(students)
// for(i = 0; i < students.length; i++){
//     let age = 0
//     if(students[i] === 27){
//         age++;
//     }
//     return age;
// } 
let flims = ["croods","frozen","e.t","mad max"];
console.log(flims);
console.log("---------------");
flims.forEach(element => {
    console.log(element);  
});
let a = "croods";
let b = a.split("").reverse().join()
console.log(b);
