   
    let aprendizados = [
        "Um pouco de JavaScrip",
        "Git",
        "Github",
        "Unix",
        "HTML",
        "CSS",
        "Questões de softskill",
        "Bash",
        "Outros"
    ];

    let aprendizadosList = document.querySelector("#licoes_aprendidas");
    for (let i = 0; i < aprendizados.length; i++){
        let aprendizado = aprendizados[i];

        let apredizadoLista = document.createElement('li');
        apredizadoLista.innerText = aprendizado;

        aprendizadosList.appendChild(apredizadoLista);
    }