/* 
    * Hasse & Tage filmar "släpp fångarne loss, det är vår!" på långholmens centralfängelse. fängelset läggs ner samma år. 1975

    * I Frankrike föds organisationen "Trädgårdstomtarnas befrielsefront." 1996

    * Yassir Arafat blir ledare för PLO. 1969

    * Leanardo da Vinci avslutar verket Mona Lisa. 1503

    * Fucking Åmol är detta års bästa film enligt Guldbaggejuryn. 1998

    * Med slagord som "den vite spelar boll, den svarte ingen roll" vill demonstranter stoppa en tennismatch mellan sverige och rhodesia i båstad. 1968

    * Sara Lidman åtalas i Sydafrika för brott mot raslagarna. 1961

    * Salman Rushdie ger ut sin bok "satansverserna" och får en fatwa på halsen. Ayatolla Khomeyni tycker alla ska dö pga sina smädelser. 1988

    * Thomas Edison visar upp sin första funktionella glödlampa. 1879

    * Svenskt förbud att blanda kadavermjöl i djurfoder. 1986
*/

/* Globala variabler och konstanter */
var frågor = [
    "Hasse & Tage filmar \"släpp fångarne loss, det är vår!\" på långholmens centralfängelse. fängelset läggs ner samma år.",
    "I Frankrike föds organisationen \"Trädgårdstomtarnas befrielsefront.\" ",
    "Yassir Arafat blir ledare för PLO.",
    "Leanardo da Vinci avslutar verket Mona Lisa.",
    "Fucking Åmol är detta års bästa film enligt Guldbaggejuryn.",
    "Med slagord som \"den vite spelar boll, den svarte ingen roll\" vill demonstranter stoppa en tennismatch mellan sverige och rhodesia i båstad. ",
    "Sara Lidman åtalas i Sydafrika för brott mot raslagarna.",
    "Salman Rushdie ger ut sin bok \"satansverserna\" och får en fatwa på halsen. Ayatolla Khomeyni tycker alla ska dö pga sina smädelser.",
    "Thomas Edison visar upp sin första funktionella glödlampa.",
    "Svenskt förbud att blanda kadavermjöl i djurfoder."
];
var årtal = [
    1975, 1996, 1969, 1503, 1998, 1968, 1961, 1988, 1879, 1986
];
var slumptal 
    poäng = 0
    varv = 10;
const elementKontainer = document.querySelector("kontainer");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("#årtal");
const elementPoängRuta = document.querySelector("#poäng");
const elementKnappSkicka = document.querySelector("#skicka")
const elementKnappNästa = document.querySelector("#nästa")
const elementTummeUpp = document.querySelector("#upp");
const elementTummeNed = document.querySelector("#ned");



/* Skapa e funktion för att slumpa fram en fråga */
function nyFråga() {
    /* Slumptal 0-9 */
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);
    elementÅrtalRuta.value = "";

    elementFrågaRuta.value = frågor[slumptal];
    /* Dölj tummarna */

    elementTummeUpp.style.display = "none";
    elementTummeNed.style.display = "none";
}

/* Körs i början */
/* Kör funktionen! */
nyFråga();



/* Plocka fram en ny fråga när man klickar på knappen "Nästa" */
elementKnappNästa.addEventListener("click", nyFråga);

/* Kolla om man svarat rätt årtal på frågan */
elementKnappSkicka.addEventListener("click", kollaSvaret);

/* Skapa en funktion för att kolla om svaret är rätt */

function kollaSvaret() {
    /* Läs av svaret */
    var svaret = elementÅrtalRuta.value;
    console.log(svaret);

    /* Det rätta årtalet */
    var årtalet = årtal[slumptal];

    /* Kolla om svaret är rätt */
    if (svaret == årtalet) {
        console.log("Yippie du kan faktiskt lite saker");
        elementTummeUpp.style.display = "block";
        elementTummeNed.style.display = "none";
        poäng ++;

    } else {
        console.log("tbf så finns det rätt så många årtal att välja mellan, så du är bara lite dålig som gissa fel");
        elementTummeNed.style.display = "block";
        elementTummeUpp.style.display = "none";

    }

    /* Skriv ut poängen */

    elementPoängRuta.value = poäng;

    /* Antal varv */
    varv --;
    if (varv == 0) {
        if (poäng == 10) {
            elementKontainer.innerHTML = "Grattis! du kunde alla frågor.";
        } else {
            elementKontainer.innerHTML = "Du hade inte all rätt loser, försök igen noob.";
        }
    }



}