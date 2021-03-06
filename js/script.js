var home = document.getElementsByClassName("home");
var logo = document.getElementsByClassName("logo");
var hamburguer = document.getElementsByClassName("hamburguer");
var menu = document.getElementsByClassName("menu");
var menuItens = document.getElementsByClassName("item");
var sobre = document.getElementsByClassName("sobre");
var digital = document.getElementsByClassName("digital");
var grafico = document.getElementsByClassName("grafico");
var diagramacao = document.getElementsByClassName("diagramacao");
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

    digital[0].style.textAlign = "center";
    digital[0].style.margin = "0 auto"; 
    digital[0].style.marginBottom = "10px";

    grafico[0].style.textAlign = "center";
    grafico[0].style.margin = "0 auto";
    grafico[0].style.marginBottom = "10px";
    
    diagramacao[0].style.textAlign = "center";
    diagramacao[0].style.margin = "0 auto";

    

    hamburguer[0].setAttribute("onclick","closedMenu()");

}

//Retorna ?? p??gina inicial
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

//Informa????es dos Job Cards 
const cards = [
    {
        id: "1",
        title: "Informativo O Pilar da Avia????o:<br>Hist??rias da Avia????o do Ex??rcito",
        description: "Para a capa da mat??ria sobre o Sargento Vasques foi usada sua foto em frente ?? aeronave, com recorte, luz e sombra para destacar a partir da profundidade os elementos da composi????o.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Edi????o e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Photoshop"],
        src: "img/trabalhos/1.webp",
        src_group:[]
    },
    {
        id: "2",
        title: "eBook:<br>Exerc??cios Semanais",
        description: "Para esse projeto, foi feita a escolha de cores vibrantes simbolizando energia em contraste com o preto e o uso de formas representando movimento e velocidade.<br><br>Al??m da foto principal, tamb??m foi criada uma ilustra????o para representar a posi????o.<br><br>Esse ?? mais um projeto de redesign para eBooks PLR, que s??o conte??dos com direito de revenda, normalmente em formato de texto .doc que recebem uma melhora est??tica e correta disposi????o de informa????es a fim de valorizar o produto antes de sua comercializa????o.",
        jobType: "digital",
        jobClass: ["Diagrama????o","Vetoriza????o", "Edi????o e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        src: "img/trabalhos/2.webp",
        src_group: [
            "img/trabalhos/2a.webp",
            "img/trabalhos/2b.webp"
        ]
    },
    {
        id: "3",
        title: "Moeda Comemorativa:<br>32 Anos da Base de Avia????o de Taubat??",
        description: "Para comemorar os 32 anos da BAvT, foram lan??ados diversos produtos.<br><br>Dentre eles, a moeda confeccionada pela TOCOIN a partir de um molde vetorizado, contendo na frente o atual s??mbolo da Base e no verso uma mistura do antigo s??mbolo com a imagem do Vale do Para??ba, ainda com um arco das ins??gnias das Sub-unidades.",
        jobType: "grafico",
        jobClass: ["Vetoriza????o","Ilustra????o"],
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
        title: "Folder:<br>Centen??rio da Avia????o Militar",
        description: "Os eventos do Centen??rio da Avia????o Militar, suas datas, produtos e imagens foram apresentados ao p??blico por meio de um folder, produzido a partir de fotos e ilustra????es de momentos hist??ricos da Avia????o.",
        jobType: "grafico",
        jobClass: ["Diagrama????o","Vetoriza????o"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/4.webp",
        src_group: [
            "img/trabalhos/4a.webp"
        ]
    },
    {
        id: "5",
        title: "Informativo O Pilar da Avia????o:<br>Capa da edi????o N?? 11",
        description: "Esta capa foi produzida como edi????o especial para o Centen??rio da Intend??ncia.<br><br>A composi????o busca inserir um momento importante da formatura, onde o retrato do Marechal Bitencourt, patrono da Intend??ncia, ?? guarnecido por militares da BAvT, envolto por uma moldura <i>art noveau</i> com detalhes de envelhecimento.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Composi????o"],
        tools: ["Adobe InDesign","Adobe Photoshop"],
        src: "img/trabalhos/5.webp",
        src_group:[]
    },
    {
        id: "6",
        title: "Logotipo:<br>4?? Fest Suprir",
        description: "Todos os anos ocorre a comemora????o do Dia da Intend??ncia e a BAvT realizou a 4?? Fest Suprir, que recebeu um logotipo para divulga????o do evento.<br><br>Entre as cores est?? o amarelo ouro, cor do s??mbolo da intend??ncia e o marrom, que simboliza sua antiga import??ncia na hist??ria.<br><br>Foi tamb??m ilustrado o <i>chopp</i>, tradicional bebida consumida nesse tipo de festividade.",
        jobType: "grafico",
        jobClass: ["Vetoriza????o","Ilustra????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/6.webp",
        src_group:[]
    },
    {
        id: "7",
        title: "Logotipo:<br>Vida Digital",
        description: 'Criar um logotipo para um curso online sobre marketing digital ?? quase uma metalinguagem.<br><br>O m??todo Vida Digital precisava de um s??mbolo que fosse reconhecido com um simples olhar e isso foi obtido a partir do gr??fico em ascens??o, representado pela jun????o da palavra "vida" e a flecha para cima.<br><br>Para a palavra "digital" foi usado um tom de verde que al??m de moderno, como ?? o ambiente digital, tem um bom contraste com o vermelho.',
        jobType: "grafico",
        jobClass: ["Vetoriza????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/7.webp",
        src_group: [
            "img/trabalhos/7a.webp",
            "img/trabalhos/7b.webp"
        ]
    },
    {
        id: "8",
        title: "Banner:<br>Hist??rico da Base de Avia????o de Taubat??",
        description: "O Museu da Avia????o do Ex??rcito cont??m alas especiais para cada unidade da Avia????o e a BAvT conta com dois banners hist??ricos.<br><br>No primeiro foram destacados os momentos marcantes da unidade e no segundo as subunidades, sua atua????o e import??ncia.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Vetoriza????o"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/8.webp",
        src_group: [
            "img/trabalhos/8a.webp",
            "img/trabalhos/8b.webp"
        ]
    },
    {
        id: "9",
        title: "Informativo O Pilar da Avia????o:<br>Solenidades Militares",
        description: "Para a se????o das tradicionais formaturas militares, foi utilizado o m??todo de design <i>flat</i> para o t??tulo da se????o, com a representa????o da bandeira nacional por meio de formas geom??tricas.<br><br>A composi????o das mat??rias visou dar destaque para os pontos mais importantes de cada solenidade.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Vetoriza????o"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/9.webp",
        src_group:[]
    },
    {
        id: "10",
        title: "Diagrama????o, Capa e Ilustra????o:<br>Livro Voos Incomuns",
        description: 'Inicialmente o projeto seria apenas a diagrama????o do livro Voos Incomuns, mas o envolvimento maior com o trabalho levou a um planejamento gr??fico completo.<br><br>A capa foi produzida a partir de layout inicial do Pedro Amaral, com a cria????o da ilustra????o de uma aeronave e a disposi????o dos elementos.<br><br> O verso do livro cont??m um <i>ticket check in</i>, onde foi inserido o resumo do livro.<br><br>Tamb??m foi produzida uma ilustra????o que representa a abertura dos ailerons para dire????o e dos profundores para levantar a aeronave.',
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Vetoriza????o","Ilustra????o"],
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
        description: "Semelhante ao tradicional livro de receitas, mas em formato digital, este eBook faz parte de uma s??rie culin??ria (neste caso receitas com aves), que cont??m uma barra lateral com t??tulo e ?? direita a se????o da receita com uma foto principal, ingredientes e prepara????o.<br><br>Foram criados tamb??m ??cones para representar o tempo de preparo e cozimento e o seu rendimento.<br><br>Esse ?? mais um projeto de redesign para eBooks PLR, que s??o conte??dos com direito de revenda, normalmente em formato de texto .doc que recebem uma melhora est??tica e correta disposi????o de informa????es a fim de valorizar o produto antes de sua comercializa????o.",
        jobType: "digital",
        jobClass: ["Diagrama????o","Vetoriza????o","Ilustra????o"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/11.webp",
        src_group:[]
    },
    {
        id: "12",
        title: "Mapa de Orienta????o:<br>Voc?? est?? aqui",
        description: "A ??rea comercial da Avia????o do Ex??rcito tinha um problema toda vez que os visitantes precisavam localizar seus destinos. O que atrapalhava o tr??nsito e ocupava o tempo dos militares da portaria. <br><br>Por isso foi criado um mapa na entrada contendo os n??meros das resid??ncias e os principais pontos de interesse, de forma bem visual e o mais simples poss??vel.",
        jobType: "grafico",
        jobClass: ["Vetoriza????o","Ilustra????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/12.webp",
        src_group: [
            "img/trabalhos/12a.webp",
            "img/trabalhos/12b.webp"
        ]
    },
    {
        id: "13",
        title: "Ilustra????o e moderniza????o:<br>S??mbolo da RFFSA",
        description: "Para o redesign do s??mbolo da Rede Ferrovi??ria Federal em Vespasiano Corr??a-RS, o objetivo era modernizar sem perder sua ess??ncia.<br><br>Inicialmente ilustrado ?? m??o, o s??mbolo foi todo desenhado e se manteve assim para facilitar a cria????o de moldes para os monumentos que ser??o constru??dos na cidade.",
        jobType: "grafico",
        jobClass: ["Vetoriza????o","Ilustra????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/13.webp",
        src_group: [
            "img/trabalhos/13a.webp",
            "img/trabalhos/13b.webp"
        ]
    },
    {
        id: "14",
        title: "Informativo O Pilar da Avia????o:<br>Divis??o de Aer??dromo",
        description: "A se????o da Divis??o de Aer??dromo recebeu uma estrutura pr??pria pela peculiaridade de suas atividades.<br><br>O mesmo vermelho da Torre de Controle de Espa??o A??reo ?? o destaque da p??gina.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Vetoriza????o","Edi????o e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        src: "img/trabalhos/14.webp",
        src_group:[]
    },
    {
        id: "15",
        title: "Banner:<br>Servi??o de Aprovisionamento",
        description: "Para as solenidades militares da BAvT foram criados banners que representam as subunidades.<br><br>Como no exemplo a cima, o banner cont??m o distintivo do servi??o de aprovisionamento.",
        jobType: "grafico",
        jobClass: ["Vetoriza????o","Ilustra????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/15.webp",
        src_group:[]
    },
    {
        id: "16",
        title: "Informativo O Pilar da Avia????o:<br>33?? Triatlo do Ex??rcito",
        description: "O 33?? Triathon do Ex??rcito foi realizado como a 4?? Etapa da Copa Triathlon Brasil e se????o de atividades esportivas destacou o militar da BAvT que participou do evento.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Vetoriza????o"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/16.webp",
        src_group:[]
    },
    {
        id: "17",
        title: "Informativo O Pilar da Avia????o:<br>Busca e Salvamento",
        description: "O treinamento de Busca e Salvamento da Divis??o de Aer??dromo recebeu uma edi????o especial, destacando os especialistas SAR.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Edi????o e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Photoshop"],
        src: "img/trabalhos/17.webp",
        src_group:[]
    },
    {
        id: "18",
        title: "Logotipo:<br>Blog Mais Pedagogia",
        description: 'Projeto em conjunto com a professora Yara Chaves para o blog educacional Mais Pedagogia.<br><br>A cor vermelha vibrante visa passar o sentimento de paix??o que o assunto "educa????o" precisa representar.<br><br>O s??mbolo "mais" significa o quanto a educa????o precisa estar cada vez mais inserida na vida das pessoas.',
        jobType: "grafico",
        jobClass: ["Vetoriza????o","Ilustra????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/18.webp",
        src_group:[]
    },
    {
        id: "19",
        title: "Logotipo:<br>Aliados - Marketing Digital",
        description: 'Marca criada para o treinamento Aliados - Marketing Digital com cor predominante dourada.<br><br>O s??mbolo principal representa um gr??fico em ascen????o e na palavra "aliados" a jun????o das letras passa a ideia de alian??a.',
        jobType: "grafico",
        jobClass: ["Vetoriza????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/19.webp",
        src_group: [
            "img/trabalhos/19a.webp",
            "img/trabalhos/19b.webp"
        ]
    },
    {
        id: "20",
        title: "Tabuleiro Magn??tico:<br>Game Effect Conflicting Causes",
        description: "Effect ?? um card game voltado para os amantes de estrat??gia e narrativa.<br><br>Esse projeto foi a cria????o do tabuleiro utilizado no game, onde os cards e demais itens ser??o colocados.<br><br>Foram tamb??m ilustrados ??cones do tabuleiro.",
        jobType: "digital",
        jobClass: ["Vetoriza????o","Ilustra????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/20.webp",
        src_group: [
            "img/trabalhos/20a.webp",
            "img/trabalhos/20b.webp"
        ]
    },
    {
        id: "21",
        title: "Informativo O Pilar da Avia????o:<br>Centro de Medicina de Avia????o do Ex??rcito",
        description: "Para destacar o novo jardim do Centro de Medicina, foi feita uma composi????o de imagens, de modo a mostrar os melhores pontos.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Vetoriza????o","Edi????o e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        src: "img/trabalhos/21.webp",
        src_group:[]
    },
    {
        id: "22",
        title: "Capa do eBook:<br>Universo atr??s da parede",
        description: "Ilustra????o para a capa feita a m??o, que posteriormente foi vetorizada.<br><br>Para esse projeto o Eduardo permitiu uma grande liberdade criativa e o desenho foi produzido a partir de uma conversa e um pequeno resumo sobre a hist??ria.",
        jobType: "digital",
        jobClass: ["Vetoriza????o","Ilustra????o"],
        tools: ["Adobe Illustrator"],
        src: "img/trabalhos/22.webp",
        src_group:[]
    },
    {
        id: "23",
        title: "Informativo O Pilar da Avia????o:<br>Plano de Emerg??ncia Aeron??utica em Aer??dromo",
        description: "Mat??ria sobre o Treinamento do PEAA, projeto em que foi feito trabalho de fotografia e tratamento de imagem.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o"],
        tools: ["Adobe InDesign"],
        src: "img/trabalhos/23.webp",
        src_group:[]
    },
    {
        id: "24",
        title: "S??mbolo Hist??rico:<br>1?? Batalh??o Ferrovi??rio",
        description: "Como forma de preservar o patrim??nio hist??rico da cidade de Vespasiano Corr??a - RS, o s??mbolo do 1?? Batalh??o Ferrovi??rio recebeu um projeto de cria????o do molde para constru????o e revitaliza????o de monumentos em sua homenagem.<br><br>Al??m da vetoriza????o do s??mbolo, houve um cuidado maior para manter as propor????es reais e assim criar uma padroniza????o em desenho t??cnico com cotagem.",
        jobType: "grafico",
        jobClass: ["Vetoriza????o","Ilustra????o"],
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
        title: "Informativo O Pilar da Avia????o:<br>S??bado A??reo",
        description: "Para o retorno do tradicional S??bado A??reo, dia em que a popula????o pode visitar a Avia????o do Ex??rcito, foi criada uma se????o especial destacando as atividades e principalmente a apresenta????o da Esquadrilha da Fuma??a.<br><br>Esse trabalho faz parte do Informativo: O Pilar da Avia????o, revista digital com edi????es trimestrais, projeto no qual tive a honra de participar desde a sua cria????o, planejamento gr??fico, diagrama????o, fotografia e edi????o de 2018 at?? 2022.",
        jobType: "diagramacao",
        jobClass: ["Diagrama????o","Vetoriza????o", "Edi????o e Tratamento de Imagem"],
        tools: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        src: "img/trabalhos/25.webp",
        src_group:[]
    },
    {
        id: "26",
        title: "eBook:<br>Receitas de Sucos Detox",
        description: "Semelhante ao eBook de receitas com aves, as informa????es foram estruturadas para facilitar o entendimento do cliente quanto aos ingredientes e o modo de preparo dos sucos, sempre com uma imagem ilustrativa.<br><br>Esse ?? mais um projeto de redesign para eBooks PLR, que s??o conte??dos com direito de revenda, normalmente em formato de texto .doc que recebem uma melhora est??tica e correta disposi????o de informa????es a fim de valorizar o produto antes de sua comercializa????o.",
        jobType: "digital",
        jobClass: ["Diagrama????o","Vetoriza????o"],
        tools: ["Adobe InDesign","Adobe Illustrator"],
        src: "img/trabalhos/26.webp",
        src_group:[]
    },
    {
        id: "27",
        title: "Folder:<br>Incorpora????o do Efetivo Vari??vel",
        description: "Todos os anos, a incorpora????o dos novos recrutas geravam d??vidas comuns a eles e seus familiares que precisavam ser bem orientados.<br><br>Para facilitar esse processo, foi criado um folder com informa????es importantes e ilustra????es.",
        jobType: "grafico",
        jobClass: ["Diagrama????o","Vetoriza????o","Ilustra????o"],
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

//Fun????o para abrir um card
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

    //Voltando ao in??cio da p??gina 
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    viewCardById(cardId);

    //Criando a ??rea de informa????es do projeto
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

    //Esconde p??gina Sobre se estiver aberta
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

//Navegando pelos trabalhos com bot??es de navega????o
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

//P??gina Sobre
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

//Informa????es das Skills
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
        clone.children[1].children[i].style.backgroundColor = "#707070";    
    }

    skills[0].appendChild(clone);
});

//Removendo o molde de skill
skills[0].children[1].remove();

//Criando ??rea de depoimentos de clientes
let msg = [
    {
        mensagem: '"Eu gostaria de ter v??rios outros projetos para poder contar com a genialidade do Guilherme. N??o ?? toa consegui aproveita-lo para a capa, diagrama????o e ilustra????o do meu livro, um verdadeiro tr??s em um."',
        cliente: "Pedro Amaral",
        projeto: "Livro Voos Incomuns"
    },
    {
        mensagem: '"Profissional maravilhoso. Atencioso, inteligente e habilidoso."',
        cliente: "Yasmin V.",
        projeto: "Playmat de jogo de cartas"
    },
    {
        mensagem: '"Profissinal muito competente e cumpriu com todo o combinado. espero voltar a fazer projetos com ele! J?? foi o segundo trabalho que pedi e mais uma vez gostei muito."',
        cliente: "Cesar Filippini",
        projeto: "Edi????o de fotos de Aeronave"
    },
    {
        mensagem: '"Profissional muito dedicado. As ilustra????es s??o excelentes. Ele fez a capa do meu eBook e ficou incr??vel, super recomendo e espero poder trabalhar novamente com o Guilherme."',
        cliente: "Eduardo Cezar",
        projeto: 'Capa do eBook "Universo atr??s da parede"'
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