//<----- DECLARAR TODOS OS NOSSOS ELEMENTOS DO HTML
let pixel0 = document.getElementById('black');
let pixel1 = document.getElementById('caixa1');
let pixel2 = document.getElementById('caixa2');
let pixel3 = document.getElementById('caixa3');
let botaoCorAleat = document.getElementById('button-random-color');
let quadroPixel = document.getElementById('pixel-board');
let resetButton = document.getElementById('clear-board');
let pixels = document.getElementsByClassName('pixel');
let grupoPixel = [pixel0, pixel1, pixel2, pixel3];
let paletaAleatoria = [pixel1, pixel2, pixel3];
let resetSite = document.getElementById('resetSite');
//<----- CRIAR UMA FUNÇAO QUE VAI CARREGA OS PIXEL DO QUADRO
window.onload = function(){
    for(i= 0; i < 25; i++){
        const pixels = document.createElement('div');
        pixels.className = 'pixel';
        quadroPixel.appendChild(pixels);
    }
}
//<----- CRIANDO UMA FUNÇÃO PARA O BOTÃO ALEATORIO GERAR COR E EM SEGUIDA FAZER COM QUE AS CORES GERADAS TENHAM PAIS.
function corAleatoria (){
    //referencia https://css-tricks.com/snippets/javascript/random-hex-color/
    let corRandom = Math.floor(Math.random()*16777215).toString(16);
    let corPronta = "#"+corRandom;
    if (corRandom === 'ffffff'){
        corRandom = 'fff99d'
    }
    //FAZER FUNÇÃO DO LOCAL STORAGE
    return corPronta
}
botaoCorAleat.addEventListener('click',function(){
    for(let i=0; i<paletaAleatoria.length; i++){
        paletaAleatoria[i].style.background = corAleatoria();
        if (pixel1.style.backgroundColor === pixel2.style.backgroundColor || pixel1.style.backgroundColor === pixel3.style.backgroundColor){
            pixel1.style.backgroundColor = corAleatoria ();
        }else if (pixel2.style.backgroundColor === pixel3.style.backgroundColor){
            pixel2.style.backgroundColor = corAleatoria ();
        }else{
            pixel3.style.backgroundColor = corAleatoria ();
        }
    }
    pixel0.style.backgroundColor = 'black';
    
})
//<------ BOTÃO PRA TORNA OS PIXELS BRANCO/LIMPOS NOVAMENTE.
resetButton.addEventListener('click',function(){
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = 'white';
    }
})
//<----------- TIRA O SELECT E ESCOLHER UMA COR
//FAZER UMA FUNÇÃO QUE IRÁ SALVAR O BOTAO SELECIONADO
function escolherCorPaleta(event) {
    let corNova = event.target;
    let corAnterior = document.querySelector('.selected');
    corAnterior.classList.remove('selected');
    corNova.classList.add('selected');
}
    for(let i = 0; i<grupoPixel.length; i++){
        grupoPixel[i].addEventListener('click', escolherCorPaleta);
    }
//<----------- PINTA O PIXEL.
quadroPixel.addEventListener('click',function pixelEscolhido(event) {
    let pixelEscolhido = event.target;
    if (pixelEscolhido.classList.contains('pixel')) {
        let corAnterior = document.querySelector('.selected');
        let corNova = corAnterior.style.backgroundColor;
        pixelEscolhido.style.backgroundColor = corNova;
    }
})
resetSite.addEventListener('click', function(){
    //referencia https://www.bitdegree.org/learn/javascript-refresh-page
    location.reload()
})
//FAZER UMA FUNÇÃO DO LOCALSTORAGE QUE ARMAZENE AS CORES GERADAS.
//UMA FUNÇAO QUE IRA SALVAR OS PIXEL PINTADO DA tela