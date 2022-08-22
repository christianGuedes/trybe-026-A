//let n = 0;
let sum = 0;
for (let i = 1; i <= 50; i++){
    sum  += i;
    //console.log("a soma de 1 á 50 é :" +sum);
}
console.log("a soma de 1 á 50 é de : " + sum);

let numero = 0;
for (let i = 2; i <=150; i++){
    if((i % 3)== 0) {
    numero += 1;
    }
}
console.log(numero);
if(numero==50){
   console.log("mensagem secreta");
}



let jogador1 = "tesoura";
let jogador2 = "papel";

if (jogador1 == "pedra") {
    if (jogador2 == "tesoura") {
        console.log("Pedra quebra tesoura");
    } else if (jogador2 == "papel"){
        console.log ("Papel envolve a Pedra");
    } else if (jogador2 == "pedra") {
        console.log ("Empate");
    }
}
else if (jogador1 == "tesoura") {
    if (jogador2 == "pedra") {
        console.log ("Pedra quebra tesoura");
    } else if (jogador2 == "papel"){
        console.log ("tesoura corta papel");
    } else if (jogadoe2 == "tesoura") {
        console.log ("Empate");
    }
}
else if (jogador1 == "papel"){
    if (jogador2 == "pedra") {
        console.log ("Papel envolve pedra");
    }else if (jogador2 == "tesoura") {
        console.log ("Tesoura corta papel");
    }else if (jogador2 == "papel")  {
        console.log ("Empate");
    }
}


let player = 'tesoura';
let player1 = 'pedra';
let jogo = 'pedra' > 'tesoura' || 'tesoura' > 'papel' || 'papel' > 'pedra';
if (player > player1) {
    console.log('player 1 won');
} else if (player1 > player) {
    console.log('player 2 won')
} else if (player === player1) {
    console.log('empate');
}