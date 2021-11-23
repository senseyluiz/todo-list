let lista = document.querySelector("#lista-tarefas")

let criaTarefa = document.querySelector("#criar-tarefa");
let inputTarefa = document.querySelector("#texto-tarefa");

criaTarefa.addEventListener("click", function() {
    let tarefa = document.createElement("li");
    tarefa.innerText = inputTarefa.value;
    inputTarefa.value = "";
    lista.appendChild(tarefa);
    console.log(lista);
})