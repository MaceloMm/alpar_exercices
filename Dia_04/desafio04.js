/* Crie um programa simples que simula um gerenciador de lista de compras. O usuário
poderá adicionar itens à lista, remover itens e visualizar a lista de compras. O programa
deve usar vetores (arrays) e funções para organizar o código. 

1. O programa deve ter um array chamado listaDeCompras que começa vazio.
2. Deve oferecer as seguintes opções ao usuário:
o Adicionar um item à lista.
o Remover um item da lista.
o Exibir os itens da lista.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. As funções devem ser utilizadas para organizar as operações principais:
o adicionarItem(item): Adiciona um item ao array.
o removerItem(item): Remove um item do array (se existir).
o exibirLista(): Mostra todos os itens da lista no console.
*/

let ListaCompras = [];
const prompt = require('prompt-sync')();
let exit = false;

function show_menu(){
    console.clear()
    console.log("Bem vindo a lista de compras!\n\nEscolha uma das opções:");
    console.log("\n1 - Adicionar Item a lista\n2 - Retirar Item da lista\n3 - Exibir lista\n4 - Sair\n");
    let op = Number(prompt('Digite uma opção: '));
    return op;
}

function insert_item(){
    console.clear()
    console.log('\n');
    let item = String(prompt('Digite o Nome do Item: '));
    for(i=0; i < ListaCompras.length; i++){
        if (ListaCompras[i] === item){
            console.log('\nItem já cadastrado!\n');
            prompt('Enter para continuar!')
            return undefined;
        }
    }
    ListaCompras.push(item);
    console.log(`\nAdicionado o/a Item: ${item}\n`);
    prompt('Enter para continuar!')
}

function remove_item(){
    console.clear()
    console.log('\n');
    let item = String(prompt('Digite o Nome do Item: '));
    for(i=0; i < ListaCompras.length; i++){
        if(ListaCompras[i] === item){
            ListaCompras.splice(ListaCompras.indexOf(item), 1);
            console.log(`\nRemovido o/a Item: ${item}\n`);
            prompt('Enter para continuar!')
            return undefined;
        }
    }
    console.log(`\nNão conseguimos achar o item ${item}.\n`);
    prompt('Enter para continuar!')
}

function show_list(){
    console.clear()
    console.log('\n');
    for(i=0; i < ListaCompras.length; i++){
        console.log((i + 1) + ' - ' + ListaCompras[i]);
    }
    console.log('\n');
    prompt('Enter para continuar!')
}

while(!exit){
    let select = show_menu()

    switch(select){
        case 1:
            insert_item()
            break
        case 2:
            remove_item()
            break
        case 3:
            show_list()
            break
        case 4:
            console.log('\nEncerrando serviço...')
            setTimeout(() => {
                console.log('\nVolte sempre!')
            }, 3000)
            exit(1)
    }
}