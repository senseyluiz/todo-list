const lista = document.querySelector('#lista-tarefas');
const criaTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const limpar = document.querySelector('#apaga-tudo');
const btnFinalizados = document.querySelector('#remover-finalizados');
const btnSalvar = document.querySelector('#salvar-tarefas');
const btnRemover = document.querySelector('#remover-selecionado');
const btnMoverCima = document.querySelector('#mover-cima');
const btnMoverBaixo = document.querySelector('#mover-baixo');

// Criando as tarefas para ser adicionadas na lista de tarefas
criaTarefa.addEventListener('click', () => {
  const tarefa = document.createElement('li');
  tarefa.innerText = inputTarefa.value;
  inputTarefa.value = '';
  lista.appendChild(tarefa);
});

// Adiciona cor de fundo no elemento clicado
lista.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';

  // Verifica se existe outro atributo selecionado;
  for (i = 0; i < lista.children.length; i++) {
    if (lista.children[i].innerText !== e.target.innerText) {
      lista.children[i].removeAttribute('style');
    }
  }
});

// Adicionando efeito taxado na tarefa clicada 2 vezes
lista.addEventListener('dblclick', (e) => {
  if (e.target.className === 'completed') {
    e.target.className = '';
  } else {
    e.target.classList.add('completed');
  }
  console.log(e.target.className);
});

// Criando função do botão para apagar tarefas
limpar.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (i = 0; i < tarefas.length; i++) {
    tarefas[i].remove();
  }
});

// Criando a função do botão para apagar finalizados
btnFinalizados.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('li');
  for (i = 0; i < tarefas.length; i++) {
    if (tarefas[i].className === 'completed') {
      tarefas[i].remove();
    }
  }
});

// Criando função para salvar tarefas
btnSalvar.addEventListener('click', () => {
  const arrayObjeto = [];

  for (let i = 0; i < lista.children.length; i += 1) {
    const valor = lista.children[i].innerText;
    const classe = lista.children[i].className;
    arrayObjeto.push({ valor, classe });
  }

  const arrayString = JSON.stringify(arrayObjeto); // transforma o arrayObjeto em um string unica para salvar no localStorage
  localStorage.setItem('tarefas', arrayString);
});

// Restaurando estado atual após refresh do navegador
const storageTarefa = localStorage.getItem('tarefas');

const tarefas = JSON.parse(storageTarefa || '[]'); // utilizado como referencia o site https://stackoverflow.com/questions/43762363/how-to-store-an-array-of-objects-in-local-storage

for (let i = 0; i < tarefas.length; i++) {
  const criaLi = document.createElement('li');

  criaLi.innerText = tarefas[i].valor;
  criaLi.className = tarefas[i].classe;
  lista.appendChild(criaLi);
}

// Criando função para mover elemento selecionado para cima
// Feito com ajuda de Douglas Marcal e Eric da mentoria

btnMoverCima.addEventListener('click', (elemento) => {
  const lista2 = document.querySelector('#lista-tarefas');
  console.log(lista2);
  for (let i = lista2.children.length - 1; i > 0; i -= 1) {
    if (lista2.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      const atual = lista2.children[i];
      const proximo = lista2.children[i].previousElementSibling;
      if (atual) {
        lista2.insertBefore(atual, proximo);
      }
      break;
    }
  }
});

// Criando função para mover elemento selecionado para baixo

// Feito com ajuda de Douglas Marcal e Eric da mentoria
btnMoverBaixo.addEventListener('click', (elemento) => {
  for (let i = lista.children.length - 1; i >= 0; i -= 1) {
    if (lista.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      const atual = lista.children[i];
      const proximo = lista.children[i].nextElementSibling;
      if (proximo) {
        lista.insertBefore(proximo, atual);
      }
      break;
    }
  }
});

// Criando função do botao remover selecionados
btnRemover.addEventListener('click', () => {
  for (let i = 0; i < lista.children.length; i++) {
    if (lista.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      lista.children[i].remove();
    }
  }
});
