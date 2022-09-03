//------------PRA FIXAR
//Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'));
//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "green";
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerHTML = "<p>TEXTO</p>"
//Acesse o primeiroFilho a partir de pai.
console.log(document.getElementById('pai').firstElementChild)
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').parentNode.innerText)
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)
//Agora acesse o terceiroFilho a partir de pai.
console.log(document.getElementById('pai').children[3])
//Crie um irmão para elementoOndeVoceEsta.
const paiDoElemento = document.getElementById('pai');
const irmaoDoElemento = document.createElement('div');
irmaoDoElemento.id = 'irmaoDoElemento';
irmaoDoElemento.innerText = "irmão";
paiDoElemento.appendChild(irmaoDoElemento);
//Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoDoElemento = document.createElement('p')
filhoDoElemento.id = "filho";
elementoOndeVoceEsta.appendChild(filhoDoElemento);
//Crie um filho para primeiroFilhoDoFilho.
const filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoFilhoDoFilho = document.createElement('div');
filhoDoFilhoDoFilho.id = 'filhoDefinitivo';
filhoDoFilho.appendChild(filhoDoFilhoDoFilho);
//A partir desse filho criado, acesse terceiroFilho.
console.log(document.getElementById('filhoDefinitivo').nextElementSibling);

