// Vamos jogar dados?
 
// O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, de acordo com as regras abaixo:
 
// 1 - Se o resultado do dado for ímpar, o jogador recebe 10 pontos
// 2 - Se o resultado do dado for par, o jogador perde 5 pontos.
// 3 - Se a rodada for múltipla de 3, o jogador ganha 15 pontos
// 4 - Se a rodada for múltipla de 4, o jogador perde 20 pontos
// 5 - Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro de pontos até a pontuação estar positiva
 
// O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª rodada com uma pontuação igual ou superior a 50 pontos.
 
// Vocês não podem usar arrays para a execução do desafio
// Utilizem os conceitos estudados até o momento para executar
// O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.
// A pontuação final deverá ser exibida na última rodada.
// Poderá ser exibido em tela avisos de ganho e perda de pontos

let points = 100;

for (i=1; i <= 20; i++) {  
    let dice = 0;
    do{
        dice = parseInt(Math.random() * 6);
    } while (dice === 0);
    let sub;
    
    if (dice % 3 == 0){
        console.log(`${points} + 15 = ${points + 15} | Dado: ${dice} R: ${i}`);
        points += 15;
    }else if (dice % 4 == 0){
        sub = points > 0 ? 20 : 40;
        console.log(`${points} - ${sub} = ${points - sub} | Dado: ${dice} R: ${i}`);
        points -= sub;
    }else if (dice % 2 != 0){
        console.log(`${points} + 10 = ${points + 10} | Dado: ${dice} R: ${i}`);
        points += 10;
    }else if (dice % 2 == 0){
        sub = points > 0 ? 5 : 10;
        console.log(`${points} - ${sub} = ${points - sub} | Dado: ${dice} R: ${i}`);
        points -= sub;
    }
}

if (points >= 50){
    console.log('Você ganhou! | Points: ' + points)
}else{
    console.log('Você perdeu  | Points: ' + points)
}   