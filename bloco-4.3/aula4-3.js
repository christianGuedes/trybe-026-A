let numero = 4;
for(let i = numero-1; i > 0; i--){
    numero *= i;
}
console.log(numero);

let frase = "trybe".split("");
let fraseReversa = frase.reverse();
var fraseJoin  = fraseReversa.join("");
console.log(fraseJoin);


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorFrase = array[0];
for (let i = 0; i < array.length; i++){
        if(array[i+1]) {

            if (maiorFrase.length < array[i+1].length){
                maiorFrase = array[i+1];
            }
        }
}
console.log(maiorFrase);

let arr = ['java', 'javascript', 'python', 'html', 'css'];
let menorFRase = arr[0];
for (let i = 0; i < arr.length; i++){
    if(arr[i+1]) {

        if (menorFRase.length > arr[i+1].length){
            menorFRase = arr[i+1];
        }
    }
}
console.log(menorFRase);