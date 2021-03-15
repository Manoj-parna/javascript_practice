let todos = [];
function todosList(){
    let input = document.getElementById("input").value;
    todos.push(input);
    input.value = "";
    renderTodos();
};
function renderTodos(){
    let item = document.getElementById("items");
    item.innerHTML = rednderItems();
};
function rednderItems(){
    let html = "";
    for(let i = 0; i < todos.length;i++){
    html = html + `<p id = "${i + 1}">${todos[i]}</p>`
}
return html;
};
