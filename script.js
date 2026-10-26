const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao:[
                   "No início ficou com medo do que essa tecnologia poe fazer." ,
                   "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao:[ 
                    "Quis saber como usar IA no eu dia a dia.",
                    "pensou que essa nova tecnologia pode ajudar em várias tarefas do seu dia a dia"
                ]
                 
            }           
            
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre elaIA. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto:"Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao:
                 ["conseguiu utilizar a IA para busca informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicado de forma direcionada e isso ajudou muito suas pesquisas sobre assunto complexoa."
                ] 
                
            },
            {
                
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Acho que era muito mais fácil procurar por respostas utilizando alguns meio mais tradicionais mesmo que levasse mais tempo.",
                    "Senti um pouco de medo de quais dados pessoais seu a IA poderia usar e por isso prefere fazer suas coisas com pouca intromissão da tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao:[
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudo entre trabalhadores pra discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reuzir as desigualdades geradas pela automação."
                    
                ]
            },
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionar a inovação na área de IA e lutar parra abrir novos caminhos profissionais com IA.",
                    "Participar ativamente do desenvolvimento e soluçõe criativas e melhoria de procesos em IA"
                ]

            }
            
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: ["Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura para iniciantes.",
                    "Ainda acha que os meios de desenho tradicionais são mais eficazes parra a criatividade, por isso vem estimulando pessoas em suas redes sociaisa fazer pintura em aquarela."
                    
                ]
            },
            {
                texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: ["Acelerou o processo e criação de trabalho uilizando geradores de imagem e agora conseguem ensinar pesoas que sentem dificuldades em desenhar manualmente como utilizar também",
                     "Compartilhou artes em redes sociais como forma e ensinar como comunicar através da arte.",
                     "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tiraremideias do papel."
                ]
            }
            
        ]
    },
    {
        enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:[
                    "Percebeu que toda IA reproduz orientações baseadas na empresas que programou e muito do que o chat escrevia não refletia o que pensava e iso sabe que os textos gerados pela IA devem servir com auxílio e não resultado final."]
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:[
                    "Infelizmenete passou a utililizar a IA para fazer todas uas tarefas e agora se sente dependente a IA para tudo."
                ]
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aletorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

mostraPergunta();