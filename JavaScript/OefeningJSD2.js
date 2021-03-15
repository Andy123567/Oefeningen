// Oefening 1

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

// Oefening 2
let array = ('Dit is zin 1', 'Dit is zin 2', 'Dit is zin 3');
let output;

array.forEach(zin => { output += ' ' + zin });
alert(Zin1 + ' ' + Zin2 + ' ' + Zin3);
alert(`${Zin1} dit is een doorlopende tekst ${Zin2} en ${Zin3}`);
alert(output);

// Oefening 3
let koekje = 'Ik wil een koekje'
console.log(koekje.charAt(0));
console.log(koekje.charAt(3));
console.log(koekje.lastIndexOf('k'));
console.log(koekje.lastIndexOf('e'));
console.log(koekje.length);

let lasagne = koekje.replace( 'koekje',  'lasagne van de pxl');
document.getElementById( 'lasagne').innerHTML = lasagne.toUpperCase();

let woord = prompt ('geef een woord in');
let lengte = woord.length;
alert(`De lengte van het woord ${woord} is ${lengte}`);

let zin = prompt('Geef een zin in');
let indexOfSpace = zin.indexOf(' ');
console.log('De eerste spatie staat op positie ' + indexOfSpace);

let getal1 = prompt('Geef een getal in');
let getal2 = prompt('Geef een tweede getal in');
let vermenigvuldiging = getal1 * getal2;
let opstellen = parseFloat(getal1)  + parseFloat(getal2);

let uitkomst = 'De uitkomst van de vermenigvuldiging is: ' + vermenigvuldiging;
document.getElementById('uitkomst').innerText = uitkomst;

let oudgenoeg = prompt('Bent je ouder dan 18?');
if (!oudgenoeg === 'ja'){
    alert('sorry, probeer het volgend jaar opnieuw')
}
// oefeningen deel 3

//Controle structuren

let geboortejaar = parseInt( prompt('Geef je geboortejaar'));
let datum = new Date().getFullYear();
let leeftijd = datum - geboortejaar;
if(leeftijd >= 20){
    alert('Je bent oud genoeg om deze webpagina te bezoeken');
}

let sporter = "Just do it!";
let lamzak = "BLijf dan maar lekker liggen";

let vraag2 = window.confirm("sport je graag?");





