/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/



var secImg = false;

function change1() {
    // functie wordt aangeroepen in de HTML
    var image = document.getElementById('NPD');

    secImg = !secImg;
    // ! betekent omgekeerde van wat het is

    if (secImg)
        image.src = "img/Ontwerphandleiding.png";
    else
        image.src = "img/UX-Storyboard NPD-8.png";
}
// tutorial https://www.youtube.com/watch?v=hIRjlG-gbuI
function insertText() {
    var select = document.getElementById("subject_input"),
        txtVal = document.getElementById("newValue").value,
        newOptie = document.createElement("option"),
        newOptieVal = document.createTextNode(txtVal);
    // de nieuwe optie komt onder de opties die al bestaan in het dropdown menu
    newOptie.appendChild(newOptieVal);
    select.insertBefore(newOptie, select.lastChild);
}
var secImg = false;

function change2() {
    // functie wordt aangeroepen in de HTML
    var image = document.getElementById('WEB');

    secImg = !secImg;
    // ! betekent omgekeerde van wat het is

    if (secImg)
        image.src = "img/wireflow-web.png";
    else
        image.src = "img/One_page-Rationale-100.jpg";
}
// tutorial https://www.youtube.com/watch?v=hIRjlG-gbuI
function insertText() {
    var select = document.getElementById("subject_input"),
        txtVal = document.getElementById("newValue").value,
        newOptie = document.createElement("option"),
        newOptieVal = document.createTextNode(txtVal);
    // de nieuwe optie komt onder de opties die al bestaan in het dropdown menu
    newOptie.appendChild(newOptieVal);
    select.insertBefore(newOptie, select.lastChild);
}
var secImg = false;

function change3() {
    // functie wordt aangeroepen in de HTML
    var image = document.getElementById('MI');

    secImg = !secImg;
    // ! betekent omgekeerde van wat het is

    if (secImg)
        image.src = "img/instagram-gedrag.png";
    else
        image.src = "img/Maatschappij_en_Interactie.png";
}
// tutorial https://www.youtube.com/watch?v=hIRjlG-gbuI
function insertText() {
    var select = document.getElementById("subject_input"),
        txtVal = document.getElementById("newValue").value,
        newOptie = document.createElement("option"),
        newOptieVal = document.createTextNode(txtVal);
    // de nieuwe optie komt onder de opties die al bestaan in het dropdown menu
    newOptie.appendChild(newOptieVal);
    select.insertBefore(newOptie, select.lastChild);
}
var secImg = false;

function change4() {
    // functie wordt aangeroepen in de HTML
    var image = document.getElementById('project');

    secImg = !secImg;
    // ! betekent omgekeerde van wat het is

    if (secImg)
        image.src = "img/Feather illustrated.jpeg";
    else
        image.src = "img/feather.jpg";
}
// tutorial https://www.youtube.com/watch?v=hIRjlG-gbuI
function insertText() {
    var select = document.getElementById("subject_input"),
        txtVal = document.getElementById("newValue").value,
        newOptie = document.createElement("option"),
        newOptieVal = document.createTextNode(txtVal);
    // de nieuwe optie komt onder de opties die al bestaan in het dropdown menu
    newOptie.appendChild(newOptieVal);
    select.insertBefore(newOptie, select.lastChild);
}
var secImg = false;

function change5() {
    // functie wordt aangeroepen in de HTML
    var image = document.getElementById('Collage');

    secImg = !secImg;
    // ! betekent omgekeerde van wat het is

    if (secImg)
        image.src = "img/Layout-100.jpg";
    else
        image.src = "img/Collage-Art-Deco.jpg";
}
// tutorial https://www.youtube.com/watch?v=hIRjlG-gbuI
function insertText() {
    var select = document.getElementById("subject_input"),
        txtVal = document.getElementById("newValue").value,
        newOptie = document.createElement("option"),
        newOptieVal = document.createTextNode(txtVal);
    // de nieuwe optie komt onder de opties die al bestaan in het dropdown menu
    newOptie.appendChild(newOptieVal);
    select.insertBefore(newOptie, select.lastChild);
}
var secImg = false;

function change6() {
    // functie wordt aangeroepen in de HTML
    var image = document.getElementById('Wireflow');

    secImg = !secImg;
    // ! betekent omgekeerde van wat het is

    if (secImg)
        image.src = "img/wireflow-spotify.png";
    else
        image.src = "img/Wireflow-100.jpg";
}
// tutorial https://www.youtube.com/watch?v=hIRjlG-gbuI
function insertText() {
    var select = document.getElementById("subject_input"),
        txtVal = document.getElementById("newValue").value,
        newOptie = document.createElement("option"),
        newOptieVal = document.createTextNode(txtVal);
    // de nieuwe optie komt onder de opties die al bestaan in het dropdown menu
    newOptie.appendChild(newOptieVal);
    select.insertBefore(newOptie, select.lastChild);
}


