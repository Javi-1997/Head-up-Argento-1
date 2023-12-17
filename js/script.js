const lista=["Ricardo Darín",
"Norma Aleandro",
"Javier Bardem",
"Luis Brandoni",
"Soledad Villamil",
"Ricardo Piglia",
"Cecilia Roth",
"Federico Luppi",
"Mercedes Morán",
"Rodrigo de la Serna",
"Valeria Bertuccelli",
"Alberto Ammann",
"Dolores Fonzi",
"Gastón Pauls",
"Érica Rivas",
"Lito Cruz",
"Leonardo Sbaraglia",
"Susana Giménez",
"Natalia Oreiro",
"Diego Peretti"];

let randomString = lista[Math.floor(Math.random() * lista.length)];

console.log(randomString);

function updateCenteredDiv() {
    var randomString = lista[Math.floor(Math.random() * lista.length)];
    var centeredDiv = document.getElementById('centeredDiv');
    centeredDiv.textContent = randomString;
}

function addStringToArray() {
    var newString = prompt("Enter a new string:");
    if (newString) {
        lista.push(newString);
        updateCenteredDiv();
    }
}

// Initial update of centered div
updateCenteredDiv();

function toggleScale() {
    var button = document.querySelector('button');
    button.classList.toggle('clicked');
}