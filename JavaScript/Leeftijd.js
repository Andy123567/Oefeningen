let koekje = 'Ik wil een koekje';
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



