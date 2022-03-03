
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
var sobrePage = document.getElementsByClassName("sobre-page");
var skills = document.getElementsByClassName("skills");
var msgGroup = document.getElementsByClassName("msg-group");
var openedCard;
var currentScrollBar = 0;
var currentJobType = "all";
var currentCardId = "";
var openCardState = false;

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

    home[0].style.height = "50px";
    home[0].style.flexDirection = "row";
    home[0].style.justifyContent = "space-between";
    home[0].style.alignItens = "center";
    
    hamburguer[0].children[0].src = "/img/icones/menu.svg";
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
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/1.jpg",
        src_group:[]
    },
    {
        id: "2",
        title: "eBook:<br>Exercícios Semanais",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "digital",
        src: "img/trabalhos/2.jpg",
        src_group: [
            "img/trabalhos/2a.jpg",
            "img/trabalhos/2b.jpg"
        ]
    },
    {
        id: "3",
        title: "Moeda Comemorativa:<br>32 Anos da Base de Aviação de Taubaté",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/3.jpg",
        src_group: [
            "img/trabalhos/3a.png",
            "img/trabalhos/3b.png"
        ]
    },
    {
        id: "4",
        title: "Folder:<br>Centenário da Aviação Militar",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/4.jpg",
        src_group: [
            "img/trabalhos/4a.jpg"
        ]
    },
    {
        id: "5",
        title: "Informativo O Pilar da Aviação:<br>Capa da edição Nº 11",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/5.jpg",
        src_group:[]
    },
    {
        id: "6",
        title: "Logotipo:<br>4ª Fest Suprir",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/6.jpg",
        src_group:[]
    },
    {
        id: "7",
        title: "Logotipo:<br>Vida Digital",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/7.jpg",
        src_group: [
            "img/trabalhos/7a.jpg",
            "img/trabalhos/7b.png"
        ]
    },
    {
        id: "8",
        title: "Banner:<br>Histórico da Base de Aviação de Taubaté",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/8.jpg",
        src_group: [
            "img/trabalhos/8a.png",
            "img/trabalhos/8b.png"
        ]
    },
    {
        id: "9",
        title: "Informativo O Pilar da Aviação:<br>Solenidades Militares",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/9.jpg",
        src_group:[]
    },
    {
        id: "10",
        title: "Diagramação, Capa e Ilustração:<br>Livro Voos Incomuns",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/10.jpg",
        src_group: [
            "img/trabalhos/10a.jpg",
            "img/trabalhos/10b.jpg",
            "img/trabalhos/10c.jpg",
            "img/trabalhos/10d.jpg",
            "img/trabalhos/10e.jpg",
            "img/trabalhos/10f.jpg"
        ]
    },
    {
        id: "11",
        title: "eBook:<br>Cinquenta Receitas com Aves",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "digital",
        src: "img/trabalhos/11.jpg",
        src_group:[]
    },
    {
        id: "12",
        title: "Mapa de Orientação:<br>Você está aqui",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/12.jpg",
        src_group: [
            "img/trabalhos/12a.jpg",
            "img/trabalhos/12b.jpg"
        ]
    },
    {
        id: "13",
        title: "Ilustração e modernização:<br>Símbolo da Rede Ferroviária Federal em Vespasiano Corrêa-RS",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/13.jpg",
        src_group: [
            "img/trabalhos/13a.png",
            "img/trabalhos/13b.jpg"
        ]
    },
    {
        id: "14",
        title: "Informativo O Pilar da Aviação:<br>Divisão de Aeródromo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/14.jpg",
        src_group:[]
    },
    {
        id: "15",
        title: "Banner:<br>Serviço de Aprovisionamento",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/15.jpg",
        src_group:[]
    },
    {
        id: "16",
        title: "Informativo O Pilar da Aviação:<br>33º Triatlo do Exército",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/16.jpg",
        src_group:[]
    },
    {
        id: "17",
        title: "Informativo O Pilar da Aviação:<br>Busca e Salvamento",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/17.jpg",
        src_group:[]
    },
    {
        id: "18",
        title: "Logotipo:<br>Blog Mais Pedagogia",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/18.jpg",
        src_group:[]
    },
    {
        id: "19",
        title: "Logotipo:<br>Aliados - Marketing Digital",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/19.jpg",
        src_group: [
            "img/trabalhos/19a.jpg",
            "img/trabalhos/19b.png"
        ]
    },
    {
        id: "20",
        title: "Tabuleiro Magnético:<br>Game Effect Conflicting Causes",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "digital",
        src: "img/trabalhos/20.jpg",
        src_group: [
            "img/trabalhos/20a.png",
            "img/trabalhos/20b.png"
        ]
    },
    {
        id: "21",
        title: "Informativo O Pilar da Aviação:<br>Centro de Medicina de Aviação do Exército",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/21.jpg",
        src_group:[]
    },
    {
        id: "22",
        title: "Capa do eBook:<br>Universo atrás da parede",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "digital",
        src: "img/trabalhos/22.jpg",
        src_group:[]
    },
    {
        id: "23",
        title: "Informativo O Pilar da Aviação:<br>Plano de Emergência Aeronáutica em Aeródromo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/23.jpg",
        src_group:[]
    },
    {
        id: "24",
        title: "Símbolo:<br>Histórico do 1º Batalhão Ferroviário",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/24.jpg",
        src_group: [
            "img/trabalhos/24a.jpg",
            "img/trabalhos/24b.jpg",
            "img/trabalhos/24c.jpg",
        ]
    },
    {
        id: "25",
        title: "Informativo O Pilar da Aviação:<br>Sábado Aéreo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/trabalhos/25.jpg",
        src_group:[]
    },
    {
        id: "26",
        title: "eBook:<br>Receitas de Sucos Detox",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "digital",
        src: "img/trabalhos/26.jpg",
        src_group:[]
    },
    {
        id: "27",
        title: "Folder:<br>Incorporação do Efetivo Variável",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/trabalhos/27.jpg",
        src_group: [
            "img/trabalhos/27a.jpg",
            "img/trabalhos/27b.jpg"
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

    openedCard = document.getElementById(cardId);    

    let cardInfo = document.createElement("div");
    let infoTitle = document.createElement("h2");
    let infoDescription = document.createElement("p");
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

    cardInfo.setAttribute("class","card-info");
    infoTitle.setAttribute("class","info-title");
    infoDescription.setAttribute("class","info-description");

    infoTitle.innerHTML = info.title;
    infoDescription.innerHTML = info.description;

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

//Página Sobre
let viewAbout = () => {

    jobs[0].style.display = "none";
    sobrePage[0].style.display = "flex";

    sobrePage[0].style.marginTop = "50px";
    sobrePage[0].style.marginBottom = "50px";
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



