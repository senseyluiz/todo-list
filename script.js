let lista = document.querySelector("#lista-tarefas")
let criaTarefa = document.querySelector("#criar-tarefa");
let inputTarefa = document.querySelector("#texto-tarefa");
let limpar = document.querySelector("#apaga-tudo");
let btnFinalizados = document.querySelector("#remover-finalizados");
let btnSalvar = document.querySelector("#salvar-tarefas");
let btnRemover = document.querySelector("#remover-selecionado");


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

//Criando a função do botão para apagar finalizados
btnFinalizados.addEventListener("click", function() {
    let tarefas = document.querySelectorAll("li");
    for (i = 0; i < tarefas.length; i++) {
        if (tarefas[i].className === "completed") {
            tarefas[i].remove();
        }
    }

})




//Criando função para salvar tarefas
btnSalvar.addEventListener("click", function() {
    let arrayObjeto = [];

    for (let i = 0; i < lista.children.length; i += 1) {
        let valor = lista.children[i].innerText;
        let classe = lista.children[i].className;
        arrayObjeto.push({ valor, classe });
    }

    let arrayString = JSON.stringify(arrayObjeto) // transforma o arrayObjeto em um string unica para salvar no localStorage
    localStorage.setItem("tarefas", arrayString);
})

// Criando função do botao remover selecionados
btnRemover.addEventListener("click", function() {
    for (let i = 0; i < lista.children.length; i++) {
        if (lista.children[i].style.backgroundColor === "rgb(128, 128, 128)") {
            lista.children[i].remove();
        }
    }
})

let storageTarefa = localStorage.getItem("tarefas")
console.log(storageTarefa);
let tarefas = JSON.parse(storageTarefa || "[]"); // utilizado como referencia o site https://stackoverflow.com/questions/43762363/how-to-store-an-array-of-objects-in-local-storage 
console.log(tarefas);

for (let i = 0; i < tarefas.length; i++) {
    const criaLi = document.createElement('li');
    console.log(tarefas[i]["valor"])
    criaLi.innerText = tarefas[i]["valor"];
    criaLi.className = tarefas[i]["classe"];
    lista.appendChild(criaLi);
};