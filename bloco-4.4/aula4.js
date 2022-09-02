let objeto = {
    name: 'rb-kprl',
    tipo: 'chave',
    função: 'abrir portas',
    quantidade: 40,
    comoObter: ['Flea', 'Raids']
};

console.log('O objeto é uma ' + objeto.tipo + ' e pode abrir portas.');

let pessoa = {
    nome: 'christian',
    sobreNome: 'Guedes',
    idade: 23,
    gostaDe: ['jogar', 'passar tempo com sua mulher'],
    estuda: 'naTrybe',
    nasceu: {
        dia:21,
        mes:'setembro',
        ano:1998,
    }
};
//aqui abaixo, estou fazendo uma adição de chave com valor no meu objeto 'pessoa'
//pra isso basta eu colocar 'nomeDoObjeto' ['Chave'] = 'valor';
pessoa['nomeCompleto'] = pessoa.nome + ' ' + pessoa.sobreNome;
pessoa['trybe'] = true;
console.table(pessoa);
//console.log('O ' + pessoa.nomeCompleto + ' nasceu no dia: ' + '' + pessoa.nasceu.dia +' no mês de' +' '+ pessoa.nasceu.mes + ' do ano' + ' ' + pessoa.nasceu.ano + ' e ele gosta de ' + '' + pessoa.gostaDe[0] + ' e sua atividade favorita é ' + pessoa.gostaDe[1]+ ' Isabele');
//uma maneira de acessar a chave de um objeto é atraves do '.'

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

/* It's a for loop that is iterating over the keys of the object. */
let pizzas = {
    sabores: ['portuguesa', 'baiana', 'frango com catupiry', 'brocolis com bacon'],
    preco:39.99,
    bordaRecheada: true
};
//console.table(pizzas);

for (let chave in pizzas){
    console.log(chave, pizzas[chave]);
}

/* It's a for loop that is iterating over the keys of the object. */
let pizzasDoces = ['chocolate', 'nutela', 'banana'];
for (let chave in pizzasDoces){
    console.log(chave, pizzasDoces[chave]);
}


/**
 * If the first number is less than the second number, return the first number, otherwise return the
 * second number.
 */
function lessThan (numb1, numb2){
    if (numb1 < numb2){
        return numb1;
    }
    //else{ //em muitos casos o return, ele mata o restante da logica
    //o que neste exemplo ele acaba matando nosso else, pois o nosso 'if' acabou no primeiro
    //return.
        return numb2;
    //}
} 
console.log(lessThan(40,30));

let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
/*  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4
  console.log(conta['banco']['nome']); */
  
  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  // <------------------------ATIVIDADES.
/* The above code is creating an object called person, with the properties name, lastName, age, medals
and bestInTheWorld. */
  let person = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
      medals: {
      golden: 2,
      silver:3
    }
  }
  person["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
  console.log(person)
  console.log("A jogadora " + person.name + " " + person.lastName + " tem " + person.age + " anos de idade!")
  for(let i = 0; i < person.bestInTheWorld.length; i++){
    console.log([i], "Ela foi a melhor do mundo nos anos de: " + person.bestInTheWorld[i])
  }

  console.log("E possui " + person.medals.golden + " medalhas de ouro e " + person.medals.silver + " de prata!")

/* It's a for loop that is iterating over the keys of the object. */
  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for(let index in names){
    console.log("bom dia " + names[index])
  }

/* It's a for loop that is iterating over the keys of the object. */
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let key in car){
    console.log(key, car[key])
  }

/**
 * If the first number is greater than the second number, return the first number, otherwise return the
 * second number.
 * @param primeiroNum - 10
 * @param segundoNum - 20
 * @returns 'Os números são iguais'
 */
  function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 10));


  
  for(let index in info){
    console.log(info[index])
  }
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  //console.log("Bem Vinda, " + info['personagem'])
  info['recorrente'] = 'sim'

  let info2 ={
    personagem2: 'tio patinhas',
    origem2: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota2: 'O último MacPatinhas',
    recorrente2: 'sim'
  }
  //console.log(info2)
  for(let index in info){
    for(let index2 in info2){
      console.log(info[index] + " e " + info2[index2])
      }
      
  }


  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " " + "se chama " + leitor.livrosFavoritos[0].titulo)

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
} 

console.log(leitor)
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos!")

function palindromo (frase1){
  let frase2 = frase1.split("");
  let fraseReversa = frase2.reverse();
  var fraseJoin  = fraseReversa.join("");
  if (frase1 === fraseJoin){
    console.log("é um palindromo")
  } else{
    console.log("esta palavra não é um palindromo")
  }
}   
palindromo("desenvolvimento")


function maiorNumero (array){
let maiorNume = 0;
for (let i= 0; i < array.length; i++){
     if(maiorNume < array[i]){
      maiorNume = array[i];
     }
}
  console.log("o maior numero é " + maiorNume);
}
maiorNumero([2, 3, 6, 7, 10, 11]);


function menorNumero (array){
    array.sort((a,b) => a-b);
    console.log(array[0])
}
menorNumero([2, 1, 6, -1, 10, 11]);



function menosCaracteres(arr){
  //declaro a minha lista de array
  let maisLetras = arr[0];
  //aqui declaro meu valor inicial para a nossa comparação, que no caso é o nosso index 0
  for (let i = 0; i < arr.length; i++){
  //nessa repetição eu estou pedindo para que o index seja percorrido pelo meu array todo
      if(arr[i+1]) {
  //tive que usa esse if pra verifica se existia um array seguinte na minha repetição, pois em numeros de index, eu teria 4 enquanto o .length me retornaria o numero 5
  //ai então declarei que "se" o meu index do array + 1
  //começaria o meu real programa de comparação.
          if (maisLetras.length < arr[i+1].length){
  //sempre apos as verificaçoes, a minha variavel de menor frase pode ou não, ser reatribuida, conforme as condiçoes
              maisLetras = arr[i+1];
          }
      }
  }
  console.log(maisLetras)
}
menosCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])


function oQueMaisRepete (){

}


function somandoAteN (Numb){
  for(let i = Numb-1; i > 0; i--){
    Numb += i;
}
console.log(Numb)
}
somandoAteN(5)


function finalFrase(stringWord, stringEnding){
        let finalDaFrase = stringWord.substring(stringWord.length -2) 
        if(stringEnding == finalDaFrase){
           finalDaFrase = true
        } else false
        console.log(finalDaFrase);
}
finalFrase("trybe", "be")


/* if frase - menorfrase = substring
se substring === menorfrase
return true
else false */
