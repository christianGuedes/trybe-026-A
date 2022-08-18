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
        //default - caso seja digitado um valor não listado, ele ira
        //exibir o valor declarado ao default.
        //estacaoDoAno = 'digite corretamente.'
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

let count = 20;
let sum = 0;
console.log(sum);
for(let i = count; i <= count ; i++){
    sum += i;
}
console.log(sum);

//atividade do final de aula!
let nume1 = 3, nume2 = 3;
if (nume1 === nume2){
    console.log(nume1+nume2);
}
else{
    console.log(nume1*nume2);
}
//ativ 1
let numb1 = 9;
let numb2 = 9;
let soma = numb1+numb2;
console.log(soma);
let subi = numb1-numb2;
console.log(subi);
let divi = numb1/numb2;
console.log(divi);
let multi = numb1*numb2;
console.log(multi);
let porc = numb1%numb2;
console.log(porc);

//ativ 2
if (numb1>numb2){
    console.log(numb1);
}
else
{
 console.log(numb2);
}

//ativ 3
let numb3 = 8;
if (numb1>numb2 && numb1>numb3){
    console.log(numb1);
}
else if (numb2>numb1 && numb2>numb3){
    console.log(numb2);
}
else{
    console.log(numb3);
}

//ativ 4
if (numb1 > 0){
    console.log('positivo');
}
else if(numb1 < 0){
    console.log('negativo');
}
else{
    console.log('zero');
}

//ativ 5
let tri1 = 60;
let tri2 = 60;
let tri3 = 60;
let triangulo = tri1 + tri2 + tri3;
if (triangulo === 180){
    console.log('true')
}
else{
    console.log('false');
}

//ativ 6
//me ficou duvidas.

//ativ 7
let porc1 = 'a', porc2 = 'b', porc3 = 'c', porc4 = 'd', porc5 = 'e', porc6 = 'f';
let notaP = 9;
if(notaP >= 90 && notaP <=100){
    console.log(porc1);
}
else if (notaP >= 80 && notaP <=89){
    console.log(porc2);
}
else if (notaP >= 70 && notaP <=79){
    console.log(porc3);
}
else if (notaP >= 60 && notaP <=69){
    console.log(porc4);
}
else if (notaP >= 50 && notaP <=59){
    console.log(porc5);
}
else if (notaP < 50 && notaP > 0){
    console.log(porc6);
}
else{
    console.log('erro')
}

//ativ 8
let ativi1 = 4, ativi2 = 3, ativi3 = 3;
if (ativi1 % 2 == 0){
    console.log('false');
}
else if (ativi2 % 2 == 0) {
    console.log('false');
}
else if (ativi3 % 2 == 0){
    console.log('false');
}
else{
    console.log('true');
}

//ativ 9
if (ativi1 % 2 == 0){
    console.log('par');
}
else if (ativi2 % 2 == 0) {
    console.log('par');
}
else if (ativi3 % 2 == 0){
    console.log('par');
}
else{
    console.log('impar');
}