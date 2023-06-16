const toggleButton = document.getElementsByClassName('fa fa-bars')[0]
const navbarLinks = document.getElementsByClassName('main-nav')[0]

const MainSite = document.getElementsByClassName('StronaGłówna')[0]
const Anglia = document.getElementsByClassName('Anglia')[0]
const Polska = document.getElementsByClassName('Polska')[0]
const Hiszpania = document.getElementsByClassName('Hiszpania')[0]
const Holandia = document.getElementsByClassName('Holandia')[0]
const Argentyna = document.getElementsByClassName('Argentyna')[0]
const Brazylia = document.getElementsByClassName('Brazylia')[0]




const MainSiteContent = document.getElementsByClassName('MainVIEW')[0]
const EnglandContent = document.getElementsByClassName('England')[0]
const PolandContent = document.getElementsByClassName('Poland')[0]
const SpainContent = document.getElementsByClassName('Spain')[0]
const NetherlandsContent = document.getElementsByClassName('Netherlands')[0]
const ArgentinaContent = document.getElementsByClassName('Argentina')[0]
const BrazilContent = document.getElementsByClassName('Brazil')[0]


const PolishVersion = document.getElementsByClassName('Polish')[0]
const EnglishVersion = document.getElementsByClassName('English')[0]
const SpanishVersion = document.getElementsByClassName('Spanish')[0]


const languageSelect1 = document.getElementById('languageSelect1');
const languageSelect2 = document.getElementById('languageSelect2');
const languageSelect3 = document.getElementById('languageSelect3');

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})


languageSelect1.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    alert("polska")
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
    alert("anglia")
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
    alert("hiszpania")
    if (selectedValue === '1') {
        ChangePolish();
    } else if (selectedValue === '2') {
        ChangeEnglish();
    } else if (selectedValue === '3') {
        ChangeSpanish();
    }
});

function ChangePolish() {
    alert("zzzpolska")
    languageSelect1.selectedIndex = 0;
    PolishVersion.style.display = "block"
    EnglishVersion.style.display = "none"
    SpanishVersion.style.display = "none"
}

function ChangeEnglish() {
    alert("zzzanglia")
    languageSelect2.selectedIndex = 1;
    PolishVersion.style.display = "none"
    EnglishVersion.style.display = "block"
    SpanishVersion.style.display = "none"
}

function ChangeSpanish() {
    alert("zzzhiszpanmia")
    languageSelect3.selectedIndex = 2;
    PolishVersion.style.display = "none";
    EnglishVersion.style.display = "none";
    SpanishVersion.style.display = "block";
}


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

