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

//Crie um filho para elementoOndeVoceEsta.

//Crie um filho para primeiroFilhoDoFilho.

//A partir desse filho criado, acesse terceiroFilho.


let texto = "estou testando o appendchild";


let tamanho = document.getElementById("teste");
//console.log(tamanho.length);