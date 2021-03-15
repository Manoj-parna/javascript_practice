// let filteredStudentsAfterRollNoChanges = students.map((student) => {
//     student.roll_no = student.roll_no.replace("134p1a", rollNoToChange)
//     return student;
// });
// console.log(filteredStudentsAfterRollNoChanges);
// console.log("---------------------------");
// console.log("map");
// console.log("---------------------------");
// fruits.map((element) => {
//     console.log(element);
// });

// console.log(fruits.map((element) => {
//     if (element === "Orange") {
//         return element;
//     } else {
//         return "Not Satisfied";
//     }
// }));
let flims = ["croods","frozen","e.t","mad max"];
let result = flims.map((flim) =>{
    if(flim === "croods"){
        return flim;
    }
    else{
        return "not satisfied";
    }
})
console.log( flims.map((flim) =>{
    if(flim === "croods"){
        return flim;
    }
    else{
        return "not satisfied";
    }
}));

