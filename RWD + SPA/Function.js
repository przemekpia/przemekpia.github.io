const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const MainSite = document.getElementsByClassName('StronaGłówna')[0]
const Anglia = document.getElementsByClassName('Anglia')[0]
const Polska = document.getElementsByClassName('Polska')[0]
const MainSiteContent = document.getElementsByClassName('Main')[0]
const EnglandContent = document.getElementsByClassName('England')[0]
const PolandContent = document.getElementsByClassName('Poland')[0]




toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})

MainSite.addEventListener('click', ()=>{
    MainSiteContent.style.display = "block"
    EnglandContent.style.display = "none"
    PolandContent.style.display = "none"
})

Anglia.addEventListener('click', ()=>{
    MainSiteContent.style.display = "none"
    EnglandContent.style.display = "block"
    PolandContent.style.display = "none"
})

Polska.addEventListener('click', ()=>{
    MainSiteContent.style.display = "none"
    EnglandContent.style.display = "none"
    PolandContent.style.display = "block"
})
