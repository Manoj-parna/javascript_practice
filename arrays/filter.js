let students = [
    {
        name: "Teja",
        age: 27,
        grp: "CSE",
        roll_no: "134p1a0505"
    },
    {
        name: "Manoj",
        age: 28,
        grp: "MECH",
        roll_no: "124p1a0543"
    },
    {
        name: "Partha",
        age: 25,
        grp: "ECE",
        roll_no: "134p1a0508"
    }
];
let studentToSearchByName = "Manoj";
let filteredStudents = students.filter((student) => {
    if (student.name === studentToSearchByName) {
        return student;
    }
});
console.log(filteredStudents);

let flims = ["croods","frozen","e.t","mad max"];
let flimA = "croods";
let result = flims.filter((flim => {
    if(flim === flimA ){
        return flim;
    }
}));
console.log(result);

let studentage = 27;
let studentOfage26 = students.filter((studentA => {
    if(studentA.age === studentage){
        return studentA;
    }
}));
console.log(studentOfage26);
//

