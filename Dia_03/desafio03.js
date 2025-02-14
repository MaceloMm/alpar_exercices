let secretNumber = genderRandom();

const send = document.getElementById("response");

send.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkResponse();
    }
});

/* Função sem utilizar o HTML e CSS */

function adivinhacao(){

    /* Crie um programa que simula um jogo de adivinhação. O programa deve gerar um número
    aleatório entre 1 e 100 e permitir que o usuário tente adivinhar o número. O programa
    deve informar se o palpite é maior ou menor que o número secreto até que o usuário
    acerte.
    Regras:
    1. O número secreto deve ser gerado aleatoriamente entre 1 e 100.
    2. O usuário pode fazer quantas tentativas quiser até acertar.
    3. Após cada tentativa, o programa deve exibir se o número é maior ou menor que o
    palpite.
    4. Quando o usuário acertar, o programa deve exibir uma mensagem de parabéns e o
    número de tentativas usadas.
    Dica:
    Para gerar um número aleatório em Javascript, você pode usar o código:
    Math.round(Math.random() * 100);
    Math.random() é uma função que gera um número aleatório entre 0 e 1, e multiplicando
    por um número, você pode obter valores entre 0 e o número escolhido;
    Math.round() arredonda um número para inteiro, 5.4 é arredondado para 5, e 5.5 é
    arredondado para 6 */

    let secretNumber = parseInt(Math.random() * 100);
    let tentativas = 0;
    let end = true;
    while (end){
        let chute = Number(prompt("Digite um número entre 0 e 100: "));
        if (chute === secretNumber){
            alert(`Você ganhou! o numero era ${secretNumber} | Tentativas: ${tentativas}`);
            end = false;
        }else if (chute > secretNumber){
            alert("O numero e menor!");
        }else if (chute < secretNumber){
            alert("O numero e maior");
        }else{
            alert("Numero invalido!")
        }

        tentativas++
    }
}

/* Função que utilizamos no HTML e CSS */

function genderRandom(){
    return parseInt(Math.random() * 100);
}

function checkResponse(){
    const response = Number(document.getElementById("response").value);
    const result = document.getElementById("result");
    let tentativa = 0;

    // if ("Você ganhou! o numero era" in result.innerHTML){
    //     location.reload();
    // }
    
    if (response === secretNumber){
        result.innerHTML = `Você ganhou! o numero era ${secretNumber} | Tentavias: ${tentativa}`;
        secretNumber = genderRandom();
    }else if (response > secretNumber){
        result.innerHTML = "O número é menor";
    }else if (response < secretNumber){
        result.innerHTML = "O número é maior";
    }else if (response === 0){
        result.innerHTML = "";  
    }
}


