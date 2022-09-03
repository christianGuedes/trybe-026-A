//<---------------------------------PARTE I
//1.Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let corpo = document.querySelector('body');
corpo.id = "bodyId";
let titulo = document.createElement('h1');
titulo.innerText = "Exercício 5.2";
corpo.appendChild(titulo);
//2.Adicione a tag main com a classe main-content como filho da tag body;
let principal = document.createElement('main');
principal.className = 'main-content';
corpo.appendChild(principal);
principal.innerText = "teste";
//3.Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let sessao = document.createElement('section');
sessao.className = 'main-content center-content';
principal.appendChild(sessao);
//4.Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let texto = document.createElement('p');
texto.innerText = 'Mais uma noite como todas as anteriores. Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto. Observo a noite fria e chuvosa, até parece confortável por um momento, se não fossem as dezenas de preocupações que me desmotivam a cada dia.';
sessao.appendChild(texto);
//5.Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sessaoLeft = document.createElement('section');
sessaoLeft.className = 'main-content left-content';
principal.appendChild(sessaoLeft);
//6.Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sessaoRight = document.createElement('section');
sessaoRight.className = 'main-content right-content';
principal.appendChild(sessaoRight);
//7.Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let foto = document.createElement('img');
foto.src = 'https://picsum.photos/200';
foto.className = 'small-image';
sessaoLeft.appendChild(foto);
//8.Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let listaNaoOrd = document.createElement('ul');
listaNaoOrd.id = 'listaNOrd';
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < lista.length; i++){
    let numb = lista[i];
    let numLista = document.createElement('li');
     numLista.innerText = numb;

     listaNaoOrd.appendChild(numLista);
}
sessaoRight.appendChild(listaNaoOrd)
//9.Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
function criarLista(){
    const novaTagH3 = document.createElement('h3');
    novaTagH3.innerText = "teste";
    principal.appendChild(novaTagH3)
}
criarLista()
criarLista()
criarLista()
//10.Adicione a classe title na tag h1 criada;
titulo.className = "title";
//<------------------------------------PARTE II

//Adicione a classe description nas 3 tags h3 criadas;
function colocarClasse(){
    let classe = principal.getElementsByTagName('h3');
    for (let i = 0; i < classe.length; i++){
        classe[i].className = ('main-content description');
    }
}
colocarClasse()
//Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
principal.removeChild(sessaoLeft);
//Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
sessaoRight.style.marginRight = 'auto';
sessaoRight.style.display = 'flex';
sessaoRight.style.justifyContent = 'center';
//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
sessao.style.backgroundColor = 'green';
//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let tirarDaLista = document.getElementById('listaNOrd');
tirarDaLista.removeChild(tirarDaLista.lastChild)
tirarDaLista.removeChild(tirarDaLista.lastChild)
