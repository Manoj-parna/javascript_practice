function addStudent() {
    const student = {
        name: document.forms["student-form"].name.value,
        age: document.forms["student-form"].age.value,
        group: document.forms["student-form"].group.value,
        roll_no: document.forms["student-form"].roll_no.value,
        status: document.forms["student-form"].status.value,
    }
    console.log(student);
}

function restForm() {
    document.getElementById('student-form').reset();
}