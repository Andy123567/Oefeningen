// Oefening 1
window.onload = function (){
    OEfening3();
}

function OEFening1(){
    let Zin1, Zin2, Zin3;

    Zin1= "Dit is de eerste zin"
    Zin2= "Dit is de tweede zin"
    Zin3= "Dit is de derde zin"

    document.getElementById( elementid = 'Zin1').innerHTML = Zin1;
    document.getElementById( elementid = 'Zin2').innerHTML = Zin2;
    document.getElementById( elementid = 'Zin3').innerText = Zin3;

    console.log(Zin1);
    console.log(Zin2);
    console.log(Zin3);
}

// Oefening 2
function OEFening2(){
    let array = ('Dit is zin 1', 'Dit is zin 2', 'Dit is zin 3');
    let output;

    array.forEach(zin => { output += ' ' + zin });
    alert(Zin1 + ' ' + Zin2 + ' ' + Zin3);
    alert(`${Zin1} dit is een doorlopende tekst ${Zin2} en ${Zin3}`);
    alert(output);
}

// Oefening 3
function OEFening3(){
    let koekje = 'Ik wil een koekje'
    console.log(koekje.charAt(0));
    console.log(koekje.charAt(3));
    console.log(koekje.lastIndexOf('k'));
    console.log(koekje.lastIndexOf('e'));
    console.log(koekje.length);

    let lasagne = koekje.replace( 'koekje',  'lasagne van de pxl');
    document.getElementById( 'lasagne').innerHTML = lasagne.toUpperCase();
}


function Promp1(){
    let woord = prompt ('geef een woord in');
    let lengte = woord.length;
    alert(`De lengte van het woord ${woord} is ${lengte}`);
}


function Promp2(){
    let zin = prompt('Geef een zin in');
    let indexOfSpace = zin.indexOf(' ');
    console.log('De eerste spatie staat op positie ' + indexOfSpace);

}

function Promp3(){

    let getal1 = prompt('Geef een getal in');
    let getal2 = prompt('Geef een tweede getal in');
    let vermenigvuldiging = getal1 * getal2;
    let opstellen = parseFloat(getal1)  + parseFloat(getal2);

    let uitkomst = 'De uitkomst van de vermenigvuldiging is: ' + vermenigvuldiging;
    document.getElementById('uitkomst').innerText = uitkomst;

}

function Promp4(){
    let oudgenoeg = prompt('Ben je ouder dan 18?');
    if (!oudgenoeg === 'ja'){
        alert('sorry, probeer het volgend jaar opnieuw')
    }else{
        alert('Je mag de website betreden')
    }
}

// oefeningen deel 3

//Controle structuren

function Oefening1(){
    let geboortejaar = parseInt( prompt('Geef je geboortejaar'));
    let datum = new Date().getFullYear();
    let leeftijd = datum - geboortejaar;
    if(leeftijd >= 20){
        alert('Je bent oud genoeg om deze webpagina te bezoeken');
    }else{
        alert('Je bent niet oud genoeg om deze pagina te bezoeken');
    }
}
function Oefening2(){
    let antwoordSport;
    let doetAanSport = prompt('hou je van sport?')
    if(doetAanSport.toLocaleLowerCase() === 'ja'){
        antwoordSport = 'Do it!'
    }
    else{
        antwoordSport = 'Blijf dan maar in de zetel liggen'
    }
    alert(antwoordSport)
}

function Oefening3(){
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();

    if (hour <= 12){
        console.log(`Het is ${hour}:${minutes} uur voormiddag`);
    }else{
        console.log(`Het is ${hour}:${minutes} uur namiddag`);
    }
}
function Oefening4(){
    let tijd1 = new Date().toLocaleTimeString()
    let uur = new Date().getHours()

    document.getElementById("antwoord").innerText = `${uur} \n ${tijd1}`;
    if (uur >= 7 && uur <= 12  ){
        document.getElementById("antwoord2").innerText = `Goedemorgen! het is ${tijd1} `
    }else if (uur >= 12 && uur <= 18){
        document.getElementById("antwoord2").innerText = `Goede Dag  het is ${tijd1}`
    }else{
        document.getElementById("antwoord2").innerText = `Goede avond het is ${tijd1} in de namiddag`
    }
}

function Oefening5(){
    let getal = parseInt(prompt('Geef een getal in'));
    if(getal < 50){
        document.getElementById('sentence').innerHTML = 'Te laag';
    }else if(getal === 50){
        document.getElementById('sentence').innerHTML = 'Proficiat, goed gegokt!';
    }else if(getal > 50){
        document.getElementById('sentence').innerHTML = 'Te hoog';
    }
}

function Oefening6(){
    let antwoordSport;
    let doetAanSport = prompt('Hou je van sport?');
    switch(doetAanSport.toLocaleLowerCase()){
        case 'ja':
            antwoordSport = 'Just do it!';
            break;
        case 'nee':
            antwoordSport = 'Jammer, blijf dan maar liggen!';
            break;
        default:
            antwoordSport = '´Dat was niet duidelijk, antwoord je vanuit je luie zetel?';
    }
    alert(antwoordSport);
}

function Oefening7(){
    let d = new Date().getMonth();
    let result = '';
    switch(d){
        case 0:
            result = 'Januari';
            break;
        case 1:
            result = 'Februai';
            break;
        case 2:
            result = 'Maart';
            break;
        case 3:
            result = 'April';
            break;
        case 4:
            result = 'Mei';
            break;
        case 5:
            result = 'Junni';
            break;
        case 6:
            result = 'Julli';
            break;
        case 7:
            result = 'Augustus';
            break;
        case 8:
            result = 'September';
            break;
        case 9:
            result = 'Oktober';
            break;
        case 10:
            result = 'November';
            break;
        case 11:
            result = 'December';
            break;
    }
    console.log('Het is de maand ' + result);
}

function Oefening8() {
    let dagdeel;
    let nu = new Date();
    let uren = nu.getHours();
    let dag;

    if (uren >= 7 && uren < 12) {
        dagdeel = 'goedemorgen';
    }else if(uren > 12 && uren < 18){
        dagdeel = 'goededag';
    }else{
        dagdeel = 'goedeavond';
    }

    switch (nu.getDay()){
        case 0:
            dag = 'maandag';
            break;
        case 1:
            dag = 'dinsdag';
            break;
        case 2:
            dag = 'woensdag';
            break;
        case 3:
            dag = 'donderdag';
            break;
        case 4:
            dag = 'vrijdag';
            break;
        case 5:
            dag = 'zaterdag';
            break;
        case 6:
            dag = 'zondag';
            break;
    }
    document.getElementById('Oefening8').innerText = `Het is ${dag} ${dagdeel} ${uren}:${nu.getMinutes()}`;
}

function Oefening9(){
    let getal;
    let teller;
    getal = parseInt(prompt('Geef een getal in van 1 tot 10'));
    if (getal > 0 && getal < 10){
        for(teller = 1; teller <= 10; teller++) {
            document.getElementById('Oefening9').innerText += `${getal} * ${teller} = ${getal * teller} \n`
        }
    }else{
        getal = alert('Geef een correct getal in tussen 1 en 10');
        getal = null;
        console.log('Niet Mogelijk');
    }
}

function Oefening10(){
    let tellinglines = 7;
    for (let i = 1; i <= 10; i++){
        let row = '';
        for (let j = 1; j <= i; j++){
            row += '#';
        }
        console.log(row);
    }
}

function Oefening11(){
    let lines = parseInt(prompt("Geef een getal van 1 tot 10 in."));
    if (lines >= 0 && lines <= 10) {
        for (let i = 1; i <= lines; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += '*';
            }
            console.log(row);
            //console.log('*'.repeat(i));
        }
    }else{
        console.log('Dat is niet mogelijk.');
    }
}

function Oefening12(){
    let getal = parseInt(prompt("Geef een getal tussen 1 en 10 in."));
    if (getal < 1 || getal > 10) {
        console.log('Niet mogelijk')
    }else {
        for (let i = 1; i <= getal; i++) {
            let driehoek = '';
            for (let j = getal - i; j > 0; j--) {
                driehoek += ' ';
            }
            for (let k = 0; k < i; k++) {
                driehoek += '#';
            }
            console.log(driehoek);
        }
    }
}

function Oefening13(){
    let lines = 7;
    for (let i = 1; i <= lines ; i++) {
        let row = '';
        for (let j = 1; j <= lines - i; j++) {
            row+= ' ';
        }
        for (let k = 0; k <= (2*(i-1)); k++) {
            row += '*';
        }
        for (let l = i+1; l <= lines ; l++) {
            row+= ' ';
        }
        console.log(row);
    }
}

// Deel 3 Arrays
function OEfening1(){
    let opleidingen = [
        "Bachelor in de Elektronica-ICT",
        "Bachelor in de Toegepaste informatica",
        "Applicatieontwikkeling",
        "Softwaremanagement",
        "Systemen en netwerkbeheer",
        "Graduaat in de Digitale vormgeving",
        "Graduaat in het Internet of things",
        "Graduaat in het Programmeren",
        "Graduaat in het Systeem- en netwerkbeheer"
    ];
    console.log(opleidingen.length);
}

function OEfening2(){
    let opleidingen = [
        "Bachelor in de Elektronica-ICT",
        "Bachelor in de Toegepaste informatica",
        "Applicatieontwikkeling",
        "Softwaremanagement",
        "Systemen en netwerkbeheer",
        "Graduaat in de Digitale vormgeving",
        "Graduaat in het Internet of things",
        "Graduaat in het Programmeren",
        "Graduaat in het Systeem- en netwerkbeheer",
    ];
    opleidingen.push("Bachelor Multimedia- en Communicatietechnologie");

    console.dir(opleidingen);
    console.log(opleidingen.length);
}

function OEfening3(){
    let opleidingen = [
        "Bachelor in de Elektronica-ICT",
        "Bachelor in de Toegepaste informatica",
        "Applicatieontwikkeling",
        "Softwaremanagement",
        "Systemen en netwerkbeheer",
        "Graduaat in de Digitale vormgeving",
        "Graduaat in het Internet of things",
        "Graduaat in het Programmeren",
        "Graduaat in het Systeem- en netwerkbeheer",
        "Bachelor Multimedia- en Communicatietechnologie"
    ];
    let tekst = '';
    for (let i = 0; i < opleidingen.length; i++){
        tekst += opleidingen[i] + '\n';
    }
    document.getElementById('Oefening3').innerText = tekst;
}

function OEfening4(){
    let Honden = ["Labrador Retriever",
        "Duitse herder",
        "Golden Retriever",
        "Berner Sennenhond",
        "Staffordshire Bull Terrier",
        "Rhodesian Ridgeback",
        "Dashond (Techel)",
        "Chihuahua",
        "Border Collie",
        "Cavalier King Charles Spaniel"
    ];
    let Zin = parseInt(prompt('geef een getal van 1 tot 10'));
    if (Zin <= 0 || Zin > 10){
        alert('Uw getal is niet geldig');
    }else{
        document.getElementById('Honden').innerText = Honden[Zin-1];
    }
}

function OEfening5(){
    let Honden = [
        "Labrador Retriever",
        "Duitse herder",
        "Golden Retriever",
        "Berner Sennenhond",
        "Staffordshire Bull Terrier",
        "Rhodesian Ridgeback",
        "Dashond (Techel)",
        "Chihuahua",
        "Border Collie",
        "Cavalier King Charles Spaniel"
    ]
    Honden.unshift(
        "Dalmatier",
        "Newfoundlander",
        "Amerikaanse buldog",
        "Groenendaeler",
        "Akita",)
    console.log(Honden);
}

function OEfening6(){
    let Honden = [
        "Dalmatier",
        "Newfoundlander",
        "Amerikaanse buldog",
        "Groenendaeler",
        "Akita",
        "Labrador Retriever",
        "Duitse herder",
        "Golden Retriever",
        "Berner Sennenhond",
        "Staffordshire Bull Terrier",
        "Rhodesian Ridgeback",
        "Dashond (Techel)",
        "Chihuahua",
        "Border Collie",
        "Cavalier King Charles Spaniel"
    ]
    Honden.shift();
    Honden.pop();
    document.getElementById('Honden').innerText = `${Honden}`
    console.log(Honden);
}

function OEfening7(){
    let fruits = ['banaan', 'orange', 'Mango'];
    fruits.splice(2,0,'lemon', 'kiwi');
    document.getElementById('fruits').innerHTML = fruits.toString();
}

function OEfening8(){
    let nu = new Date();
    let maand = nu.getMonth() +1;
    let jaar = nu.getFullYear();


    function dagenInMaand(month, year){
        return new Date(year, month, 0).getDate();
    }

    let maandArr = [];
    for (let i = 0; i < dagenInMaand(maand, jaar); i++){
        let fullDatum = (i +1) + ' / ' + maand + ' / ' + jaar;
        maandArr.push(fullDatum)
    }
    document.getElementById('Text').innerText = maandArr.join(" \n ")
}

function OEfening9(){
    let currentday = new Date().getDay()
    let dagArr = [ 'zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    let weekDag = dagArr.find(element => element === currentday)
    console.log(currentday)
    console.log(weekDag)
    document.getElementById('Text').innerText = weekDag + ', ' + maandArr.join(" \n ")
}

// Deel 3 Functie


function vermenigvuldig(a, b){
    return a * b;
}
console.log('Output oef 1:', vermenigvuldig(2, 2), vermenigvuldig(4, 12));

function verschil(n){
    return n > 100 ? n - 100 : 100 - n;
}
console.log('Output oef 2:', verschil(156), verschil(20));

function isVijftig(x, y){
    return ((x === 50 || y === 50) || (x + y === 50));
}
console.log('Output oef 3:', isVijftig(15, 35), isVijftig(70, -20), isVijftig(50, 180), isVijftig(10, 12));

function startMetHallo(sentence){
    if (!sentence || sentence.substring(0, 6) === 'Hallo'){
        return sentence;
    }
    return 'Hallo' + sentence;
}
console.log('Output oef 4:', startMetHallo('Hello there'), startMetHallo('there'));


function zinSplitsen(str, position){
    let part1 = str.substring(0, position);
    let part2 = str.substring(position + 1, str.length);
    return (part1 + part2);
}
console.log('Output oef 5(a):', zinSplitsen('Voorbeeld', 1), zinSplitsen('Voorbeeld', 4));


function zinSplitser(str, postion){
    return str.slice(0, postion) + str.slice(postion + 1);
}
console.log('Output oef 5(b):', zinSplitser('Voorbeeld', 1), zinSplitser('Voorbeeld', 4));


function alleWoordenStartenMetHoofdletter(sentence){
    let splitStr = sentence.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
console.log('Output oef 6:', alleWoordenStartenMetHoofdletter('elk woord zou moeten beginnen met een hoofdletter'));


function telDeKlinkers(name){
    let count = 0;
    for (let i = 0; i < name.length; i++){
        if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === '0' || name[i] === 'u')
            count = count + 1;
    }
    return count;
}
console.log('Output oef 7:', `De inputstring bevat ${telDeKlinkers('oefening')} klinkers`);

function maxValue(x, y, z) {
    let largestNumber = x;
    if (y > largestNumber) {
        largestNumber = y;
    }
    if (z > largestNumber) {
        largestNumber = z;
    }
    return largestNumber; // of: Math.max(x,y,z)
}
console.log('Output oef 8:', `Het grootste nummer is ${maxValue(12, 5, 25)}`);

function printDriehoek(numberOfCharacters){
    let output = '';
    for (let i = 0; i <= numberOfCharacters; i++) {
        for (let j = 0; j < i; j++) {
            output += '#';
        }
        console.log(output);
        output = '';
    }
}
printDriehoek(7);

// Vraag 1b
function printDriehoekOmgekeerd(numberOfCharacters) {
    for (let i = 0; i < numberOfCharacters; i++) {
        let output = '';
        for (let j = 1; j < numberOfCharacters-i; j++) {
            output = output + ' ';
        }
        for (let k = 1; k <= (i+1); k++) {
            output = output + '#';
        }
        console.log(output);
    }
}
printDriehoekOmgekeerd(7);

// Vraag 1c
function printDriehoekPyramide(numberOfCharacters) {
    for (let i = 0; i < numberOfCharacters; i++) {
        let output = '';
        for (let j = 1; j < numberOfCharacters-i; j++) {
            output = output + ' ';
        }
        for (let k = 1; k <= (2*i+1); k++) {
            output = output + '#';
        }
        console.log(output);
    }
}
printDriehoekPyramide(7);

// Vraag 1d
function printDriehoekPyramideInterval(numberOfCharacters, interval) {
    let count = 0;
    for (let i = 0; i < numberOfCharacters; i++) {
        let output = '';
        for (let j = 1; j < numberOfCharacters-i; j++) {
            output = output + ' ';
        }
        for (let k = 1; k <= (2*i+1); k++) {
            if (count % interval === 0){
                output += '@';
            }else{
                output = output + '#';
            }
            count++;
        }
        console.log(output);
    }
}
printDriehoekPyramideInterval(7, 5);

// Vraag 2
function printGetallen() {
    let output = '';
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0){
            output += 'Fizz';
        }else if (i % 3 !== 0 && i % 5 === 0){
            output += 'Buzz';
        }else if (i % 3 === 0 && i % 5 === 0){
            output += 'FizzBuzz';
        }else{
            output += i + '';
        }
    }
    console.log(output);
}
printGetallen();

// Vraag 3
function schaakBord(grootte) {
    let output;
    for (let i = 0; i < 10; i++) {
        output = '';
        for (let j = 0; j < grootte; j++) {
            if (j % 2 === 0){
                output += '#';
            }else{
                output += ' ';
            }
        }
        console.log(output);
    }
}
schaakBord(8);

function Random(){
    let Naam;
    let Achternaam;
    let Leeftijd;
    let Beroep;
    let Waarom;

    Naam = prompt('Geef jouw naam in?');
    Achternaam = prompt('Geef jouw achternaam in?');
    Leeftijd = parseInt(prompt('Geef jouw leeftijd in?'));
    if (Leeftijd > 0 && Leeftijd < 100){
        alert('Leeftijd is correct')
    }else{
        Leeftijd = alert('Geef een correcte leeftijd in.');
        Leeftijd = null;
    }
    Beroep = prompt('Geef je beroep in?');
    Waarom = prompt('Waarom doe je dit beroep?');
    document.getElementById('Antwoorden').innerText = `Mijn naam is ${Naam} ${Achternaam} ik ben ${Leeftijd} jaar oud en ik doe ${Beroep} als beroep, daarom heb ik voor dit beroep gekozen: ${Waarom}`;

}
function Omuitteproberen() {
    let Woonplaats;

    Woonplaats = prompt('Waar woont u?');
    while (Woonplaats.toLowerCase() !== 'sesame') {
        alert("Geef een juiste woonplaats in.")
        Woonplaats = prompt("Waar woont u?")
    }
    document.getElementById('Woonplaats').innerText = `De stad waar ik woon is ${Woonplaats}, dit is een van de mooiste steden uit het land en ik woon hier al meerdere jaren om te verkomen dat de stad zou vervuilen heeft de stad besloten om alle auto die diezel gebruiken te verbannen van het centrum, dit betekend voor diegene die nog een diezel auto hebben dat zij niet meer in het centrum kunnen en mogen komen wegens dat je anders een boete van over de 100 euro kan verwachten.`
}
function Test(){
    let Punten;

    Punten = parseInt(prompt('Geef je laatste cijfer in.'));
    if (Punten >= 0 && Punten <= 5) {
        alert("Dat is een laag cijfer!");
    }else if(Punten > 5 && Punten <= 10){
        alert("Wat een mooie score heb je hier gehaald!");
    }else{
        alert("Geef een correct getal in tussen de 0 en 10.");
    }
}
function Else(){
    let oefening;

    Oefening = prompt('Geef een eigen oefening op.');
    if (Oefening === false){
        console.log(Oefening);
    }else{
        console.log('Niet mogelijk');
    }
}