let objeto = {
    name: 'rb-kprl',
    tipo: 'chave',
    função: 'abrir portas',
    quantidade: 40,
    comoObter: ['Flea', 'Raids']
};

//console.log('O objeto é uma ' + objeto.tipo + ' e pode abrir portas.');

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
//console.table(pessoa);
//console.log('O ' + pessoa.nomeCompleto + ' nasceu no dia: ' + '' + pessoa.nasceu.dia +' no mês de' +' '+ pessoa.nasceu.mes + ' do ano' + ' ' + pessoa.nasceu.ano + ' e ele gosta de ' + '' + pessoa.gostaDe[0] + ' e sua atividade favorita é ' + pessoa.gostaDe[1]+ ' Isabele');
//uma maneira de acessar a chave de um objeto é atraves do '.'

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  //console.log(cars[index]);
}

let pizzas = {
    sabores: ['portuguesa', 'baiana', 'frango com catupiry', 'brocolis com bacon'],
    preco:39.99,
    bordaRecheada: true
};
//console.table(pizzas);

for (let chave in pizzas){
    //console.log(pizzas[chave]);
}

let pizzasDoces = ['chocolate', 'nutela', 'banana'];
for (let key in pizzasDoces){
    console.log(key, pizzasDoces[key]);
}


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

