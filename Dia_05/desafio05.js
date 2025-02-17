/* Crie um programa simples que permite ao usuário gerenciar um cadastro de pessoas.
Cada pessoa terá um nome, idade e e-mail armazenados como um objeto dentro de um
array. O usuário poderá adicionar, remover e listar os cadastros.
Regras:
1. O programa deve armazenar os usuários em um array de objetos, onde cada
objeto representa uma pessoa com as propriedades:
o nome
o idade
o email
2. O usuário poderá escolher entre as seguintes opções:
o Adicionar um novo usuário.
o Remover um usuário pelo email.
o Listar todos os usuários cadastrados.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. Não pode haver mais de um usuário com o mesmo e-mail. */

let bancoPessoas = [];
const prompt = require('prompt-sync')();


class Pessoa{

    constructor(nome, idade, email){
        this.name = nome;
        this.age = idade;
        this.email = email;
    }

    insertPerson(){
        console.clear()
        for(const person of bancoPessoas){
            if (person.email == this.email){
                console.clear();
                console.log(`${this.name} já cadastrada com o email ${person.email}!`);
                console.log('\n')
                prompt('Enter para continuar!')
                return
            }
        }

        if (this.age < 0){
            console.log(`A idade precisa ser maior que 0`)
            console.log('\n')
            prompt('Enter para continuar!')
            return
        }
        bancoPessoas.push(this);
        console.log(`${this.name} cadastrada com sucesso!`);
        console.log('\n');
        prompt('Enter para continuar!');
    }

    static deletePerson(email){
        for (const person of bancoPessoas){
            if (person.email === email){
                console.clear();
                let op = Number(prompt(`Tem certeza que seja deletar ${person.name} [1 - sim, 2 - não]: `));
                if (op === 1){
                    console.log(`${person.name} deletado com sucesso!`)
                    bancoPessoas.splice(bancoPessoas.indexOf(person), 1);
                }
            }
        }
        console.log('\n')
        prompt('Enter para continuar!')
    }

    static showPerson(){
        console.clear()
        console.log('Pessoas cadastradas no momento:\n')
        for (const person of bancoPessoas){
            console.log(`Nome: ${person.name} | Email: ${person.email} | Idade: ${person.age}`)
        }
        console.log('\n')
        prompt('Enter para continuar!')
    }
}

function main(){
    let sair = false
    while (!sair){
        console.clear()
        console.log('Bem vindo!\n\n1 - Adicionar Usuario\n2 - Remover Usuario\n3 - Listar Pessoas cadastradas\n4 - Sair\n\n');
        let option = Number(prompt('Escolha uma opção: '));
        switch (option) {
            case 1:
                console.clear();
                let newName = String(prompt('Digite o Nome: '));
                let newIdade = parseInt(prompt('Digite o Idade: '));
                if (isNaN(Number(newIdade))){
                    console.clear()
                    console.log('\nIdade precisa ser um numero!\n')
                    prompt('Enter para continuar!')
                    break;
                }
                let newEmail = String(prompt('Digite o seu Email: '));

                if (!newEmail.includes('@') || !newEmail.includes('.com')){
                    console.log('\nEmail invalido!');
                    console.log('\n')
                    prompt('Enter para continuar!')
                    break;
                }

                let newPerson = new Pessoa(newName, newIdade, newEmail);
                newPerson.insertPerson();
                break
            case 2:
                console.clear()
                let seachEmail = String(prompt('Digite o email da pessoa que deseja deletar: '));
                
                if (!seachEmail.includes('@') || !seachEmail.includes('.com')){
                    console.log('\nEmail invalido!');
                    console.log('\n')
                    prompt('Enter para continuar!')
                    break;
                }

                Pessoa.deletePerson(seachEmail);
                break
            case 3:
                Pessoa.showPerson();
                break
            case 4:
                console.clear()
                console.log('Volte sempre!')
                sair = true;
                break
        }
    }
}


main()