let studentList = [];


if("studentDetails" in localStorage){
  studentList = JSON.parse(localStorage.getItem("studentDetails"));
}

function submitStudentList() {
  let studentDetails = {
    name: document.getElementById("studentInput").value,
    age: document.getElementById("studentAge").value,
    roll_number: document.getElementById("roll_number").value,
    status: document.getElementById("status").checked===true?"on":"off",
    group: document.getElementById("selectGroup").value
  };
  studentList.push(studentDetails);
  const myObj = JSON.stringify(studentList);
  localStorage.setItem("studentDetails", myObj);
 
};

function resetlist() {
  let select = document.getElementById("select");
  document.getElementById("studentInput").value = "";
  document.getElementById("studentAge").value = "";
  document.getElementById("roll_number").value = "";
  document.getElementById("selectGroup").value = select;
  document.getElementById("status").checked = false;
};

function listDisplay() {
  let list = document.getElementById("table-body");
  list.innerHTML = renderList();
};

function renderList() {
  let obj = JSON.parse(localStorage.getItem("studentDetails"));
  let html = "";
  obj.forEach((student, index) => {
    html = html + `<tr>
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.group}</td>
      <td>${student.roll_number}</td>
    </tr>`;
  });
  return html;
};


