// Você foi convidado(a) a desenvolver um aplicativo web para ajudar a gerenciar as tarefas domésticas de uma família agitada. 
// O objetivo é criar um "Gerenciador de Tarefas Domésticas" que permita que todos os membros da família adicionem, removam e atualizem suas tarefas diárias, garantindo que tudo seja feito de forma organizada.

let tarefasDomesticas = [];

do {
    var tarefa = parseInt(prompt("escolha um número de acordo com a ação desejada: \n 1 - Adicionar tarefa \n 2 - Remover tarefa \n 3 - Atualizar tarefa \n 0 - Fechar programa"));
    if (tarefa === 1) {
        var addTarefa = prompt("Digite a tarefa que deseja adicionar: ");
        tarefasDomesticas.push(addTarefa);
    }
    else if (tarefa === 2) {
        var removeTarefa = parseInt(prompt("Qual tarefa você deseja remover? \n (Levando em consideração as posições das tarefas que se inicia do número 0 e segue adiante.)"));
        tarefasDomesticas.splice(removeTarefa, 1);
    }
    else if (tarefa === 3) {
        var atualizarTarefa = parseInt(prompt("Qual tarefa você deseja atualizar? \n (Levando em consideração as posições das tarefas que se inicia do número 0 e segue adiante.)"));
        var escreverTarefaAtualizada = prompt("Digite a tarefa atualizada: ");

        tarefasDomesticas[atualizarTarefa] = escreverTarefaAtualizada;
    }

    console.log(tarefasDomesticas);
}
while(tarefa !== 0);

console.log(`Essas são suas tarefas: \n ${tarefasDomesticas}`);
