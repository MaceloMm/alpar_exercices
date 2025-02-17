/* 
Boa tarde senhores e senhora!
 
Desafio de hoje está tranquilinho, está lúdico, está sextante! 
 
Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
A quantidade de membros da equipe fica de acordo com o gosto de vocês, desde que seja um mínimo de 3 pessoas. 
 
Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem completadas e, para considerar a nota final, deverão ser levados em conta os seguintes critérios:
 
1) Cada tarefa recebe uma pontuação de 0 a 10
2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.
 
A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o melhor desempenho, e quem teve o pior desempenho */


const prompt = require('prompt-sync')();
let membros = [
    ['Macelo', [10, 9, 5, 6, 9, 7, 5]], 
    ['Vinicius', [9, 3, 6, 8, 2, 7, 6]], 
    ['Luan' ,[10, 9, 4, 3, 7, 8, 6]],
    ['Gustavo', [4, 5, 6, 2, 3, 4, 5]],
    ['Kevin', [1, 2, 5, 6, 9, 4, 5]]
];

let final = []

function add_member(){
    console.clear()
    let new_member = prompt('Digite o nome do membro: ');
    for(const member of membros){
        if (member[0] === new_member){
            console.log('\nMembro já consta na lista!')
            return undefined
        }else{
            membros.push([new_member, []])
            console.log(`\nMembro ${new_member} adicionado!`)
        }
    }
}

function add_task(){
    console.clear()
    show_members(true)
    let name_member = String(prompt('Digite o Nome do integrante: '))
    for(const member of membros){
        if (member[0] === name_member){
            let cont = 0
            do{
                let new_task_note = Number(prompt('Digite a Nota da tarefa: '))
                member[1].push(new_task_note)
                console.clear()
                console.log('Nota adicionada com sucesso para o ' + member[0])
                cont = Number(prompt('Deseja continuar adicionando notas [0 - Sim, 1 - Não]: '))
            }while(cont === 0 && member[1].length != 10)
                return undefined
        }else{
            console.clear()
            console.log(`Não encontramos o membro ${name_member}.`)
            prompt('Enter para continuar')
        }
    }    
}

function show_members(show = false){
    console.clear()
    console.log('Membros cadastrados: \n')
    for (const member of membros){
        console.log(`Nome: ${member[0]} | Notas: ${member[1]}`)
    }
    console.log('\n')
    if (!show){
        prompt('Enter para continuar!')
    }
}

for (const member of membros) {
    let nota = parseInt(member[1].reduce(
        (ac, atual) => {
            atual = atual % 2 === 0 ? atual : atual * 2;
            return ac + atual;
        },
    0)) / member[1].length;
    
    nota = parseInt(nota > 8 ? nota += 2 : nota);

    final.push([member[0], nota]);
}

final = final.sort((a, b) =>  b[1] - a[1]);

for (const member of final){
    if (final.indexOf(member) === 0){
        console.log(`${member[0]} Tirou a maior nota de ${member[1]}`);
    }else if (final.indexOf(member) === final.length - 1){
        console.log(`${member[0]} Tirou a pior nota de ${member[1]}`);
    }else{
        console.log(`${member[0]} Tirou ${member[1]}`);
    }
}
