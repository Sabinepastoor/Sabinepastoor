/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
function change(){
    var image = document.getElementById('Collage');
    image.src = "img/Layout-100.jpg"
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
