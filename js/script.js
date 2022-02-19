
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
var openedCard;
var currentCardId = "";
var openCardState = false;

//Menu mobile
const mobileMenu = () => {
    
    logo[0].style.display = "none";

    hamburguer[0].children[0].src = "img/exit.svg";
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
    
    hamburguer[0].children[0].src = "img/menu.svg";
    hamburguer[0].style.marginTop = "0";
    hamburguer[0].style.marginBottom = "0";

    logo[0].style.display = "flex";

    hamburguer[0].setAttribute("onclick","mobileMenu()");
}

//Informações dos Job Cards 
const cards = [
    {
        id: "1",
        title: "foto1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "grafico",
        src: "img/foto1.jpg"
    },
    {
        id: "2",
        title: "foto2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/foto2.jpg"
    },
    {
        id: "3",
        title: "foto3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "front-end",
        src: "img/foto3.jpg"
    },
    {
        id: "4",
        title: "foto4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/foto4.jpg"
    },
    {
        id: "5",
        title: "foto5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/foto5.jpg"
    },
    {
        id: "6",
        title: "foto6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/foto6.jpg"
    },
    {
        id: "7",
        title: "foto7",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/foto7.jpg"
    },
    {
        id: "8",
        title: "foto8",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/foto8.jpg"
    },
    {
        id: "9",
        title: "foto9",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        jobType: "diagramacao",
        src: "img/foto9.jpg"
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

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    viewCardById(cardId);

    jobs[0].style.backgroundColor = "#dfdfdf";
    jobs[0].style.borderRadius = "5px";

    cardInfo.appendChild(infoTitle);
    cardInfo.appendChild(infoDescription);

    cardInfo.setAttribute("class","card-info");
    infoTitle.setAttribute("class","info-title");
    infoDescription.setAttribute("class","info-description");

    infoTitle.innerHTML = info.title;
    infoDescription.innerHTML = info.description;

    openedCard.appendChild(cardInfo);
    
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
    
    //Esconde página Sobre se estiver aberta
    sobrePage[0].style.display = "none";
    jobs[0].style.display = "flex";

    //Esconde card aberto anteriormente se houver.
    if(openedCard){

        openedCard.removeChild(openedCard.children[1]);
        //openedCard.style.display = "none";

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
    },
    {
        name: "Excel",
        level: 3
    },
    {
        name: "Word",
        level: 2
    },
    {
        name: "Powerpoint",
        level: 2
    },
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