
var home = document.getElementsByClassName("home");
var logo = document.getElementsByClassName("logo");
var hamburguer = document.getElementsByClassName("hamburguer");
var menu = document.getElementsByClassName("menu");
var menuItens = document.getElementsByClassName("item");
var sobre = document.getElementsByClassName("sobre");
var grafico = document.getElementsByClassName("grafico");
var diagramacao = document.getElementsByClassName("diagramacao");
var frontEnd = document.getElementsByClassName("front-end");

const mobileMenu = () => {
    
    logo[0].style.display = "none";

    hamburguer[0].children[0].src = "img/teste.svg";
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

hamburguer[0].addEventListener("touchstart", (event) => {

    mobileMenu();

}, false);
