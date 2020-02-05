/* Start */
/* Element vi använder */
const elementRum = document.querySelectorAll('input[name="rum"]');
const elementAntalNätter = document.querySelector('select');
const elementTillägg = document.querySelectorAll('input[name="tillägg"]');
const elementKampanjkod = document.querySelector("#kampanjkod");
const elementKnapp = document.querySelector('button');
const elementP = document.querySelector('p');


elementKnapp.addEventListener("click", räknaUt);

function räknaUt() {
    var rumspris = 0,
        rumspris;

    /* Läsa av bokningen */

    /* Vilken typ av rum har valts */
    if (elementRum[0].checked == true) {
        rumspris = 5000;
    }
    if (elementRum[1].checked == true) {
        rumspris = 8000;
    }
    if (elementRum[2].checked == true) {
        rumspris = 10000;
    }


    /* Hur många nätter har valts */
    var antalNätter = elementAntalNätter.value;
    kostnad = rumspris * antalNätter;

    /* Vilka tilläg har valts? */
    if (elementTillägg[0].checked == true) {
        kostnad = kostnad + 5000;
    }
    if (elementTillägg[1].checked == true) {
        kostnad = kostnad + 1000000000;
    }
    if (elementTillägg[2].checked == true) {
        kostnad = kostnad + 10000;
    }
    if (elementTillägg[3].checked == true) {
        kostnad = kostnad + 7000;
    }

        /* Har vi en kampanjkod? */
        var kampanjkod = elementKampanjkod.value;
        if (kampanjkod == "sportlov20") {
            kostnad = kostnad * 0.9;
        }
        if (kampanjkod == "sommar2020") {
            kostnad = kostnad * 0.85;
        }
        if (kampanjkod == "nti") {
            kostnad = kostnad * 0.1;
        }
        console.log(kostnad);

        /* Visa kostnaden */
        elementP.textContent = kostnad + " kr";
    }