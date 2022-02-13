
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

/*Touch IO
hamburguer[0].addEventListener("touchstart", (event) => {

    mobileMenu();

}, false);*/

//Criação dos Job Cards 
const cards = [
    {
        id: "1",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto1.jpg"
    },
    {
        id: "2",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto2.jpg"
    },
    {
        id: "3",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto3.jpg"
    },
    {
        id: "4",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto4.jpg"
    },
    {
        id: "5",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto5.jpg"
    },
    {
        id: "6",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto6.jpg"
    },
    {
        id: "7",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto7.jpg"
    },
    {
        id: "8",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "img/foto8.jpg"
    },
    {
        id: "9",
        name: "foto1",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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