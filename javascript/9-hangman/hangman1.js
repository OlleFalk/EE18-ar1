/* 
1.   Välj ett slumpat ord
2.   Läs in användarens gissning
3.   (Avsluta om användaren vill)
4.   (Kontrollera att användaren matat in en bokstav)
5.   (Håll koll på vilka bokstäver användaren gissat)
6.   Visa resultat, dvs hur mycket av ordet som gissats
7.   Avsluta om man gissat hela ordet = vinner!
*/

/* Förbereder canvas */
const eCanvas = document.querySelector("canvas");
var ctx = eCanvas.getContext("2d");
eCanvas.width = 400;
eCanvas.height = 300;

/* Element vi använder */
const eBokstav = document.querySelector("#bokstav");
const eKnapp = document.querySelector("button");
const eResultat = document.querySelector("#resultat");

/* 1. Slumpa fram en huvudstad (196)*/
var stader = [
    "Abu Dhabi",
    "Abuja",
    "Accra",
    "Addis Abeba",
    "Alger",
    "Amman",
    "Amsterdam",
    "Andorra la Vella",
    "Ankara",
    "Antananarivo",
    "Apia",
    "Asjchabad",
    "Asmara",
    "Astana",
    "Asuncion",
    "Aten",
    "Bagdad",
    "Baku",
    "Bamako",
    "Bandar Seri Begawan",
    "Bangkok",
    "Bangui",
    "Banjul",
    "Basseterre",
    "Beirut",
    "Belgrad",
    "Belmopan",
    "Berlin",
    "Bern",
    "Bisjkek",
    "Bissau",
    "Bogota",
    "Brasilia",
    "Bratislava",
    "Brazzaville",
    "Bridgetown",
    "Bryssel",
    "Budapest",
    "Buenos Aires",
    "Bukarest",
    "Canberra",
    "Caracas",
    "Castries",
    "Chisinau",
    "Colombo",
    "Conakry",
    "Dakar",
    "Damaskus",
    "Dhaka",
    "Dili",
    "Djibouti",
    "Dodoma",
    "Doha",
    "Dublin",
    "Dusjanbe",
    "Funafuti",
    "Freetown",
    "Gaborone",
    "Georgetown",
    "Gitega",
    "Guatemala City",
    "Hanoi",
    "Harare",
    "Havanna",
    "Helsingfors",
    "Honiara",
    "Islamabad",
    "Jakarta",
    "Jerevan",
    "Jerusalem",
    "Juba",
    "Kabul",
    "Kairo",
    "Kampala",
    "Katmandu",
    "Khartoum",
    "Kiev",
    "Kigali",
    "Kingston",
    "Kingstown",
    "Kinshasa",
    "Kuala Lumpur",
    "Kuwait",
    "Köpenhamn",
    "Libreville",
    "Lilongwe",
    "Lima",
    "Lissabon",
    "Ljubljana",
    "Lome",
    "London",
    "Luanda",
    "Lusaka",
    "Luxemburg",
    "Madrid",
    "Majuro",
    "Malabo",
    "Male",
    "Managua",
    "Manama",
    "Manila",
    "Maputo",
    "Maseru",
    "Mbabane",
    "Mexico City",
    "Minsk",
    "Mogadishu",
    "Monaco",
    "Monrovia",
    "Montevideo",
    "Moroni",
    "Moskva",
    "Muskat",
    "N'Djamena",
    "Nairobi",
    "Nassau",
    "Naypyidaw",
    "New Delhi",
    "Ngerulmud",
    "Niamey",
    "Nicosia",
    "Nouakchott",
    "Nukualofa",
    "Nuuk",
    "Oslo",
    "Ottawa",
    "Ouagadougou",
    "Palikir",
    "Panama City",
    "Paramaribo",
    "Paris",
    "Peking",
    "Phnom Penh",
    "Podgorica",
    "Port Louis",
    "Port Moresby",
    "Port of Spain",
    "Port-au-Prince",
    "Porto-Novo",
    "Port Vila",
    "Prag",
    "Praia",
    "Pretoria",
    "Pristina",
    "Pyongyang",
    "Quito",
    "Rabat",
    "Reykjavik",
    "Riga",
    "Riyadh",
    "Rom",
    "Roseau",
    "Saint George's",
    "Saint Johns",
    "San Jose",
    "San Marino",
    "San Salvador",
    "Sanaa",
    "Santiago de Chile",
    "Santo Domingo",
    "São Tome",
    "Sarajevo",
    "Seoul",
    "Singapore",
    "Skopje",
    "Sofia",
    "Stockholm",
    "Sucre",
    "Suva",
    "Taipei",
    "Tallinn",
    "Tarawa",
    "Tasjkent",
    "Tbilisi",
    "Tegucigalpa",
    "Teheran",
    "Thimphu",
    "Tirana",
    "Tokyo",
    "Torshamn",
    "Tripoli",
    "Tunis",
    "Ulan Bator",
    "Vaduz",
    "Valletta",
    "Vatikanstaden",
    "Victoria",
    "Vientiane",
    "Vilnius",
    "Warszawa",
    "Washington DC",
    "Wellington",
    "Wien",
    "Windhoek",
    "Yamoussoukro",
    "Yaounde",
    "Zagreb"
];
var index = Math.floor(Math.random() * stader.lenght);
console.log(index);

/* Plocka ur staden på det indexet */
var slumpadStad = stader[index];
console.log(slumpadStad);

/* Variabel för att lsgra felgissningar */
var fel = 0;

/* 2. Läs av användarens gissning */
/* När användaren trycker på knappen läs av gissningen */
eKnapp.addEventListener("click", function() {
    var gissning = eBokstav.value;
    console.log(gissning);

    var resultat = "";

    /* Flagga för att komma ihåg om man gissat rätt */
    var rättGissat = false;
    
    /* Kolla om bokstaven finns i slumpadStad */
    for (var i = 0; i < slumpadStad.length; index++) {
        console.log(i, slumpadStad[i]);

        /* Gör om all bokstäver till små bokstäver */
        var slumpadBokstav = slumpadStad[i]. toLowerCase();

        /* Kolla om gisning finns i staden */

        if (gissning == slumpadBokstav) {

            console.log("Bokstav hittad", gissning);
            resultat += gissning + " ";
            

        } else {
            resultat += "_ ";   
            

        }

        
    }

    console.log("rättgissat =", rättGissat);
    
    /* Räkna upp felen */
    if (rättGissat == false) {
        fel++;
        console.log("antal felgissningar", fel);
        
    }

    /* skriv ut resultatet */
    eResultat.value = resultat;

    /* Rita ut hänga gubbe om det blev fel */
    /* Första felet, rita marken */
    if (fel == 1) {
        ctx.arc(300, 800, 400, 0, 2 * Math.PI);
        ctx.stroke();
    }

});



