let area = document.getElementById("area");
//let desclicar = setTimeout(clicar, 3000);
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar (){
    area.innerText = 'clicou';
    area.style.backgroundColor = "pink";
}
//function funcDesclicar() {
//   clearTimeout(desclicar);
// }
function entrar(){
    area.innerText = 'entrou';
    area.style.backgroundColor = "black";
}
function sair(){
    area.innerText = 'saiu';
    area.style.backgroundColor = "rgb(42, 139, 42)";
}

function somar(){
    let numb1 = document.getElementById("num1");
    let numb2 = document.getElementById("num2");
    let resultado = document.getElementById("res");
    let n1 = Number(numb1.value);
    let n2 = Number(numb2.value);
    let soma = n1 + n2;
    resultado.inner
}