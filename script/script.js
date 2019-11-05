/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
var secImg = false;

function change(){
    var image = document.getElementById('Collage');

    secImg = !secImg;
    // ! betekent omgekeerde van wat het is

    if(secImg)
        image.src = "img/Layout-100.jpg";
    else
        image.src = "img/Collage-Art-Deco.jpg";
}
// tutorial https://www.youtube.com/watch?v=hIRjlG-gbuI
function insertText(){
    var select = document.getElementById("subject_input"),
        txtVal = document.getElementById("newValue").value,
        newOptie = document.createElement ("option"),
        newOptieVal = document.createTextNode(txtVal);
// de nieuwe optie komt onder de opties die al bestaan in het dropdown menu
    newOptie.appendChild(newOptieVal);
    select.insertBefore(newOptie, select.lastChild);
}
