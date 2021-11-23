let lista = document.querySelector("#lista-tarefas")
let criaTarefa = document.querySelector("#criar-tarefa");
let inputTarefa = document.querySelector("#texto-tarefa");
let limpar = document.querySelector("#apaga-tudo");


//Criando as tarefas para ser adicionadas na lista de tarefas
criaTarefa.addEventListener("click", function() {
    let tarefa = document.createElement("li");
    tarefa.innerText = inputTarefa.value;
    inputTarefa.value = "";
    lista.appendChild(tarefa);

})


//Adiciona cor de fundo no elemento clicado
lista.addEventListener("click", function(e) {
    e.target.style.backgroundColor = "rgb(128, 128, 128)"

    //Verifica se existe outro atributo selecionado;
    for (i = 0; i < lista.children.length; i++) {
        if (lista.children[i].innerText !== e.target.innerText) {
            lista.children[i].removeAttribute("style");
        }
    }
})


//Adicionando efeito taxado na tarefa clicada 2 vezes
lista.addEventListener("dblclick", function(e) {

    if (e.target.className === "completed") {
        e.target.className = "";
    } else {
        e.target.classList.add("completed")
    }
    console.log(e.target.className)

})

//Criando função do botão para apagar tarefas
limpar.addEventListener("click", function() {
    let tarefas = document.querySelectorAll('li');
    for (i = 0; i < tarefas.length; i++) {
        tarefas[i].remove();
    }
})