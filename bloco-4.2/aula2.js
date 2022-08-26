let posicoes = ['boss ', 'andre ', 'pos3'];
console.log('Posiçoes ' +posicoes)

//importante de gravar em arrays, é
//por mais que o pos0 seja nosso primeiro elemento
//ele não ocupa a posição 1, pois em arrays
//essa contagem começa apartir do 0.
//para criarmos uma array(lista), basta declararmos uma variavel
//e inserir uma tag junto de um conjunto de [] colocando cada item entre virgulas.


console.log('testando chamado ' +posicoes[0])
//ao usar 'posicoes[0] estou chamando a lista e a posição 0, pois a mesma começa no 0
//posso colocar qualquer outro numero referente a qualquer outra posição.


posicoes[5] = 'teste';
//um dos metodos para adicionar um valor a um array porem não é muito usado e nem recomendado
//devido a especificidade, a menos que queremos alterar um valor em uma posição especifica.


posicoes.push('pos4');
posicoes.shift([1]);
//com o shift posso deletar um array do inicio
posicoes.pop(['teste']);
//já o pop faz o inverso, eu deleto um array do final.
console.log(posicoes)
//aqui estamos adicionando um valor novo na nossa lista atraves de um push.
//a vantagem de usar o push, é que ele sempre adiciona
//nosso ultimo valor na ultima posição, ao contrario do codigo anterior.

console.log(posicoes.length);
//no comando length ele retorna o valor da lista, mostrando numero atualizado.

console.log(posicoes.sort());
//ao chamarmos nossa lista, podemos tambem ordena-las em ordem alfabetica atraves do comando sort();

console.log(posicoes[0]);
//chamando um unico array por uma posição especifica.

//para imprimir todos os valores de um array de uma forma mais simplificada, precisamos uusar
//um for(uma repetição), dentro de um for precisamos criar uma nova var que será o nosso contador e responsavel
//por fazer a repetição rodar até onde mandarmos.
//aqui usei a var index como o contador, nela eu já declaro que o seu valor é 0, que é igual a primeira posição da nossa lista
//em seguida, eu coloco sua condição, para imprimir a lista por completo precisamos que o numero que a index ira receber, seja menor que .lenght de nossa lista
//que como vimos la em cima, o lenght nos tras um valor numerico referente ao tanto de itens desta lista
//em seguida adicionamos um repetidor para o nosso index, caso o numero no inicio do codigo, seja menor que o .lenght de nossa lista
//ele deve adicionar +1 ao nosso index, fzendo com que rode novamente nossa impressora.
for (let index = 0; index < posicoes.length; index++){
    console.log(posicoes[index]);
}
//mesmo que eu adicione um novo push a nossa lista e execute novamente o repetidor, ele tera uma nova impressão.

//fixando array
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu2.push('contato');
console.log(menu2);

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

//testando o pop e start
let Start = ['nome1', 'nome2', 'nome3'];
console.log(Start);
let startInicio = Start.shift();
console.log(startInicio);
Start[Start.length-1];


let Poop = ['fim', 'fim2', 'fim3'];
console.log(Poop);
let Poopfim = Poop.pop();
console.log(Poopfim);

//fixando for.
let cars =['saab', 'volvo', 'bmw'];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let contador = 0; contador < groceryList.length; contador++){
    console.log(groceryList[contador]);
}

let passouTrybe = ['maria', 'joao', 'pedro', 'vitor'];
for (var indice = 0; indice < passouTrybe.length; indice++){
     var msg = "BOA, MEUS PARABÉNS " + passouTrybe[indice];
     console.log(msg)
}

let word = 'Hel1o';
for (let letter of word) {
  console.log(letter);
}

//se notarmos, dentro de todas nossas repetiçoes, a nossa primeira variavel dentro a ser declarada
//é a que chamamos de contador/ uma variavel responsavel por manter nossa função funcionando.

let tabuada = 102;
for (let tabu = 0; tabu <= 10; tabu++){
    console.log(tabu*tabuada)
}

//aqui eu fiz uma tabuada de um numero especifico, antes de irmos para a repetição,
//precisamos declara nossa funçao numero que ira roda junto do contador.
//é importante considerarmos que o contador comece na posição 0 pois é a mesma posição onde a lista/array tambem começa
//podendo então realizar esse tipo de interação mais coerente.
//em seguida declaramos até onde esse contador deve ir e em seguida colocamos um codigo para que sempre no final, apos imprimir algo
//ele volte um valor x e some junto com o seu numero atual.
//em casos de lista com nomes/string, o correto a se colocar como limite sempre sera <> sem o sinal =, pois o lenght ele sempre da 
//um valor -1 do ultimo numero, então supondo que uma lista com tres nomes, ela tem o tamanho de 3, porem começa no 0, então se contassemos
//desde o 0 até 3, teriamos 4 como resultado porém não temos 4 nomes, então pra esse tipo de caso
//por padrao, o programa sera jogara -1 do total, que no nosso caso, daria 3 e 3 é correspondente do numero total de nomes na lista.
//apos feito a primeira linha, podemos apenas imprimir o resultado ou até mesmo usar uma nova variavel e combinando-a com o resultado de nossa 
//repetição.

//ativ for/of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nombre of names){
  console.log(nombre);
}

let arrOfNumbers = [19, 31, 50];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

let jogoTeste = [1, 4, 5, 6, 7, 0];
let numJogo = [3, 4, 5, 8, 9 , 0];
let acertos = 0;

for (let inic1 = 0; inic1 < jogoTeste.length; inic1+=1){
     console.log('Seu jogo, 'jogoTeste[inic1]);
     for (let inic2 = 0; inic2 < numJogo.length; inic2+=){
     console.log('numero do jogo, ' numJogo[inic2]);
     if (jogoTeste[inic1] === numJogo[inic2]){
     acertos += 1;
     console.log('acertou');
     }
    }
  }
  console.log('Total de acerto: ', acertos)
    

