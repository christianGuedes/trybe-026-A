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