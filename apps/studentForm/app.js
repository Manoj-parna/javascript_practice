let studentList = [];
// let studentDetails = {
//                         name: document.getElementById("studentInput").value, 
//                         age: document.getElementById("studentAge").value,
//                         roll_number: document.getElementById("rollNumber").value,
//                         status: document.getElementById("active").value
//                     }
function addStudent() {
    let studentDetails = {
        name: document.getElementById("studentInput").value,
        age: document.getElementById("studentAge").value,
        roll_number: document.getElementById("rollNumber").value,
        status: document.getElementById("checkbox").value
    }
    console.log(studentDetails);
};
function submitStudentList() {
    studentList.push(addStudent());
    console.log(studentList);
};




function studentName() {
    studentList.push({ name: document.getElementById("studentInput").value });
    document.getElementById("studentInput").value = "";
    // console.log(studentList);
};
function studentAge() {
    studentList.push({ age: document.getElementById("studentAge").value });
    document.getElementById("studentAge").value = "";
    // console.log(studentList);
};
function studentRollNumber() {
    studentList.push({ roll_number: document.getElementById("rollNumber").value });
    document.getElementById("rollNumber").value = "";
    // console.log(studentList);
};
function submitList() {
    studentList.push({ name: document.getElementById("studentInput").value });
    document.getElementById("studentInput").value = "";


    studentList.push({ age: document.getElementById("studentAge").value });
    document.getElementById("studentAge").value = "";


    studentList.push({ Roll_number: document.getElementById("rollNumber").value });
    document.getElementById("rollNumber").value = "";
    studentList.push({ group: document.getElementById("cse").value });
    studentList.push({ group: document.getElementById("ece").value });
    studentList.push({ group: document.getElementById("mech").value });
    studentList.push({ group: document.getElementById("civil").value });
    dropBox();
    checkBox();
    renderList();
    console.log(renderList());
    console.log(studentList);
};

function resetlist() {
        let select = document.getElementById("select");
        document.getElementById("studentInput").value = "";
        document.getElementById("studentAge").value = "";
        document.getElementById("rollNumber").value = "";
        document.getElementById("selectGroup").value = select;
        document.getElementById("checkbox").checked = false;
        console.log(studentList);
};
function dropBox() {
    let select = document.getElementById("select").value;
    let cse = document.getElementById("cse").value;
    let ece = document.getElementById("ece").value;
    let mech = document.getElementById("mech").value;
    let civil = document.getElementById("civil").value;
    let group = document.getElementById("selectGroup").value;
    if (group === select) {
        alert("enter vaild group")
    }
    if (group === cse) {
        studentList.push({ group: document.getElementById("cse").value });
    }
    if (group === ece) {
        studentList.push({ group: document.getElementById("ece").value });
    }
    if (group === mech) {
        studentList.push({ group: document.getElementById("mech").value });
    }
    if (group === civil) {
        studentList.push({ group: document.getElementById("civil").value });
    }

};

function checkBox() {
    if (document.getElementById("active").checked === true) {
        studentList.push({ status: "active" })
    }
    if (document.getElementById("active").checked === false) {
        studentList.push({ status: "inactive" })
    }
    // console.log(studentList);
};
function listDisplay() {
    let list = document.getElementById("list");
    list.innerHTML = renderList();
}
function renderList() {
    let html = "";
    for (let i = 0; i < studentList.length; i++) {
        html = html + `<p>${i + 1}:${studentList[i]}</p>`;
        console.log(html);
    }
    return html;
};
