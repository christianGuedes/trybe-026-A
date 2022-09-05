function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
//<--------------------------ATIV 1
  createDaysOfTheWeek();
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 
  function criarDiasDezembro(){
  let days = document.getElementById("days");
  for (let index = 0; index < decemberDaysList.length; index++){
    const dias = decemberDaysList[index];
    const diasLista = document.createElement('li');
    diasLista.innerHTML = dias;
    diasLista.className = 'day';
    
    if (index === 24 || index === 25 || index === 32){
        diasLista.className ='day holiday';
    }   
    if (index === 5 || index === 12 || index === 19 || index === 26){
        diasLista.className = 'day fryday';
    }
    days.appendChild(diasLista);
    }

    diasList = document.getElementsByClassName('day');
}
criarDiasDezembro();
//<----------------------------ATIV 2
let contBotao = document.querySelector('.buttons-container');
let botaoFeriado = document.createElement('button');
botaoFeriado.innerText = 'Feriados';
botaoFeriado.id = 'btn-holiday';
contBotao.appendChild(botaoFeriado);

//<--------------------------ATIV 3
botaoFeriado.addEventListener('click', function() {
    var feriadosDias = document.querySelectorAll('.holiday');
    for(var i=0; i<feriadosDias.length; i++){
        feriadosDias[i].style.backgroundColor = "green";    
    }
});

//<--------------------------ATIV 4
let botaoSexta = document.createElement('button');
botaoSexta.innerText = 'Sexta-feira';
botaoSexta.id = 'btn-friday';
contBotao.appendChild(botaoSexta);

//<------------------------ATIV 5
var sextaCheira = document.querySelectorAll('.fryday');
botaoSexta.addEventListener('click', function(){
       for(var i = 0; i<sextaCheira.length; i++){
        if (sextaCheira[i].innerText === "SEXTOU"){  
            
        }else
        sextaCheira[i].innerText = "SEXTOU";
       }
});

console.log(sextaCheira);


