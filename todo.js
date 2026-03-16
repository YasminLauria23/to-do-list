// pegando os elementos do HTML
const input = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const lista = document.getElementById('lista-tarefas');

// essa função cria uma tarefa nova
function adicionarTarefa() {
    const texto = input.value.trim(); // pega o texto e tira espaços em branco

    if (texto === '') return; // se estiver vazio, não faz nada

    // cria o item da lista
    const li = document.createElement('li');
    li.classList.add('tarefa');

    // cria o texto da tarefa
    const span = document.createElement('span');
    span.textContent = texto;

    // cria o botão de deletar
    const btnDeletar = document.createElement('button');
    btnDeletar.classList.add('btn-deletar');
    btnDeletar.textContent = '✕';

    // clicou na tarefa → marca como concluída
    li.addEventListener('click', (e) => {
        if (e.target !== btnDeletar) { // só marca se não clicou no deletar
            li.classList.toggle('concluida');
        }
    });

    // clicou no deletar → remove a tarefa
    btnDeletar.addEventListener('click', () => {
        li.remove();
    });

    // monta a tarefa: texto + botão deletar
    li.appendChild(span);
    li.appendChild(btnDeletar);
    lista.appendChild(li);

    // limpa o input
    input.value = '';
    input.focus(); // volta o cursor pro input
}

// escuta o clique no botão +
btnAdicionar.addEventListener('click', adicionarTarefa);

// escuta o Enter no input
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarTarefa();
});
