// Desafio 1
function compareTrue(coca, pepsi) {
  // seu código aqui
  if (coca && pepsi == true){
    return true;
  }
  {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTri = (base * height) / 2;
  return areaTri;
  //calcArea(51, 1);
}
 
// Desafio 3
function splitSentence(nome) {
  // seu código aqui
  let separador = nome.split(' ');
  return separador;
}
  

// Desafio 4
function concatName(Nome) {
  // seu código aqui
  let primeiroNome = Nome.shift();
  let ultimoNome = Nome.pop();
  const nomeTodo = ultimoNome + ', ' + primeiroNome;
  return nomeTodo;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let tabela = (wins * 3) + ties;
  return tabela;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  var maior = numeros[0];
  var repetiu = (0);
  for (let i = 0; i < numeros.length; i++){
      if (numeros[i] > maior){
          repetiu = 1;
          maior = numeros[i];
      }
      else if (numeros[i] === maior){
          repetiu += 1;
      }
  }
  return repetiu;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  //estava tendo problemas com numeros negativos, usei o link acima como referencia ao uso do abs.
  // seu código aqui
  if (Math.abs(mouse - cat1)  === Math.abs(mouse - cat2)){
    return 'os gatos trombam e o rato foge';
  }
  else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return 'cat1';
  }
  else{
    return 'cat2';
  }
  }

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let stringNova = [];
  for (let valor of numeros){
    if(valor % 3 === 0 && valor % 5 === 0){
      stringNova.push('fizzBuzz');
    }
    else if(valor % 5 === 0){
      stringNova.push('buzz');
    }
    else if (valor % 3 === 0){
      stringNova.push('fizz');
    }
    else{
      stringNova.push('bug!');
    }
  }
    return stringNova;
  
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let fraseNova ='';
  fraseNova = string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  return fraseNova
}


function decode(string) {
  // seu código aqui
  let fraseNova2 = '';
  fraseNova2 = string.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u");
  return fraseNova2
}

