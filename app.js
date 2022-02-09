const menu = [
    {
        id: 1,
        ime: "^inija",
        materijal: "dab",
        cena: 3,
        img: "./strana-sliki/dab/dab1.jpg",
        info: "Dve ~inii edna vo druga izraboteni se od suvo dabovo drvo."
    },
    {
        id: 2,
        ime: "Ukras - Paj~e",
        materijal: "drugo",
        cena: 5,
        img: "./strana-sliki/drugo/drugo1.jpg",
        info: "Ukrasot e izraboten od kombinacija na dva materijali, teloto e od brest, a kap~eto od dab."
    },
    {
        id: 3,
        ime: "Kotle",
        materijal: "maslinka",
        cena: 10,
        img: "./strana-sliki/maslinka/maslinka1.jpg",
        info: "Kotleto e izraboteno od kombinacija na drvo i metal. Drvoto e od diva maslinka i ra~ka od prohrom"
    },
    {
        id: 4,
        ime: "Top~e",
        materijal: "orev",
        cena: 3,
        img: "./strana-sliki/orev/orev1.jpg",
        info: "Top~eto e izraboteno od kombinacija od orev so bakarni obra~i."
    },
    {
        id: 5,
        ime: "Korpa",
        materijal: "dab",
        cena: 15,
        img: "./strana-sliki/dab/dab2.jpg",
        info: "Korpata e izrabotena od dabovo trup~e so prirodni ivici vo koe e smesteno jajce izraboteno od diva maslinka."
    },
    {
        id: 6,
        ime: "Dama",
        materijal: "drugo",
        cena: 10,
        img: "./strana-sliki/drugo/drugo2.jpg",
        info: "Ukrasot e izrabotka so kombinacija od temen i svetol orev."
    },
    {
        id: 7,
        ime: "^inija",
        materijal: "maslinka",
        cena: 20,
        img: "./strana-sliki/maslinka/maslinka2.jpg",
        info: "^inijata e izrabotena od koren od diva maslinka so prirodni ivici."
    },
    {
        id: 8,
        ime: "Vazna",
        materijal: "orev",
        cena: 13,
        img: "./strana-sliki/orev/orev2.jpg",
        info: "Vaznata e izrabotena od staro suvo drvo od orev."
    },
    {
        id: 9,
        ime: "Dama",
        materijal: "drugo",
        cena: 23,
        img: "./strana-sliki/drugo/drugo3.jpg",
        info: "Ukrasot e izrabotka so kombinacija od temen i svetol orev."
    },
    {
        id: 10,
        ime: "Vazna",
        materijal: "maslinka",
        cena: 23,
        img: "./strana-sliki/maslinka/maslinka3.jpg",
        info: "Vaznata e izrabotena od koren od diva maslinka so prirodni ivici."
    },
    {
        id: 11,
        ime: "Jabolko",
        materijal: "orev",
        cena: 23,
        img: "./strana-sliki/orev/orev3.jpg",
        info: "Jabolkoto e izraboteno od suvo drvo od orev."
    },
    {
        id: 12,
        ime: "^a{a",
        materijal: "dab",
        cena: 23,
        img: "./strana-sliki/dab/dab3.jpg",
        info: "^a{ata e izrabotena od dabovo trup~e."
    },
    {
        id: 13,
        ime: "Ukras",
        materijal: "drugo",
        cena: 23,
        img: "./strana-sliki/drugo/drugo4.jpg",
        info: "Kombinacija na dva ukrasi, dolniot del ili podlo{kata e izrabotena od dab, a gorniot del ili male~kata vazna od kosten."
    },
    {
        id: 14,
        ime: "^a{a",
        materijal: "maslinka",
        cena: 23,
        img: "./strana-sliki/maslinka/maslinka4.jpg",
        info: "^a{ata e izrabotena od diva maslinka."
    },
    {
        id: 15,
        ime: "Lamba",
        materijal: "orev",
        cena: 23,
        img: "./strana-sliki/orev/orev4.jpg",
        info: "Lambata e izrabotena od kombinacija na tri vidovi drva(orev, diva maslinka i brest)."
    },
    {
        id: 16,
        ime: "Vazna",
        materijal: "dab",
        cena: 23,
        img: "./strana-sliki/dab/dab4.jpg",
        info: "Segmentna vazna kade {to sekoj prsten e izraboten od 16 delovi vkupno 17 prsteni, ili 272 par~iwa od dab i orev."
    },
    {
        id: 17,
        ime: "\\um",
        materijal: "drugo",
        cena: 23,
        img: "./strana-sliki/drugo/drugo5.jpg",
        info: "\\umot e izraboten od kombinacija na drvo i metal, drvoto e od crnica so bakarna ra~ka."
    },
    {
        id: 18,
        ime: "Vazna",
        materijal: "maslinka",
        cena: 23,
        img: "./strana-sliki/maslinka/maslinka5.jpg",
        info: "Vaznata e izrabotena od granka od diva maslinka."
    },
    {
        id: 19,
        ime: "^asovnik",
        materijal: "drugo",
        cena: 23,
        img: "./strana-sliki/drugo/drugo6.jpg",
        info: "^asovnikot e izraboten od kombinacija na dva materijali, orev i dab."
    },
    {
        id: 20,
        ime: "Sve}nik",
        materijal: "maslinka",
        cena: 23,
        img: "./strana-sliki/maslinka/maslinka6.jpg",
        info: "Sve}nikot e izraboten od diva maslinka i crnica, a ovalot od orev. Sve}ite se izraboteni od diva maslinka."
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item){
        return`<article class="menu-item">
        <a href="${item.img}" class="fullscreenpic"><img src=${item.img} alt="" class="photo"/></a>
        <div class="item-info">
          <header class="info-title">
            <h4>${item.ime}</h4>
            <h4 class="price"></h4>
            <button type="button" class="info-btn">
              <span class="plus-icon">
                <i class="far fa-plus-square"></i>
              </span>
              <span class="minus-icon">
                <i class="far fa-minus-square"></i>
              </span>
            </button>
          </header>
          <div class="info-text">
          <p>${item.info}</p>
          </div>
          </div>
      </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
    // console.log(displayItems);
    const information = document.querySelectorAll(".item-info");
    information.forEach(function (description) {
        // console.log(description);
        const infoBtns = description.querySelector(".info-btn");
        infoBtns.addEventListener("click", function(){
            information.forEach(function(btn){
                if(btn !== description){
                    btn.classList.remove("show-text");
                }
            });
            description.classList.toggle("show-text");
        });
    });
};

function displayMenuButtons(){
    const materijali = menu.reduce(
        function(values,item){
        if (!values.includes(item.materijal)){
            values.push(item.materijal);
        };
        return values;
    },
    ["site"]
);

    const categoryBtns = materijali.map(function(materijal){
        return `<button type="button" class="skill filter-btn" data-id=${materijal}>
        ${materijal}
        </button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const materijal = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem){
                if(menuItem.materijal === materijal){
                    return menuItem;
                }
                console.log(menuItem);
            });

            console.log(menuCategory);
            if(materijal === "site"){
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
};