let todos = [];

function todosList() {
    let students = {
        name:" manoj",
        age: "27",
        roll_number: "124p1a0543"
    };
    todos.push(document.getElementById("input").value);
    document.getElementById("input").value = "";
    renderTodos();
};

function renderTodos() {
    let items = document.getElementById('items');
    items.innerHTML = rednderItems();
}

function rednderItems() {
    let html = '';
    for (let i = 0; i < todos.length; i++) {
        html = html + `<p id="${i + 1}">${todos[i]}</p>`
        console.log(html);
    }
    return html;
}
