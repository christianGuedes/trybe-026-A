window.onload = jsCarregado;

function jsCarregado(){
    alert("bem vindo a pagina do meu projeto!")
}

function apareceTexto(){
    let texto = document.getElementById('textoTeste');
    texto.innerText = "inserindo texto atraves do evento click do botão";
}