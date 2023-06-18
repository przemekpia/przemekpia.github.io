const toggleButton = document.getElementsByClassName('fa fa-bars')
const navbarLinks = document.getElementsByClassName('main-nav')

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
const tab1 = [MainSiteContent1, EnglandContent1, PolandContent1, SpainContent1, NetherlandsContent1, ArgentinaContent1, BrazilContent1];
const tab2 = [MainSiteContent2, EnglandContent2, PolandContent2, SpainContent2, NetherlandsContent2, ArgentinaContent2, BrazilContent2];
const tab3 = [MainSiteContent3, EnglandContent3, PolandContent3, SpainContent3, NetherlandsContent3, ArgentinaContent3, BrazilContent3];
const tab4 = [PolishVersion, EnglishVersion, SpanishVersion];


Array.from(toggleButton).forEach((element,index) => {
    element.addEventListener('click', ()=>{
        Array.from(navbarLinks).forEach(element => {
            element.classList.toggle('active')
        })
    })
});


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
    ChangeLanguage()
    ChangeSite();
}

function ChangeEnglish() {
    languageSelect2.selectedIndex = 1;
    activelanguage = 1;
    ChangeLanguage()
    ChangeSite();
}

function ChangeSpanish() {
    languageSelect3.selectedIndex = 2;
    activelanguage = 2;
    ChangeLanguage()
    ChangeSite();
}

function ChangeLanguage() {
    tab4.forEach((element,index) => {
        if (index == activelanguage) {
            element.style.display = "block"
          } else {
            element.style.display = "none"
          }
        });
}


function ChangeSite() {
    if (activelanguage == 0) {
        tab1.forEach((element,index) => {
            if (index == activesite) {
                element.style.display = "block"
              } else {
                element.style.display = "none"
              }
        });
      } else if (activelanguage == 1) {
        tab2.forEach((element,index) => {
            if (index == activesite) {
                element.style.display = "block"
              } else {
                element.style.display = "none"
              }
        });
      } else{
        tab3.forEach((element,index) => {
            if (index == activesite) {
                element.style.display = "block"
              } else {
                element.style.display = "none"
              }
        });
      }
    
}


MainSite1.addEventListener('click', ()=>{
    activesite = 0;
    ChangeSite();
    
})

Anglia1.addEventListener('click', ()=>{
    activesite = 1;
    ChangeSite();
})

Polska1.addEventListener('click', ()=>{
    activesite = 2;
    ChangeSite();
})

Hiszpania1.addEventListener('click', ()=>{
    activesite = 3;
    ChangeSite();
})

Holandia1.addEventListener('click', ()=>{
    activesite = 4;
    ChangeSite();
})

Argentyna1.addEventListener('click', ()=>{
    activesite = 5;
    ChangeSite();
})

Brazylia1.addEventListener('click', ()=>{
    activesite = 6;
    ChangeSite();
})


MainSite2.addEventListener('click', ()=>{
    activesite = 0;
    ChangeSite();
})

Anglia2.addEventListener('click', ()=>{
    activesite = 1;
    ChangeSite();
})

Polska2.addEventListener('click', ()=>{
    activesite = 2;
    ChangeSite();
})

Hiszpania2.addEventListener('click', ()=>{
    activesite = 3;
    ChangeSite();
})

Holandia2.addEventListener('click', ()=>{
    activesite = 4;
    ChangeSite();
})

Argentyna2.addEventListener('click', ()=>{
    activesite = 5;
    ChangeSite();
})

Brazylia2.addEventListener('click', ()=>{
    activesite = 6;
    ChangeSite();
})


MainSite3.addEventListener('click', ()=>{
    activesite = 0;
    ChangeSite();

})

Anglia3.addEventListener('click', ()=>{
    activesite = 1;
    ChangeSite();
})

Polska3.addEventListener('click', ()=>{
    activesite = 2;
    ChangeSite();
})

Hiszpania3.addEventListener('click', ()=>{
    activesite = 3;
    ChangeSite();
})

Holandia3.addEventListener('click', ()=>{
    activesite = 4;
    ChangeSite();
})

Argentyna3.addEventListener('click', ()=>{
    activesite = 5;
    ChangeSite();
})

Brazylia3.addEventListener('click', ()=>{
    activesite = 6;
    ChangeSite();
})