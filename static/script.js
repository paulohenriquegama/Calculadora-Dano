let arma_selecionada,personagem_selecionado;
let list_arma_selecionada = []

const personagens = document.getElementsByClassName("personagens")

let vida_personagem = {"Orc":10, "Goblin":20,"Feiticeiro":30}



for (const personagem of personagens){
    personagem.addEventListener("click", selecionarPersonagem)
    
}


function selecionarPersonagem(evento){
    const personagemSelecionado = evento.target.parentElement
    const nomePersonagem = personagemSelecionado.getAttribute("id")
    
    if (!personagemSelecionado.classList.contains("selecionadoPersonagem")){
        personagemSelecionado.classList.add("selecionadoPersonagem");
        personagemSelecionado.style.borderTop = "5px solid black";
        
        const texto_Personagem = document.getElementById("text_personagem").innerHTML = `Você selecionou o(a) ${nomePersonagem}`
        

    }else{
        personagemSelecionado.classList.remove("selecionadoPersonagem");
        personagemSelecionado.style.borderTop = "none";

    }
    personagem_selecionado = nomePersonagem;
}

const armas = document.getElementsByClassName("armas")

for (const arma of armas){
    arma.addEventListener('click',selecionarArma)
}

function selecionarArma(evento){
    const armaSelecionada = evento.target.parentElement
    const nomeArma = armaSelecionada.getAttribute("id")
    
    
    
    if(!armaSelecionada.classList.contains("selecionadoArma")){
        armaSelecionada.classList.add("selecionadoArma");
        armaSelecionada.style.border = "2px solid black"
        arma_selecionada = nomeArma
        list_arma_selecionada.push(nomeArma)
        
        
        
    }else{
        armaSelecionada.classList.remove("selecionadoArma");
        armaSelecionada.style.border = "none"
        let posicao = list_arma_selecionada.indexOf(nomeArma)
        console.log("posicaçao é: " + posicao)
        if (posicao > -1){
            list_arma_selecionada.splice(posicao,1)

        }
    }
    const armasSelecionadas = document.querySelectorAll(".selecionadoArma")

    console.log(list_arma_selecionada.length)
    if(list_arma_selecionada.length===0){
        const texto_arma = document.getElementById("text_arma").innerHTML = 'Selecione uma arma'

    }else{
        if(list_arma_selecionada.length>1){
            alert("Por favor deixa apenas um ataque selecionado")
        }else{    
        const texto_arma = document.getElementById("text_arma").innerHTML = `Você selecionou o(a) ${list_arma_selecionada[0]}`
        
        }
    }
    
    
}


function calcularDano(){
    let nivel, nome_arma;
    nome_arma = arma_selecionada;
    let texto_dano,vida;
    
    if (nome_arma === "soco"){
        nivel = 13
    }else{
        if(nome_arma === "espada"){
            nivel = 25
        }else{
            if(nome_arma === "staff"){
                nivel = 35
            }else{
                
            }
        }
    }
    

    dano = Math.floor(Math.random() * nivel) + 1;

    if(personagem_selecionado === "orc"){
        vida = vida_personagem.Orc
    }else{
        if(personagem_selecionado === "goblin"){
            vida = vida_personagem.Goblin

        }else{
            vida = vida_personagem.Feiticeiro
        }
    }

    if (dano >= vida){
        texto_dano = document.getElementById("text_dano").innerHTML ="Você causou " +  dano + " de dano e o seu oponente está morto"
    }else{
        texto_dano = document.getElementById("text_dano").innerHTML ="Você causou " +  dano + " de dano e o seu oponente está vivo"

    }

    
    return dano
    
}

