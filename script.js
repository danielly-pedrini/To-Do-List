const button = document.querySelector('.adicionar')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')


let listaDeTarefas = []



function adicionarTarefas() {
    if (input.value.trim() !== '') {
        listaDeTarefas.push({
            tarefa: input.value,
            concluida: false
        })

        input.value = ''
        mostrarTarefas()
    }
}

function mostrarTarefas() {

    let novaLi = ''

    listaDeTarefas.forEach((item, index) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida ? 'done' : ''}">
            <img src="./assets/concluido.png" alt="tarefa-concluida" onclick="tarefaConcluida(${index})">
            <p>${item.tarefa}</p>
            <img src="./assets/excluir.png" alt="excluir-tarefa" onclick="deletarTarefa(${index})">
        </li>
    `

    })

    listaCompleta.innerHTML = novaLi


    localStorage.setItem('lista',JSON.stringify(listaDeTarefas))

}


function tarefaConcluida(index) {
   listaDeTarefas[index].concluida = !listaDeTarefas[index].concluida


    mostrarTarefas()
}



function deletarTarefa(index) {
    listaDeTarefas.splice(index, 1)


    mostrarTarefas()

}

function RecarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        listaDeTarefas = JSON.parse(tarefasDoLocalStorage)
        mostrarTarefas()
    }
}

RecarregarTarefas()
button.addEventListener('click', adicionarTarefas) 