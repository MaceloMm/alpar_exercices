let secretNumber = genderRandom();

const send = document.getElementById("response");

send.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkResponse();
    }
});

function adivinhacao(){

    let secretNumber = Number(Math.random() * 100);
    
    do{
        let chute = Number(prompt("Digite um número entre 0 e 100: "));
        if (chute === secretNumber){
            alert(`Você ganhou! o numero era ${secretNumber}`)
        }
    }while(secretNumber != chute)
}

function genderRandom(){
    return parseInt(Math.random() * 100);
}

function checkResponse(){
    const response = Number(document.getElementById("response").value);
    const result = document.getElementById("result");

    // if ("Você ganhou! o numero era" in result.innerHTML){
    //     location.reload();
    // }
    
    if (response === secretNumber){
        result.innerHTML = `Você ganhou! o numero era ${secretNumber}`;
        secretNumber = genderRandom();
    }else if (response > secretNumber){
        result.innerHTML = "O número é menor";
    }else if (response < secretNumber){
        result.innerHTML = "O número é maior";
    }else if (response === 0){
        result.innerHTML = "";  
    }
}


