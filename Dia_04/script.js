let dbItems = ['macelo', 'ajuda', 'açucar', 'lapis', 'caneta', 'ajuda', 'macelo', 'macelo', 'ajuda', 'açucar', 'lapis', 'caneta', 'ajuda', 'macelo'];
const buttonInsertItem = document.getElementById("button-insertItem");
const buttonRemoveItem = document.getElementById("button-removeItem");
const screeShowItens = document.getElementById("show-item");

document.getElementById("button-insert").addEventListener('click', () => {
    document.getElementById('container').classList.add('hidden');
    document.getElementById('container1').classList.remove('hidden');    
});

document.getElementById("insert-voltar").addEventListener('click', () => {
    document.getElementById('container1').classList.add('hidden'); 
    document.getElementById('container').classList.remove('hidden');   
})

document.getElementById("button-remove").addEventListener('click', () => {
    document.getElementById('container').classList.add('hidden');
    document.getElementById('container2').classList.remove('hidden'); 
})

document.getElementById('remove-voltar').addEventListener('click', () => {
    document.getElementById('container').classList.remove('hidden');
    document.getElementById('container2').classList.add('hidden');
})

document.getElementById('show-itens').addEventListener('click', () => {
    document.getElementById('container').classList.add('hidden');
    document.getElementById('container3').classList.remove('hidden'); 

    let stringFormat = '';
    for (const item of dbItems){
        stringFormat += `<br>${item}`;
    }
    console.log(stringFormat)
    screeShowItens.innerHTML = stringFormat;
})

document.getElementById('back-show-itens').addEventListener('click', () => {
    document.getElementById('container').classList.remove('hidden');
    document.getElementById('container3').classList.add('hidden'); 
})

buttonInsertItem.addEventListener('click', () => {
    const item = document.getElementById("item-input");
    const message = document.getElementById("message");

    dbItems.push(item.value)
    
    message.innerHTML = `Foi adicionado o/a item ${item.value}!`
    setTimeout(() => {
        message.innerHTML = ''
        item.value = ''
        document.getElementById('container1').classList.add('hidden'); 
        document.getElementById('container').classList.remove('hidden'); 
    }, 3000)
})

buttonRemoveItem.addEventListener('click', () => {
    console.log('estou aqui')
    const itemRemove = document.getElementById("item-input-remove");
    const messageRemove = document.getElementById("message-remove");

    for (const i of dbItems){
        if (i === itemRemove.value){
            dbItems.splice(dbItems.indexOf(itemRemove.value), 1);

            messageRemove.innerHTML = `O item ${itemRemove.value} foi removido!`;
            setTimeout(() => {
                messageRemove.innerHTML = '';
                itemRemove.value = '';
                document.getElementById('container2').classList.add('hidden'); 
                document.getElementById('container').classList.remove('hidden'); 
            }, 3000)
            return
        }
    }

    messageRemove.innerHTML = `O item ${itemRemove.value} não foi encontrado!`;
            setTimeout(() => {
                messageRemove.innerHTML = '';
                itemRemove.value = ''; 
            }, 3000)
})
