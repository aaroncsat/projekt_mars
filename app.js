const arr = [

    {
        name: "Mars",
        discovered: "Felfedezés dátuma: 1610",
        size: "Felszín területe: 144 800 000 km²",
        time: "Keringési idő: 687 nap",
        description: "A Mars a Naptól számított negyedik bolygó a Naprendszerben. Szabad szemmel is könnyedén látható az éjszakai égbolton. A római hadistenről nevezték el, de gyakran hívják „vörös bolygónak” is színe miatt, amit a Mars felszínét meghatározó vas-oxid okoz. Több vállalat foglalkozik a projekttel, ezek közül a SpaceX vállalat akar először a Marsra jutni. Elon Musk, a cég vezérigazgatója 2016 júniusában jelentette be, hogy 2025-ben embereket küldenek a bolygóra. A terv szerint 100 fős űrhajókban utaznának a jövőbeli lakosok, akiknek 200 ezer dollárt kellene fizetniük a költözésért. Bár kezdetben ennél sokkal drágább lesz az utazás, Musk úgy gondolja, nem lehet benépesíteni egy bolygót, ha csak milliárdosok költözhetnek oda. Ezért mindenképpen lejjebb kell vinni az árat, nagyjából egy amerikai lakás árára.",
        img:"https://www.mkewithkids.com/wp-content/uploads/2022/11/planet-mars.jpg"



    },

    {
        name: "Phobos",
        discovered: "Felfedezés dátuma:1877.08.17.",
        size: "Felszíni területe:26,8 × 22,4 × 18,4km",
        time: "Keringési idő:7 óra 39 perc",
        description: "A Phobos a Mars nagyobbik holdja. A Mars felszíne és a Phobos közötti távolság mindössze 5760 km. Összehasonlításképpen: bolygónk és a Hold között 378 000 km ez a távolság. Mars körüli ellipszis alakú pályájának excentricitása 0,0210, fél nagytengelye 9382 km. A pályasíkja csaknem egybeesik a bolygó keringési síkjával. A Phobos gyorsabban kering, mint ahogy a Mars egyszer megfordul a tengelye körül. A Marsot 7 h 39 m alatt kerüli meg, vagyis naponta háromszor, eközben kétszer kel fel a nyugati és kétszer nyugszik le a keleti égbolton. A legújabb kutatási eredmények szerint nem becsapódás hozta létre a Phobos felszínén található barázdákat, mert azok kora jelentős ingadozást mutat. A legfiatalabb barázdák ugyanis maximum néhány millió évesek. Azokat a Mars és a Phobos között zajló árapály erők hozták létre, ami a hold szétszakadásához fog vezetni. Ugyanis a Phobos belső szerkezete sokkal szivacsosabb, mint korábban gondolták. Valószínűleg viszonylag szorosan egymáshoz illeszkedő darabokból állhat, így szétszakadása könnyebben megtörténik.",
        img: "https://astronomynow.com/wp-content/uploads/2016/10/Phobos_Stickney-crater_667x500.jpg"



    },

    {
        name: "Deimos",
        discovered: "Felfedezés dátuma:1877.08.12.",
        size: "Felszíni területe: 27,0 × 21,6 × 18,8 km",
        time: "Keringési idő:30 óra 21 perc",
        description: "A Deimos a Mars kisebbik holdja. Csakúgy, mint a nagyobb Mars-hold, a Phobos, a Deimos is kisméretűnek számít a Naprendszer holdjai között. A Mars mindkét holdját Asaph Hall amerikai csillagász, az Egyesült Államok Tengerészeti Obszervatóriumának (United States Naval Observatory) kutatója fedezte fel 1877. augusztus 12-én. A Phobos ellentétben keleten kel és nyugaton nyugszik a Mars égboltján. A Deimos távolabb mozog bolygójától, keringési ideje hosszabb, mint a Mars forgási ideje, ezért a bolygóról nézve lassabban mozog, mint a csillagok. 5,4 naponta kel fel és ezután 2,7 napig látszik az égen. Felszíne tele van kisebb kráterekkel és világosabb foltokkal. A világos foltok meteorit becsapódáskor a felszínre hullt finomabb anyagok lehetnek. A másik holddal ellentétben kőtömbök is vannak rajta. Két jelentősebb krátere a felvilágosodás két neves írójáról, Voltaire-ről és Swiftről kapta a nevét.",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/86/NASA-Deimos-MarsMoon-20090221.jpg"


    }

];

const nev = document.getElementById("name");
const img = document.getElementById("img");
const size = document.getElementById("size");
const time = document.getElementById("time");
const description = document.getElementById("description");
const discovered = document.getElementById("discovered");
const nextBtn = document.getElementById("nextbtn");
const prevBtn = document.getElementById("prevbtn");

let current = 0;

window.addEventListener("load", ()=>{

    const item = arr[current];
    nev.innerText = item.name;
    size.innerText = item.size;
    time.innerText = item.time;
    description.innerText = item.description;
    discovered.innerText = item.discovered;
    img.src = item.img

})

function showPlanet(planet){

    const item = arr[planet];
    nev.textContent = item.name;
    size.textContent = item.size;
    time.textContent = item.time;
    description.textContent = item.description;
    discovered.textContent = item.discovered;
    img.src = item.img

}


nextBtn.addEventListener("click", () => {

    current++;

    if (current > arr.length - 1){

        current = 0;
    }

    showPlanet(current);
})

prevBtn.addEventListener("click", () => {

    current--;

    if (current < 0){

        current = arr.length - 1;
    }

    showPlanet(current);
})

