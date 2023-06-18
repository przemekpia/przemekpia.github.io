const toggleButton = document.getElementsByClassName('fa fa-bars')[0]
const navbarLinks = document.getElementsByClassName('main-nav')[0]

const MainSite1 = document.getElementsByClassName('StronaGłówna')[0]
const Anglia1 = document.getElementsByClassName('Anglia')[0]
const Polska1 = document.getElementsByClassName('Polska')[0]
const Hiszpania1 = document.getElementsByClassName('Hiszpania')[0]
const Holandia1 = document.getElementsByClassName('Holandia')[0]
const Argentyna1 = document.getElementsByClassName('Argentyna')[0]
const Brazylia1 = document.getElementsByClassName('Brazylia')[0]

const MainSiteContent1 = document.getElementsByClassName('MainVIEW')[0]
const EnglandContent1 = document.getElementsByClassName('England')[0]
const PolandContent1 = document.getElementsByClassName('Poland')[0]
const SpainContent1= document.getElementsByClassName('Spain')[0]
const NetherlandsContent1 = document.getElementsByClassName('Netherlands')[0]
const ArgentinaContent1 = document.getElementsByClassName('Argentina')[0]
const BrazilContent1 = document.getElementsByClassName('Brazil')[0]

const MainSite2 = document.getElementsByClassName('StronaGłówna')[1]
const Anglia2 = document.getElementsByClassName('Anglia')[1]
const Polska2 = document.getElementsByClassName('Polska')[1]
const Hiszpania2 = document.getElementsByClassName('Hiszpania')[1]
const Holandia2 = document.getElementsByClassName('Holandia')[1]
const Argentyna2 = document.getElementsByClassName('Argentyna')[1]
const Brazylia2 = document.getElementsByClassName('Brazylia')[1]

const MainSiteContent2 = document.getElementsByClassName('MainVIEW')[1]
const EnglandContent2 = document.getElementsByClassName('England')[1]
const PolandContent2 = document.getElementsByClassName('Poland')[1]
const SpainContent2= document.getElementsByClassName('Spain')[1]
const NetherlandsContent2 = document.getElementsByClassName('Netherlands')[1]
const ArgentinaContent2 = document.getElementsByClassName('Argentina')[1]
const BrazilContent2 = document.getElementsByClassName('Brazil')[1]

const MainSite3 = document.getElementsByClassName('StronaGłówna')[2]
const Anglia3 = document.getElementsByClassName('Anglia')[2]
const Polska3 = document.getElementsByClassName('Polska')[2]
const Hiszpania3 = document.getElementsByClassName('Hiszpania')[2]
const Holandia3 = document.getElementsByClassName('Holandia')[2]
const Argentyna3 = document.getElementsByClassName('Argentyna')[2]
const Brazylia3 = document.getElementsByClassName('Brazylia')[2]

const MainSiteContent3 = document.getElementsByClassName('MainVIEW')[2]
const EnglandContent3 = document.getElementsByClassName('England')[2]
const PolandContent3 = document.getElementsByClassName('Poland')[2]
const SpainContent3= document.getElementsByClassName('Spain')[2]
const NetherlandsContent3 = document.getElementsByClassName('Netherlands')[2]
const ArgentinaContent3 = document.getElementsByClassName('Argentina')[2]
const BrazilContent3 = document.getElementsByClassName('Brazil')[2]



const PolishVersion = document.getElementsByClassName('Polish')[0]
const EnglishVersion = document.getElementsByClassName('English')[0]
const SpanishVersion = document.getElementsByClassName('Spanish')[0]


const languageSelect1 = document.getElementById('languageSelect1');
const languageSelect2 = document.getElementById('languageSelect2');
const languageSelect3 = document.getElementById('languageSelect3');


var activelanguage = 0
var activesite = 0

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})


languageSelect1.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === '1') {
        ChangePolish();
    } else if (selectedValue === '2') {
        ChangeEnglish();
    } else if (selectedValue === '3') {
        ChangeSpanish();
    }
});

languageSelect2.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === '1') {
        ChangePolish();
    } else if (selectedValue === '2') {
        ChangeEnglish();
    } else if (selectedValue === '3') {
        ChangeSpanish();
    }
});

languageSelect3.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === '1') {
        ChangePolish();
    } else if (selectedValue === '2') {
        ChangeEnglish();
    } else if (selectedValue === '3') {
        ChangeSpanish();
    }
});

function ChangePolish() {
    languageSelect1.selectedIndex = 0;
    activelanguage = 0;
    PolishVersion.style.display = "block"
    EnglishVersion.style.display = "none"
    SpanishVersion.style.display = "none"
}

function ChangeEnglish() {
    languageSelect2.selectedIndex = 1;
    activelanguage = 1;
    PolishVersion.style.display = "none"
    EnglishVersion.style.display = "block"
    SpanishVersion.style.display = "none"
}

function ChangeSpanish() {
    languageSelect3.selectedIndex = 2;
    activelanguage = 2;
    PolishVersion.style.display = "none";
    EnglishVersion.style.display = "none";
    SpanishVersion.style.display = "block";
}


MainSite1.addEventListener('click', ()=>{
    MainSiteContent1.style.display = "block"
    EnglandContent1.style.display = "none"
    PolandContent1.style.display = "none"
    SpainContent1.style.display = "none"
    NetherlandsContent1.style.display = "none"
    ArgentinaContent1.style.display = "none"
    BrazilContent1.style.display = "none"

})

Anglia1.addEventListener('click', ()=>{
    MainSiteContent1.style.display = "none"
    EnglandContent1.style.display = "block"
    PolandContent1.style.display = "none"
    SpainContent1.style.display = "none"
    NetherlandsContent1.style.display = "none"
    ArgentinaContent1.style.display = "none"
    BrazilContent1.style.display = "none"
})

Polska1.addEventListener('click', ()=>{
    MainSiteContent1.style.display = "none"
    EnglandContent1.style.display = "none"
    PolandContent1.style.display = "block"
    SpainContent1.style.display = "none"
    NetherlandsContent1.style.display = "none"
    ArgentinaContent1.style.display = "none"
    BrazilContent1.style.display = "none"
})

Hiszpania1.addEventListener('click', ()=>{
    MainSiteContent1.style.display = "none"
    EnglandContent1.style.display = "none"
    PolandContent1.style.display = "none"
    SpainContent1.style.display = "block"
    NetherlandsContent1.style.display = "none"
    ArgentinaContent1.style.display = "none"
    BrazilContent1.style.display = "none"
})

Holandia1.addEventListener('click', ()=>{
    MainSiteContent1.style.display = "none"
    EnglandContent1.style.display = "none"
    PolandContent1.style.display = "none"
    SpainContent1.style.display = "none"
    NetherlandsContent1.style.display = "block"
    ArgentinaContent1.style.display = "none"
    BrazilContent1.style.display = "none"
})

Argentyna1.addEventListener('click', ()=>{
    MainSiteContent1.style.display = "none"
    EnglandContent1.style.display = "none"
    PolandContent1.style.display = "none"
    SpainContent1.style.display = "none"
    NetherlandsContent1.style.display = "none"
    ArgentinaContent1.style.display = "block"
    BrazilContent1.style.display = "none"
})

Brazylia1.addEventListener('click', ()=>{
    MainSiteContent1.style.display = "none"
    EnglandContent1.style.display = "none"
    PolandContent1.style.display = "none"
    SpainContent1.style.display = "none"
    NetherlandsContent1.style.display = "none"
    ArgentinaContent1.style.display = "none"
    BrazilContent1.style.display = "block"
})


MainSite2.addEventListener('click', ()=>{
    MainSiteContent2.style.display = "block"
    EnglandContent2.style.display = "none"
    PolandContent2.style.display = "none"
    SpainContent2.style.display = "none"
    NetherlandsContent2.style.display = "none"
    ArgentinaContent2.style.display = "none"
    BrazilContent2.style.display = "none"

})

Anglia2.addEventListener('click', ()=>{
    MainSiteContent2.style.display = "none"
    EnglandContent2.style.display = "block"
    PolandContent2.style.display = "none"
    SpainContent2.style.display = "none"
    NetherlandsContent2.style.display = "none"
    ArgentinaContent2.style.display = "none"
    BrazilContent2.style.display = "none"
})

Polska2.addEventListener('click', ()=>{
    MainSiteContent2.style.display = "none"
    EnglandContent2.style.display = "none"
    PolandContent2.style.display = "block"
    SpainContent2.style.display = "none"
    NetherlandsContent2.style.display = "none"
    ArgentinaContent2.style.display = "none"
    BrazilContent2.style.display = "none"
})

Hiszpania2.addEventListener('click', ()=>{
    MainSiteContent2.style.display = "none"
    EnglandContent2.style.display = "none"
    PolandContent2.style.display = "none"
    SpainContent2.style.display = "block"
    NetherlandsContent2.style.display = "none"
    ArgentinaContent2.style.display = "none"
    BrazilContent2.style.display = "none"
})

Holandia2.addEventListener('click', ()=>{
    MainSiteContent2.style.display = "none"
    EnglandContent2.style.display = "none"
    PolandContent2.style.display = "none"
    SpainContent2.style.display = "none"
    NetherlandsContent2.style.display = "block"
    ArgentinaContent2.style.display = "none"
    BrazilContent2.style.display = "none"
})

Argentyna2.addEventListener('click', ()=>{
    MainSiteContent2.style.display = "none"
    EnglandContent2.style.display = "none"
    PolandContent2.style.display = "none"
    SpainContent2.style.display = "none"
    NetherlandsContent2.style.display = "none"
    ArgentinaContent2.style.display = "block"
    BrazilContent2.style.display = "none"
})

Brazylia2.addEventListener('click', ()=>{
    MainSiteContent2.style.display = "none"
    EnglandContent2.style.display = "none"
    PolandContent2.style.display = "none"
    SpainContent2.style.display = "none"
    NetherlandsContent2.style.display = "none"
    ArgentinaContent2.style.display = "none"
    BrazilContent2.style.display = "block"
})


MainSite3.addEventListener('click', ()=>{
    MainSiteContent3.style.display = "block"
    EnglandContent3.style.display = "none"
    PolandContent3.style.display = "none"
    SpainContent3.style.display = "none"
    NetherlandsContent3.style.display = "none"
    ArgentinaContent3.style.display = "none"
    BrazilContent3.style.display = "none"

})

Anglia3.addEventListener('click', ()=>{
    MainSiteContent3.style.display = "none"
    EnglandContent3.style.display = "block"
    PolandContent3.style.display = "none"
    SpainContent3.style.display = "none"
    NetherlandsContent3.style.display = "none"
    ArgentinaContent3.style.display = "none"
    BrazilContent3.style.display = "none"
})

Polska3.addEventListener('click', ()=>{
    MainSiteContent3.style.display = "none"
    EnglandContent3.style.display = "none"
    PolandContent3.style.display = "block"
    SpainContent3.style.display = "none"
    NetherlandsContent3.style.display = "none"
    ArgentinaContent3.style.display = "none"
    BrazilContent3.style.display = "none"
})

Hiszpania3.addEventListener('click', ()=>{
    MainSiteContent3.style.display = "none"
    EnglandContent3.style.display = "none"
    PolandContent3.style.display = "none"
    SpainContent3.style.display = "block"
    NetherlandsContent3.style.display = "none"
    ArgentinaContent3.style.display = "none"
    BrazilContent3.style.display = "none"
})

Holandia3.addEventListener('click', ()=>{
    MainSiteContent3.style.display = "none"
    EnglandContent3.style.display = "none"
    PolandContent3.style.display = "none"
    SpainContent3.style.display = "none"
    NetherlandsContent3.style.display = "block"
    ArgentinaContent3.style.display = "none"
    BrazilContent3.style.display = "none"
})

Argentyna3.addEventListener('click', ()=>{
    MainSiteContent3.style.display = "none"
    EnglandContent3.style.display = "none"
    PolandContent3.style.display = "none"
    SpainContent3.style.display = "none"
    NetherlandsContent3.style.display = "none"
    ArgentinaContent3.style.display = "block"
    BrazilContent3.style.display = "none"
})

Brazylia3.addEventListener('click', ()=>{
    MainSiteContent3.style.display = "none"
    EnglandContent3.style.display = "none"
    PolandContent3.style.display = "none"
    SpainContent3.style.display = "none"
    NetherlandsContent3.style.display = "none"
    ArgentinaContent3.style.display = "none"
    BrazilContent3.style.display = "block"
})