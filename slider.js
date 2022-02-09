const reviews = [
    {
      id: 1,
      ime:"^inija",
      materijal:"Dab",
      img:"./strana-sliki/dab/dab1.jpg",
      podatoci:" Dolna ~inija - dijametar = 220mm, visina = 30mm. Gorna ~inija - dijametar = 650mm, visina = 40mm."
  },
  {
      id: 2,
      ime:"Ukras - Paj~e",
      materijal:"Brest i Dab",
      img:"./strana-sliki/drugo/drugo1.jpg",
      podatoci:"visina = 100mm {irina = 60mm."
  },
  {
      id: 3,
      ime: "Kotle",
      materijal: "maslinka",
      img: "./strana-sliki/maslinka/maslinka1.jpg",
      podatoci: "dijametar = 180mm visina = 140mm"
  },
  {
      id: 4,
      ime: "Top~e",
      materijal: "orev",
      img: "./strana-sliki/orev/orev1.jpg",
      podatoci: "dolzina = 270mm {irina = 160mm visina = 100mm."
  },
  {
      id: 5,
      ime: "Korpa",
      materijal: "dab",
      img: "./strana-sliki/dab/dab2.jpg",
      podatoci: "dijametar = 150mm visina = 120mm."
  },
  {
      id: 6,
      ime: "Dama",
      materijal: "drugo",
      img: "./strana-sliki/drugo/drugo2.jpg",
      podatoci: "{irina = 80mm visina = 180mm."
  },
  {
      id: 7,
      ime: "^inija",
      materijal: "maslinka",
      img: "./strana-sliki/maslinka/maslinka2.jpg",
      podatoci: "dijametar = 180mm visina = 115mm."
  },
  {
      id: 8,
      ime: "Vazna",
      materijal: "orev",
      img: "./strana-sliki/orev/orev2.jpg",
      podatoci: "dijametar = 114mm visina = 184mm."
  },
  {
      id: 9,
      ime: "Dama",
      materijal: "drugo",
      img: "./strana-sliki/drugo/drugo3.jpg",
      podatoci: "{irina = 80mm visina = 250mm."
  },
  {
      id: 10,
      ime: "Vazna",
      materijal: "maslinka",
      img: "./strana-sliki/maslinka/maslinka3.jpg",
      podatoci: "dijametar = 110mm visina = 150mm."
  },
  {
      id: 11,
      ime: "Jabolko",
      materijal: "orev",
      img: "./strana-sliki/orev/orev3.jpg",
      podatoci: "dijametar = 80mm visina = 130mm."
  },
  {
      id: 12,
      ime: "^a{a",
      materijal: "dab",
      img: "./strana-sliki/dab/dab3.jpg",
      podatoci: "dijametar = 100mm visina = 165mm."
  },
  {
      id: 13,
      ime: "Ukras",
      materijal: "drugo",
      img: "./strana-sliki/drugo/drugo4.jpg",
      podatoci: "dolzina = 180mm {irina = 130mm visina = 170mm."
  },
  {
      id: 14,
      ime: "^a{a",
      materijal: "maslinka",
      img: "./strana-sliki/maslinka/maslinka4.jpg",
      podatoci: "dijametar = 74mm visina = 165mm."
  },
  {
      id: 15,
      ime: "Lamba",
      materijal: "orev",
      img: "./strana-sliki/orev/orev4.jpg",
      podatoci: "{irina na telo = 110mm visina = 500mm."
  },
  {
      id: 16,
      ime: "Vazna",
      materijal: "dab",
      img: "./strana-sliki/dab/dab4.jpg",
      podatoci: "dijametar = 290mm visina = 340mm."
  },
  {
      id: 17,
      ime: "\\um",
      materijal: "drugo",
      img: "./strana-sliki/drugo/drugo5.jpg",
      podatoci: "dijametar = 110mm visina = 250mm."
  },
  {
      id: 18,
      ime: "Vazna",
      materijal: "maslinka",
      img: "./strana-sliki/maslinka/maslinka5.jpg",
      podatoci: "dijametar = 70mm visina = 200mm."
  },
  {
      id: 19,
      ime: "^asovnik",
      materijal: "drugo",
      img: "./strana-sliki/drugo/drugo6.jpg",
      podatoci: "dijametar = 200mm {irina = 75mm visina = 250mm."
  },
  {
      id: 20,
      ime: "Sve}nik",
      materijal: "maslinka",
      img: "./strana-sliki/maslinka/maslinka6.jpg",
      podatoci: "visina = 450mm."
  },
  ];
  
  const img = document.getElementById("secondimage");
  const ime = document.getElementById("ime");
  const materijal = document.getElementById("materijal");
  const podatoci = document.getElementById("podatoci");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  var currentItem = 0;
  
  const gallerySlider = document.querySelector(".image2");
  
  window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
  });
  
  
  const showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    ime.textContent = item.ime;
    materijal.textContent = item.materijal;
    podatoci.textContent = item.podatoci;
    gallerySlider.innerHTML = `<a href="${item.img}"><img src="${item.img}" id="secondimage" width="100%" height="100%" alt="">`
  };
  
  
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  });
  
  
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson();
  });
  
  
  randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
  });
  
  const btns = document.querySelectorAll(".tab-btn");
  const about = document.querySelector(".about");
  const articles = document.querySelectorAll(".content");
  
  about.addEventListener("click", function(e){
    const id = e.target.dataset.id
  
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
  
        });
  
        articles.forEach(function(article){
            article.classList.remove("active");
        });
  
        const element = document.getElementById(id);
  
        element.classList.add("active");
    }
  });