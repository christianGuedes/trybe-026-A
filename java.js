     // <-------------------------------------------------------LISTA DE APRENDIZADO ---------------------------------------------------------------------------
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
        //aqui nesse primeiro momento, eu declarei a minha lista "aprendizados" e onde irei inserir essa minha lista, que é dentro de licoes_aprendidas.
        //em seguida coloquei um laço for, onde eu queria resgatar a minha lista de item previamente declarada e criei uma let para futuramente chama-lá.
        //pra pegar todos os items da lista, criei uma variavel i com o valor inicial 0, pois quero começa pelo "pouco de javascript" e em seguida ir até "outros"no qual, foi
        //minha condição de loop, em seguida inseri um valor de incremento, para que apos o fim do loop, eu pudesse, estar gerando esta lista da maneira como queria.
        let apredizadoLista = document.createElement('li');
        //aqui eu estou criando atraves do dom, a nossa lista "li";
        apredizadoLista.innerText = aprendizado;
        //nessa linha, estou declarando que o texto dentro da nossa lista é igual ao aprendizado, variavel que eu declarei como itemdanossalista[indice], o que se encaixa
        //perfeitamente no nosso uso.
        aprendizadosList.appendChild(apredizadoLista);
        //e por fim, precisamos adicionar o nosso filho, na nossa primeira variavel já listada lá em cima.
    }

        // <-------------------------------------------------------LISTA DO QUE APRENDER----------------------------------------------------------------------
    let queroAprender = [
    'Criação de sites com aplicação de JS',
    'Manuseio do JS',
    'Banco de dados',
    'Gerir melhor o tempo',
    'Como liderar',
    'Comunicação',
    'Aprofundar em html e css',
    'Inglês',
    'React',
    'Python'
    ];
    
    let queroAprendList = document.querySelector("#licoes_a_aprender");
    for(let ii = 0; ii < queroAprender.length; ii++){
        let listaAprender = queroAprender[ii];
        let queroAprendLista = document.createElement('li');
        queroAprendLista.innerText = listaAprender;
        queroAprendList.appendChild(queroAprendLista);
    }
        let texto1 = "Na nossa primeira semanas tivemos abordagem sobre o sistema linux e seu terminal o que foi algo muito legal, pois até então eu apenas utilizava windows.Em seguida tive contato com as plataformas git e github que apesar do nome serem parecidos, não são a mesma coisa.E por fim fui introduzido uma segunda vez sobre HTML e CSS.";
        let textoExperiencia = document.querySelector(".learn");
        let textExp = document.createElement("p");
        textExp.innerText = texto1;
        textoExperiencia.appendChild(textExp);
        textExp.style.marginLeft = "10px"; 

    function mostrarSobreMim (){
        document.getElementById("meuTexto").innerHTML = "<p>Bom me chamo Christian Guedes e estou no curso de desevolvimento web pela Trybe,sou da turma 26 tribo A.</p>";
    }

  