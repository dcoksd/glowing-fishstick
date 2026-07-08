```javascript
// ===============================
// ANIMATION DES SECTIONS
// ===============================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

reveals.forEach(section => observer.observe(section));


// ===============================
// NAVBAR AU SCROLL
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.style.background="rgba(0,0,0,.95)";
        nav.style.padding="15px 8%";
        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";

    }else{

        nav.style.background="rgba(0,0,0,.35)";
        nav.style.padding="25px 8%";
        nav.style.boxShadow="none";

    }

});


// ===============================
// LIGHTBOX GALERIE
// ===============================

const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
<img src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImage.src = img.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});


// ===============================
// BOUTON RETOUR EN HAUT
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML="▲";

topButton.id="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// ANIMATION DES CARTES
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// ===============================
// EFFET SUR LES BOUTONS
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btn.style.setProperty("--x",x+"px");
        btn.style.setProperty("--y",y+"px");

    });

});


// ===============================
// APPARITION HERO
// ===============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// ===============================
// RACCOURCI CLAVIER
// Touche Home = Retour en haut
// ===============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});
```
