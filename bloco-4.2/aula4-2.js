// <----------------ATIV 4.2

let soma = 0;
for (let i = 0; i < numbers.length; i++){
     //console.log(numbers[i]);
     soma += numbers[i];

}
    //console.log(soma);
    console.log(soma);
    let divisao = soma % numbers.length;
    console.log(divisao);
    if (divisao > 20){
        console.log("O valor foi maior que 20");
    }else{
        console.log("Valor menor que 20");
    }

    let numbers = [5, 9, 3, 19, 70, 8, 90, 2, 35, 27, 90];
    var maior = 0;
    var repetiu = (0);
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > maior){
            repetiu = 1;
            maior = numbers[i];
        }
        else if (numbers[i] === maior){
            repetiu += 1;
        }
    }
    console.log("o maior é: " + maior);
    console.log("o maior numero que foi: " + maior + " " + "se repetiu: " + repetiu + " vezes");
     
    let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let count = 0;
    for(let i = 0; i < numbers1.length; i++){
        if (numbers1[i] % 2 != 0){
            count += 1;
        } 
    }
    console.log("existiam : " + count + " numeros impares!");
    
    let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let menor = numbers2[0];
    for (let i = 0; i < numbers2.length; i++){
         if (menor > numbers2[i+1]){
             menor = numbers2[i+1];
         }
    }
    console.log(menor);

    let numerosLista = [];
    for (let i = 0; i <= 25; i++){
         numerosLista.push(i);
    }
    console.log(numerosLista);
    
    let resultado = [];
    for(let i= 0; i < numerosLista.length; i++){
        resultado.push((numerosLista[i] / 2));
    }
    console.log(resultado);
