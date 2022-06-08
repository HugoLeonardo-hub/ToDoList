/*<label class="todo__item">
    <input type="checkbox">
    <div>teste de item 1</div>
    <input type="button" value="X">
</label>*/

let banco = [
    {'tarefa': 'Estudar JS,', 'status': ''},
    {'tarefa': 'netflix', 'status': 'checked'},
    {'tarefa': 'teste', 'status': ''}
    
];

const criarItem = (tarefa, stats) => {
    const item = document.createElement('label');
    item.classList.add ('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${stats}>
        <div>${tarefa}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach (item => criarItem (item.tarefa, item.status));
}
atualizarTela();
