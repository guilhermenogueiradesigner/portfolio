var home = document.getElementsByClassName("home");
var logo = document.getElementsByClassName("logo");
var hamburguer = document.getElementsByClassName("hamburguer");
var menu = document.getElementsByClassName("menu");
var menuItens = document.getElementsByClassName("item");
var sobre = document.getElementsByClassName("sobre");
var grafico = document.getElementsByClassName("grafico");
var diagramacao = document.getElementsByClassName("diagramacao");
var frontEnd = document.getElementsByClassName("front-end");
var jobs = document.getElementsByClassName("jobs");
var jobCard = document.getElementsByClassName("job-card");
var changeBtnTop = document.getElementsByClassName("change-btn-top");
var changeBtnBottom = document.getElementsByClassName("change-btn-bottom");
var sobrePage = document.getElementsByClassName("sobre-page");
var skills = document.getElementsByClassName("skills");
var msgGroup = document.getElementsByClassName("msg-group");
var openedCard;
var currentScrollBar = 0;
var currentJobType = "all";
var currentCardId = "";
var openCardState = false;

window.addEventListener('DOMContentLoaded', (event) => {
    let preLoad = document.getElementsByClassName("pre-load");
    let content = document.getElementsByClassName("content");

    preLoad[0].style.display = "none";
    content[0].style.display = "block";
});

//Menu mobile
const mobileMenu = () => {
    
    logo[0].style.display = "none";

    hamburguer[0].children[0].src = "img/icones/exit.svg";
    hamburguer[0].style.marginTop = "20px";
    hamburguer[0].style.marginBottom = "20px";
    
    setTimeout(() => {

        menu[0].style.display = "flex";
        menu[0].style.flexDirection = "column";
        menu[0].style.justifyContent = "space-between"
        menu[0].style.marginBottom = "30px";

    }, 500);  

    home[0].style.flexDirection = "column";
    home[0].style.justifyContent = "flex-start";
    home[0].style.height = "220px";

    sobre[0].style.textAlign = "center";
    sobre[0].style.margin = "0 auto";
    sobre[0].style.marginBottom = "10px";
    
    grafico[0].style.textAlign = "center";
    grafico[0].style.margin = "0 auto";
    grafico[0].style.marginBottom = "10px";
    
    diagramacao[0].style.textAlign = "center";
    diagramacao[0].style.margin = "0 auto";
    diagramacao[0].style.marginBottom = "10px";

    frontEnd[0].style.textAlign = "center";
    frontEnd[0].style.margin = "0 auto"; 

    hamburguer[0].setAttribute("onclick","closedMenu()");

}

//Retorna à página inicial
const closedMenu = () => {
    
    menu[0].style.display = "none";

    home[0].style.height = "60px";
    home[0].style.flexDirection = "row";
    home[0].style.justifyContent = "space-between";
    home[0].style.alignItens = "center";
    
    hamburguer[0].children[0].src = "img/icones/menu.svg";
    hamburguer[0].style.marginTop = "0";
    hamburguer[0].style.marginBottom = "0";

    logo[0].style.display = "flex";

    hamburguer[0].setAttribute("onclick","mobileMenu()");
}

//Informações dos Job Cards 
const cards = [
    {
        id: "1",
        title: "Informativo O Pilar da Aviação:<br>Histórias da Aviação do Exército",
        description: "Para a capa da matéria sobre o Sargento Vasques foi usada sua foto em frente à aeronave, com recorte, luz e sombra para destacar a partir da profundidade os elementos da composição.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Aviação, revista digital com edições trimestrais, projeto no qual tive a honra de participar desde a sua criação, planejamento gráfico, diagramação, fotografia e edição de 2018 até 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Edição e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Photoshop"],
        src: "img/trabalhos/1.webp",
        src_group:[]
    },
    {
        id: "2",
        title: "eBook:<br>Exercícios Semanais",
        description: "Para esse projeto, foi feita a escolha de cores vibrantes simbolizando energia em contraste com o preto e o uso de formas representando movimento e velocidade.<br><br>Além da foto principal, também foi criada uma ilustração para representar a posição.<br><br>Esse é mais um projeto de redesign para eBooks PLR, que são conteúdos com direito de revenda, normalmente em formato de texto .doc que recebem uma melhora estética e correta disposição de informações a fim de valorizar o produto antes de sua comercialização.",
        jobType: "digital",
        jobClass: ["Diagramação","Vetorização", "Edição e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        src: "img/trabalhos/2.webp",
        src_group: [
            "img/trabalhos/2a.webp",
            "img/trabalhos/2b.webp"
        ]
    },
    {
        id: "3",
        title: "Moeda Comemorativa:<br>32 Anos da Base de Aviação de Taubaté",
        description: "Para comemorar os 32 anos da BAvT, foram lançados diversos produtos.<br><br>Dentre eles, a moeda confeccionada pela TOCOIN a partir de um molde vetorizado, contendo na frente o atual símbolo da Base e no verso uma mistura do antigo símbolo com a imagem do Vale do Paraíba, ainda com um arco das insígnias das Sub-unidades.",
        jobType: "grafico",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/3.webp",
        src_group: [
            "img/trabalhos/3a.webp",
            "img/trabalhos/3b.webp",
            "img/trabalhos/3c.webp"
        ]
    },
    {
        id: "4",
        title: "Folder:<br>Centenário da Aviação Militar",
        description: "Os eventos do Centenário da Aviação Militar, suas datas, produtos e imagens foram apresentados ao público por meio de um folder, produzido a partir de fotos e ilustrações de momentos históricos da Aviação.",
        jobType: "grafico",
        jobClass: ["Diagramação","Vetorização"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/4.webp",
        src_group: [
            "img/trabalhos/4a.webp"
        ]
    },
    {
        id: "5",
        title: "Informativo O Pilar da Aviação:<br>Capa da edição Nº 11",
        description: "Esta capa foi produzida como edição especial para o Centenário da Intendência.<br><br>A composição busca inserir um momento importante da formatura, onde o retrato do Marechal Bitencourt, patrono da Intendência, é guarnecido por militares da BAvT, envolto por uma moldura <i>art noveau</i> com detalhes de envelhecimento.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Aviação, revista digital com edições trimestrais, projeto no qual tive a honra de participar desde a sua criação, planejamento gráfico, diagramação, fotografia e edição de 2018 até 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Composição"],
        tools: ["Adobe InDesign","Adobe Photoshop"],
        src: "img/trabalhos/5.webp",
        src_group:[]
    },
    {
        id: "6",
        title: "Logotipo:<br>4ª Fest Suprir",
        description: "Todos os anos ocorre a comemoração do Dia da Intendência e a BAvT realizou a 4ª Fest Suprir, que recebeu um logotipo para divulgação do evento.<br><br>Entre as cores está o amarelo ouro, cor do símbolo da intendência e o marrom, que simboliza sua antiga importância na história.<br><br>Foi também ilustrado o <i>chopp</i>, tradicional bebida consumida nesse tipo de festividade.",
        jobType: "grafico",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/6.webp",
        src_group:[]
    },
    {
        id: "7",
        title: "Logotipo:<br>Vida Digital",
        description: 'Criar um logotipo para um curso online sobre marketing digital é quase uma metalinguagem.<br><br>O método Vida Digital precisava de um símbolo que fosse reconhecido com um simples olhar e isso foi obtido a partir do gráfico em ascensão, representado pela junção da palavra "vida" e a flecha para cima.<br><br>Para a palavra "digital" foi usado um tom de verde que além de moderno, como é o ambiente digital, tem um bom contraste com o vermelho.',
        jobType: "grafico",
        jobClass: ["Vetorização"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/7.webp",
        src_group: [
            "img/trabalhos/7a.webp",
            "img/trabalhos/7b.webp"
        ]
    },
    {
        id: "8",
        title: "Banner:<br>Histórico da Base de Aviação de Taubaté",
        description: "O Museu da Aviação do Exército contém alas especiais para cada unidade da Aviação e a BAvT conta com dois banners históricos.<br><br>No primeiro foram destacados os momentos marcantes da unidade e no segundo as subunidades, sua atuação e importância.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Vetorização"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/8.webp",
        src_group: [
            "img/trabalhos/8a.webp",
            "img/trabalhos/8b.webp"
        ]
    },
    {
        id: "9",
        title: "Informativo O Pilar da Aviação:<br>Solenidades Militares",
        description: "Para a seção das tradicionais formaturas militares, foi utilizado o método de design <i>flat</i> para o título da seção, com a representação da bandeira nacional por meio de formas geométricas.<br><br>A composição das matérias visou dar destaque para os pontos mais importantes de cada solenidade.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Aviação, revista digital com edições trimestrais, projeto no qual tive a honra de participar desde a sua criação, planejamento gráfico, diagramação, fotografia e edição de 2018 até 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Vetorização"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/9.webp",
        src_group:[]
    },
    {
        id: "10",
        title: "Diagramação, Capa e Ilustração:<br>Livro Voos Incomuns",
        description: 'Inicialmente o projeto seria apenas a diagramação do livro Voos Incomuns, mas o envolvimento maior com o trabalho levou a um planejamento gráfico completo.<br><br>A capa foi produzida a partir de layout inicial do Pedro Amaral, com a criação da ilustração de uma aeronave e a disposição dos elementos.<br><br> O verso do livro contém um <i>ticket check in</i>, onde foi inserido o resumo do livro.<br><br>Também foi produzida uma ilustração que representa a abertura dos ailerons para direção e dos profundores para levantar a aeronave.',
        jobType: "diagramacao",
        jobClass: ["Diagramação","Vetorização","Ilustração"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/10.webp",
        src_group: [
            "img/trabalhos/10a.webp",
            "img/trabalhos/10b.webp",
            "img/trabalhos/10c.webp",
            "img/trabalhos/10d.webp",
            "img/trabalhos/10e.webp",
            "img/trabalhos/10f.webp"
        ]
    },
    {
        id: "11",
        title: "eBook:<br>Cinquenta Receitas com Aves",
        description: "Semelhante ao tradicional livro de receitas, mas em formato digital, este eBook faz parte de uma série culinária (neste caso receitas com aves), que contém uma barra lateral com título e à direita a seção da receita com uma foto principal, ingredientes e preparação.<br><br>Foram criados também ícones para representar o tempo de preparo e cozimento e o seu rendimento.<br><br>Esse é mais um projeto de redesign para eBooks PLR, que são conteúdos com direito de revenda, normalmente em formato de texto .doc que recebem uma melhora estética e correta disposição de informações a fim de valorizar o produto antes de sua comercialização.",
        jobType: "digital",
        jobClass: ["Diagramação","Vetorização","Ilustração"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/11.webp",
        src_group:[]
    },
    {
        id: "12",
        title: "Mapa de Orientação:<br>Você está aqui",
        description: "A área comercial da Aviação do Exército tinha um problema toda vez que os visitantes precisavam localizar seus destinos. O que atrapalhava o trânsito e ocupava o tempo dos militares da portaria. <br><br>Por isso foi criado um mapa na entrada contendo os números das residências e os principais pontos de interesse, de forma bem visual e o mais simples possível.",
        jobType: "grafico",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/12.webp",
        src_group: [
            "img/trabalhos/12a.webp",
            "img/trabalhos/12b.webp"
        ]
    },
    {
        id: "13",
        title: "Ilustração e modernização:<br>Símbolo da RFFSA",
        description: "Para o redesign do símbolo da Rede Ferroviária Federal em Vespasiano Corrêa-RS, o objetivo era modernizar sem perder sua essência.<br><br>Inicialmente ilustrado à mão, o símbolo foi todo desenhado e se manteve assim para facilitar a criação de moldes para os monumentos que serão construídos na cidade.",
        jobType: "grafico",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/13.webp",
        src_group: [
            "img/trabalhos/13a.webp",
            "img/trabalhos/13b.webp"
        ]
    },
    {
        id: "14",
        title: "Informativo O Pilar da Aviação:<br>Divisão de Aeródromo",
        description: "A seção da Divisão de Aeródromo recebeu uma estrutura própria pela peculiaridade de suas atividades.<br><br>O mesmo vermelho da Torre de Controle de Espaço Aéreo é o destaque da página.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Aviação, revista digital com edições trimestrais, projeto no qual tive a honra de participar desde a sua criação, planejamento gráfico, diagramação, fotografia e edição de 2018 até 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Vetorização","Edição e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        src: "img/trabalhos/14.webp",
        src_group:[]
    },
    {
        id: "15",
        title: "Banner:<br>Serviço de Aprovisionamento",
        description: "Para as solenidades militares da BAvT foram criados banners que representam as subunidades.<br><br>Como no exemplo a cima, o banner contém o distintivo do serviço de aprovisionamento.",
        jobType: "grafico",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/15.webp",
        src_group:[]
    },
    {
        id: "16",
        title: "Informativo O Pilar da Aviação:<br>33º Triatlo do Exército",
        description: "O 33º Triathon do Exército foi realizado como a 4ª Etapa da Copa Triathlon Brasil e seção de atividades esportivas destacou o militar da BAvT que participou do evento.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Aviação, revista digital com edições trimestrais, projeto no qual tive a honra de participar desde a sua criação, planejamento gráfico, diagramação, fotografia e edição de 2018 até 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Vetorização"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/16.webp",
        src_group:[]
    },
    {
        id: "17",
        title: "Informativo O Pilar da Aviação:<br>Busca e Salvamento",
        description: "O treinamento de Busca e Salvamento da Divisão de Aeródromo recebeu uma edição especial, destacando os especialistas SAR.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Aviação, revista digital com edições trimestrais, projeto no qual tive a honra de participar desde a sua criação, planejamento gráfico, diagramação, fotografia e edição de 2018 até 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Edição e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Photoshop"],
        src: "img/trabalhos/17.webp",
        src_group:[]
    },
    {
        id: "18",
        title: "Logotipo:<br>Blog Mais Pedagogia",
        description: 'Projeto em conjunto com a professora Yara Chaves para o blog educacional Mais Pedagogia.<br><br>A cor vermelha vibrante visa passar o sentimento de paixão que o assunto "educação" precisa representar.<br><br>O símbolo "mais" significa o quanto a educação precisa estar cada vez mais inserida na vida das pessoas.',
        jobType: "grafico",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/18.webp",
        src_group:[]
    },
    {
        id: "19",
        title: "Logotipo:<br>Aliados - Marketing Digital",
        description: 'Marca criada para o treinamento Aliados - Marketing Digital com cor predominante dourada.<br><br>O símbolo principal representa um gráfico em ascenção e na palavra "aliados" a junção das letras passa a ideia de aliança.',
        jobType: "grafico",
        jobClass: ["Vetorização"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/19.webp",
        src_group: [
            "img/trabalhos/19a.webp",
            "img/trabalhos/19b.webp"
        ]
    },
    {
        id: "20",
        title: "Tabuleiro Magnético:<br>Game Effect Conflicting Causes",
        description: "Effect é um card game voltado para os amantes de estratégia e narrativa.<br><br>Esse projeto foi a criação do tabuleiro utilizado no game, onde os cards e demais itens serão colocados.<br><br>Foram também ilustrados ícones do tabuleiro.",
        jobType: "digital",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/20.webp",
        src_group: [
            "img/trabalhos/20a.webp",
            "img/trabalhos/20b.webp"
        ]
    },
    {
        id: "21",
        title: "Informativo O Pilar da Aviação:<br>Centro de Medicina de Aviação do Exército",
        description: "Para destacar o novo jardim do Centro de Medicina, foi feita uma composição de imagens, de modo a mostrar os melhores pontos.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Aviação, revista digital com edições trimestrais, projeto no qual tive a honra de participar desde a sua criação, planejamento gráfico, diagramação, fotografia e edição de 2018 até 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Vetorização","Edição e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        src: "img/trabalhos/21.webp",
        src_group:[]
    },
    {
        id: "22",
        title: "Capa do eBook:<br>Universo atrás da parede",
        description: "Ilustração para a capa feita a mão, que posteriormente foi vetorizada.<br><br>Para esse projeto o Eduardo permitiu uma grande liberdade criativa e o desenho foi produzido a partir de uma conversa e um pequeno resumo sobre a história.",
        jobType: "digital",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/22.webp",
        src_group:[]
    },
    {
        id: "23",
        title: "Informativo O Pilar da Aviação:<br>Plano de Emergência Aeronáutica em Aeródromo",
        description: "Matéria sobre o Treinamento do PEAA, projeto em que foi feito trabalho de fotografia e tratamento de imagem.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Aviação, revista digital com edições trimestrais, projeto no qual tive a honra de participar desde a sua criação, planejamento gráfico, diagramação, fotografia e edição de 2018 até 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagramação"],
        tools: ["Adobe InDesign"],
        src: "img/trabalhos/23.webp",
        src_group:[]
    },
    {
        id: "24",
        title: "Símbolo Histórico:<br>1º Batalhão Ferroviário",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        jobClass: ["Vetorização","Ilustração"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/24.webp",
        src_group: [
            "img/trabalhos/24a.webp",
            "img/trabalhos/24b.webp",
            "img/trabalhos/24c.webp",
        ]
    },
    {
        id: "25",
        title: "Informativo O Pilar da Aviação:<br>Sábado Aéreo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        jobClass: ["Diagramação","Vetorização", "Edição e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        src: "img/trabalhos/25.webp",
        src_group:[]
    },
    {
        id: "26",
        title: "eBook:<br>Receitas de Sucos Detox",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "digital",
        jobClass: ["Diagramação","Vetorização"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/26.webp",
        src_group:[]
    },
    {
        id: "27",
        title: "Folder:<br>Incorporação do Efetivo Variável",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        jobClass: ["Diagramação","Vetorização","Ilustração"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/27.webp",
        src_group: [
            "img/trabalhos/27a.webp",
            "img/trabalhos/27b.webp"
        ]
    }
]

//Clonando job cards
cards.map(job => { 
        const clone = jobCard[0].cloneNode(true);
        clone.setAttribute("id", job.id);
        clone.setAttribute("jobType", job.jobType);
        clone.querySelector("img").src = job.src;
        jobs[0].appendChild(clone);
});        
    
jobCard[0].remove();

//Função para abrir um card
let openCard = (cardId) => {

    changeBtnTop[0].style.display = "flex";
    changeBtnTop[0].style.justifyContent = "space-between";

    changeBtnBottom[0].style.display = "flex";
    changeBtnBottom[0].style.justifyContent = "space-between";
    
    openedCard = document.getElementById(cardId);

    let cardInfo = document.createElement("div");
    let infoTitle = document.createElement("h2");
    let infoDescription = document.createElement("p");
    let infoJobClass = document.createElement("p");
    let infoTools = document.createElement("p");
    let info = cards.find((card) => card.id == cardId);
    let imgGroup = document.createElement("div");

    //Voltando ao início da página 
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    viewCardById(cardId);

    //Criando a área de informações do projeto
    jobs[0].style.backgroundColor = "#dfdfdf";
    jobs[0].style.borderRadius = "5px";

    cardInfo.appendChild(infoTitle);
    cardInfo.appendChild(infoDescription);
    cardInfo.appendChild(infoJobClass);
    cardInfo.appendChild(infoTools);

    cardInfo.setAttribute("class","card-info");
    infoTitle.setAttribute("class","info-title");
    infoDescription.setAttribute("class","info-description");
    infoJobClass.setAttribute("class","info-job-class");
    infoTools.setAttribute("class","info-tools");

    infoTitle.innerHTML = info.title;
    infoDescription.innerHTML = info.description;
    infoJobClass.innerHTML = info.jobClass.reduce(function (prev,classItem) {
        return prev + '<br>' + classItem;
    }, "<b>Tipos de Trabalho:</b>");
    infoTools.innerHTML = info.tools.reduce(function (prev,toolItem) {
        return prev + '<br>' + toolItem;
    }, "<b>Ferramentas Utilizadas:</b>");

    //Criando grupo de outras imagens do projeto  
    for (const src_img of info.src_group) {
        let img = document.createElement("img");

        img.src = src_img;
        img.style.width = "100%";
        img.style.marginBottom = "20px";
        imgGroup.appendChild(img);
    }

    openedCard.appendChild(cardInfo);
    openedCard.appendChild(imgGroup);

    openedCard.style.display = "flex";
    
    openedCard.setAttribute("onclick","");
    openedCard.setAttribute("class","job-opened-card");

};

//Mostra o card aberto.
let viewCardById = (cardId) => {

    //Seta o card aberto
    currentCardId = cardId;

    for (const card of jobCard) {
        
        if(card.id != cardId){
            card.style.display = "none";
        }

    }

};

//Mostra todos os cards da mesma categoria.
let viewCardByjobType = (jobType) => {
    
    currentJobType = jobType;

    //Esconde página Sobre se estiver aberta
    sobrePage[0].style.display = "none";
    changeBtnTop[0].style.display = "none";
    changeBtnBottom[0].style.display = "none";
    jobs[0].style.display = "flex";

    //Esconde card aberto anteriormente se houver.
    if(openedCard){

        openedCard.removeChild(openedCard.children[1]);
        openedCard.removeChild(openedCard.children[1]);

        openedCard.setAttribute("onclick","openCard(this.id)");
        openedCard.setAttribute("class","job-card");
        openedCard = undefined;
    }

    jobs[0].style.backgroundColor = "white";
    jobs[0].style.borderRadius = "0";

    for (const card of jobCard) {
        
        card.style.display = "flex";

        if(card.getAttribute("jobtype") != jobType){
            card.style.display = "none";
        }

    }
    
};

//Navegando pelos trabalhos com botões de navegação
let changeJob = (direction) => {

    let id = openedCard.id;

    if(direction == "left"){
        if(id >= 2){
            id--;
        }
        
        openedCard.style.display = "none";
        openedCard.children[1].remove();
        openedCard.children[1].remove();
        openedCard.setAttribute("onclick","openCard(this.id)");
        openedCard.setAttribute("class","job-card");        
        openCard(id);
    }
    else if(direction == "right"){
        if(id < cards.length){
            id++;
        }

        openedCard.style.display = "none";
        openedCard.children[1].remove();
        openedCard.children[1].remove();
        openedCard.setAttribute("onclick","openCard(this.id)");
        openedCard.setAttribute("class","job-card");
        openCard(id);
    }

};

//Página Sobre
let viewAbout = () => {

    if(openedCard){
        openedCard.setAttribute("onclick","openCard(this.id)");
        openedCard.setAttribute("class","job-card");
    }
    

    changeBtnTop[0].style.display = "none";
    changeBtnBottom[0].style.display = "none";

    jobs[0].style.display = "none";
    sobrePage[0].style.display = "flex";

    sobrePage[0].style.marginTop = "50px";
    sobrePage[0].style.marginLeft = "10%";
    sobrePage[0].style.marginRight = "10%";

};

//Informações das Skills
const infoSkills = [{
    name: "Photoshop",
    level: 4
    },
    {
        name: "InDesign",
        level: 4
    },
    {
        name: "Illustrator",
        level: 3
    },
    {
        name: "Premiere Pro",
        level: 2
    },
    {
        name: "Adobe XD",
        level: 1
    },
    {
        name: "HTML 5",
        level: 3
    },
    {
        name: "CSS 3",
        level: 3
    },
    {
        name: "Javascript",
        level: 3
    },
    {
        name: "React",
        level: 1
    },
    {
        name: "Database/ SQL",
        level: 2
    }
];

//Clonando as skills
infoSkills.map(skill => { 

    let skillItem = document.getElementsByClassName("skill-item");

    const clone = skillItem[0].cloneNode(true);
    
    clone.children[0].innerHTML = skill.name;

    for(let i = 0; i < skill.level; i++) {
        clone.children[1].children[i].style.backgroundColor = "#1f2041";    
    }

    skills[0].appendChild(clone);
});

//Removendo o molde de skill
skills[0].children[1].remove();

//Criando área de depoimentos de clientes
let msg = [
    {
        mensagem: '"Eu gostaria de ter vários outros projetos para poder contar com a genialidade do Guilherme. Não à toa consegui aproveita-lo para a capa, diagramação e ilustração do meu livro, um verdadeiro três em um."',
        cliente: "Pedro Amaral",
        projeto: "Livro Voos Incomuns"
    },
    {
        mensagem: '"Profissional maravilhoso. Atencioso, inteligente e habilidoso."',
        cliente: "Yasmin V.",
        projeto: "Playmat de jogo de cartas"
    },
    {
        mensagem: '"Profissinal muito competente e cumpriu com todo o combinado. espero voltar a fazer projetos com ele! Já foi o segundo trabalho que pedi e mais uma vez gostei muito."',
        cliente: "Cesar Filippini",
        projeto: "Edição de fotos de Aeronave"
    },
    {
        mensagem: '"Profissional muito dedicado. As ilustrações são excelentes. Ele fez a capa do meu eBook e ficou incrível, super recomendo e espero poder trabalhar novamente com o Guilherme."',
        cliente: "Eduardo Cezar",
        projeto: 'Capa do eBook "Universo atrás da parede"'
    }
];

msg.map(msg => { 

    let msgCard = document.createElement("div");
    let msgText = document.createElement("p");
    let msgClient = document.createElement("h4");
    let msgProject = document.createElement("h5");

    msgCard.setAttribute("class","msg-card");
    msgText.setAttribute("class","msg-text");
    msgClient.setAttribute("class","msg-client");
    msgProject.setAttribute("class","msg-project");

    msgText.innerHTML = msg.mensagem;
    msgClient.innerHTML = "Cliente: " + msg.cliente;
    msgProject.innerHTML = "Projeto: " + msg.projeto;
    
    msgCard.appendChild(msgText);
    msgCard.appendChild(msgClient);
    msgCard.appendChild(msgProject);

    msgGroup[0].appendChild(msgCard);    
});