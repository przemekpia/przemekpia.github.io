const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


const MainSite = document.getElementsByClassName('StronaGłówna')[0]
const Anglia = document.getElementsByClassName('Anglia')[0]
const Polska = document.getElementsByClassName('Polska')[0]
const Hiszpania = document.getElementsByClassName('Hiszpania')[0]
const Holandia = document.getElementsByClassName('Holandia')[0]
const Argentyna = document.getElementsByClassName('Argentyna')[0]
const Brazylia = document.getElementsByClassName('Brazylia')[0]




const MainSiteContent = document.getElementsByClassName('Main')[0]
const EnglandContent = document.getElementsByClassName('England')[0]
const PolandContent = document.getElementsByClassName('Poland')[0]
const SpainContent = document.getElementsByClassName('Spain')[0]
const NetherlandsContent = document.getElementsByClassName('Netherlands')[0]
const ArgentinaContent = document.getElementsByClassName('Argentina')[0]
const BrazilContent = document.getElementsByClassName('Brazil')[0]




toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})

MainSite.addEventListener('click', ()=>{
    MainSiteContent.style.display = "block"
    EnglandContent.style.display = "none"
    PolandContent.style.display = "none"
    SpainContent.style.display = "none"
    NetherlandsContent.style.display = "none"
    ArgentinaContent.style.display = "none"
    BrazilContent.style.display = "none"

})

Anglia.addEventListener('click', ()=>{
    MainSiteContent.style.display = "none"
    EnglandContent.style.display = "block"
    PolandContent.style.display = "none"
    SpainContent.style.display = "none"
    NetherlandsContent.style.display = "none"
    ArgentinaContent.style.display = "none"
    BrazilContent.style.display = "none"
})

Polska.addEventListener('click', ()=>{
    MainSiteContent.style.display = "none"
    EnglandContent.style.display = "none"
    PolandContent.style.display = "block"
    SpainContent.style.display = "none"
    NetherlandsContent.style.display = "none"
    ArgentinaContent.style.display = "none"
    BrazilContent.style.display = "none"
})

Hiszpania.addEventListener('click', ()=>{
    MainSiteContent.style.display = "none"
    EnglandContent.style.display = "none"
    PolandContent.style.display = "none"
    SpainContent.style.display = "block"
    NetherlandsContent.style.display = "none"
    ArgentinaContent.style.display = "none"
    BrazilContent.style.display = "none"
})

Holandia.addEventListener('click', ()=>{
    MainSiteContent.style.display = "none"
    EnglandContent.style.display = "none"
    PolandContent.style.display = "none"
    SpainContent.style.display = "none"
    NetherlandsContent.style.display = "block"
    ArgentinaContent.style.display = "none"
    BrazilContent.style.display = "none"
})

Argentyna.addEventListener('click', ()=>{
    MainSiteContent.style.display = "none"
    EnglandContent.style.display = "none"
    PolandContent.style.display = "none"
    SpainContent.style.display = "none"
    NetherlandsContent.style.display = "none"
    ArgentinaContent.style.display = "block"
    BrazilContent.style.display = "none"
})

Brazylia.addEventListener('click', ()=>{
    MainSiteContent.style.display = "none"
    EnglandContent.style.display = "none"
    PolandContent.style.display = "none"
    SpainContent.style.display = "none"
    NetherlandsContent.style.display = "none"
    ArgentinaContent.style.display = "none"
    BrazilContent.style.display = "block"
})

