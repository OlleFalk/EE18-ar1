/* Kod som körs vid start */
/* välja ut element vi ska jobba med */

const elementBildruta = document.querySelector("#bildruta");

/* KOd som körs efter start, när man klickar på en miniatyr */

function visaBild(nr) {
    elementBildruta.innerHTML = "<img src=\"./foton/foto" + nr +".jpg\" alt=\"Foto" + nr +"\">"
}
