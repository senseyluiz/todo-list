let lista = document.querySelector("#lista-tarefas")
let criaTarefa = document.querySelector("#criar-tarefa");
let inputTarefa = document.querySelector("#texto-tarefa");


//Criando as tarefas para ser adicionadas na lista de tarefas
criaTarefa.addEventListener("click", function() {
    let tarefa = document.createElement("li");
    tarefa.innerText = inputTarefa.value;
    inputTarefa.value = "";
    lista.appendChild(tarefa);
    console.log(lista);
})

lista.addEventListener("click", function(e) {
    e.target.style.backgroundColor = "rgb(128, 128, 128)"
})