//tipos de variaveis.
let movie = "duro de matar"; //string, aqui temos a variavel como uma palavra ou um conjunto.
let notaMovie = 10; //variavel do tipo numerico, podendo ser inteiro ou fracionado.
let dapraVer = true; //boolean, aqui ela sempre será true para uma condição ou false.
let vazio; //tipo undefined.
let color = null; //de inicio ela pode ser nula porem futuramente, pode ter um valor atribuido.

//console.log(notaMovie*3); //multiplicando nossa variavel nota por 3, neste comando o console ira imprimir para nós o valor resultado.

//existe um modo para adicionar um ou remover uma unidade de um valor, que basicamente, precisamos utilizar o ++ para adicionar e -- para subtrair.
//essa qustão do ++ tbm irá ser util no futuro em repetiçoes, pois sera o responsavel por manter a repetição.

notaMovie++;
console.log(notaMovie);

//if - condição "se";
//else - oposto de se, agem na contra mão da condição se.

//if (condicao) {
    //codigo
//}//com isso declaramos nossa primeira condição, estando livre para adicionar mais quantas forem necessarias para nosso programa.
 //exemplo
 //else if (outraCondicao){
    //codigo
 //}
 //caso não queremos declarar mais nenhuma condição, podemos então declarar a tag else.
 //else{
    //codigo
 //}

let base = 5;
let height = 8;
let area = base+height;
console.log(area);

let perimetro = (base*2) + (height*2);
console.log(perimetro);

 let trybe = 23;
 if (trybe >=14 && trybe < 14.40){
    console.log("Esquenta")
 }
 else if(trybe >=16.30 && trybe <18) {
    console.log("Aula ao vivo");
 }
 else if(trybe >=19.20 && trybe < 20){
    console.log("fechamento");
 }
 else{
    console.log("fim dos momentos assincronos")
 }

let notaPessoa = 99;
if (notaPessoa >=80){
    console.log("Parabéns, você passou!");
}
else if(notaPessoa <= 79 && notaPessoa >= 60){
    console.log("Você está na lista de espera!");
}
else{
    console.log("Reprovado.");
}

let Teste = true;

let diaEnsolarado = "true"; //aqui irei aplicar um breve exemplo sobre
let finalDeSemana = "true";

let currentHour = 10;
let message = [];

if (currentHour >= 22){
    console.log(message="vai pra cama, nada de comida");
}
else if (currentHour >= 18 && currentHour <22){
    console.log(message="rango da noite");
}
else if (currentHour >= 14 && currentHour <18){
    console.log(message="hora do bolo");
}
else if(currentHour >=11 && currentHour < 14){
    console.log(message="hora do almoço");
}
else if(currentHour>4 && currentHour <=1){
    console.log(message="hora do café");
}
else{
    console.log(message="a mimir");
}
console.log(message);

//com o uso do operador && só obteremos resultado "true" caso os dois valores sejam "true"
//caso contrario ele ira imprimir um valor "false"

//ao contrario do && temos o || que pode-se chamade "ou" também, nele para que obtenhamos valor "true",
//apenas um de nossos valores precisam ser "true", diferente do &&.
let weekDay = "terça-feira";
let message2 = [];
if (weekDay === "quarta-feira" || weekDay ==="segunda-feira" || weekDay === "terça-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log(message2="Mais um dia de aprendizado!!!");
}
else{
    console.log(message2="descanso pa nois");
}

let weekDay2 = "segunda";
let message3 = [];
if (weekDay2 === "sabado" || weekDay2=== "domingo"){
    console.log(message3="dia de descanso")
}
else{
    console.log(message3="mais um dia de aprendizado.");
}
// Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// de acordo com a faixa etária de uma pessoa.

//o switch é similar ao if porem ele só serve para comparar valores de uma unica
//variavel, enquanto o o if realiza diversas simultaneamente.
mes = 'setembro';
let estacaoDoAno = [];

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'

let numer = 30;
console.log(typeof numer);
//

//como saber se um numero é par
let num1 = 5;
let num2 = 5;
let num3 = 2;

let isEven = ((num1 + num2) % 2 ) == 0
console.log(isEven)

//com tres num
isEven = ((num1 + num2 + num3 ) % 2) == 0
console.log(isEven)

