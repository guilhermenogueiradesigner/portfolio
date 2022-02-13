
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

//Menu mobile
const mobileMenu = () => {
    
    logo[0].style.display = "none";

    hamburguer[0].children[0].src = "img/exit.svg";
    hamburguer[0].style.marginTop = "10px";
    hamburguer[0].style.marginBottom = "20px";
    
    menu[0].style.display = "flex";
    menu[0].style.flexDirection = "column";
    
    home[0].style.flexDirection = "column";
    home[0].style.justifyContent = "flex-start";
    home[0].style.height = "100%";

    menuItens[0].style.margin = "0 auto";
    menuItens[0].style.marginBottom = "15px";

    menuItens[1].style.margin = "0 auto";
    menuItens[1].style.marginBottom = "15px";

    menuItens[2].style.margin = "0 auto";
    menuItens[2].style.marginBottom = "15px";

    menuItens[3].style.margin = "0 auto";
    menuItens[3].style.marginBottom = "15px";

    sobre[0].style.textAlign = "center";
    sobre[0].style.margin = "0 auto";
    
    grafico[0].style.textAlign = "center";
    grafico[0].style.margin = "0 auto";
    
    diagramacao[0].style.textAlign = "center";
    diagramacao[0].style.margin = "0 auto";

    frontEnd[0].style.textAlign = "center";
    frontEnd[0].style.margin = "0 auto"; 

}

//Criação dos Job Cards 
const cards = [
    {
        id: "1",
        title: "foto1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto1.jpg"
    },
    {
        id: "2",
        title: "foto2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto2.jpg"
    },
    {
        id: "3",
        title: "foto3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto3.jpg"
    },
    {
        id: "4",
        title: "foto4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto4.jpg"
    },
    {
        id: "5",
        title: "foto5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto5.jpg"
    },
    {
        id: "6",
        title: "foto6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto6.jpg"
    },
    {
        id: "7",
        title: "foto7",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto7.jpg"
    },
    {
        id: "8",
        title: "foto8",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto8.jpg"
    },
    {
        id: "9",
        title: "foto9",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto9.jpg"
    }
]

//Clonando job cards
cards.map(job => { 

    const clone = jobCard[0].cloneNode(true);
    clone.setAttribute("id", job.id);
    clone.querySelector("img").src = job.src;
    jobs[0].appendChild(clone);
});

jobCard[0].remove();

//Função para abrir um card
let openCard = (cardId) => {
    
    let openedCard = document.getElementById(cardId);    
    let cardInfo = document.createElement("div");
    let infoTitle = document.createElement("h2");
    let infoDescription = document.createElement("p");
    let info = cards.find((card) => card.id == cardId);

    viewCardById(cardId);

    jobs[0].style.backgroundColor = "#868686";
    jobs[0].style.borderRadius = "5px";

    cardInfo.appendChild(infoTitle);
    cardInfo.appendChild(infoDescription);

    cardInfo.setAttribute("class","card-info");
    infoTitle.setAttribute("class","info-title");
    infoDescription.setAttribute("class","info-description");

    infoTitle.innerHTML = info.title;
    infoDescription.innerHTML = info.description;

    openedCard.appendChild(cardInfo);

    console.log(window.innerWidth);

    if(window.innerWidth > 780){
        openedCard.style.flexDirection = "row";
    }
    else{
        openedCard.style.flexDirection = "column";
    } 

};

let viewCardById = (cardId) => {

    for (const card of jobCard) {
        
        if(card.id != cardId){
            card.style.display = "none";
        }

    }

};

