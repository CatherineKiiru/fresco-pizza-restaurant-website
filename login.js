$(document).ready(function(){
});
let theForm = document.forms["pizzaform"];
let pizzaPrices = new Array();
    pizzaPrices["small1"]=800;
    pizzaPrices["medium1"]=1000;
    pizzaPrices["large1"]=1200;
    pizzaPrices["double1"]=200;
    pizzaPrices["thincrust1"]=250;
    pizzaPrices["vegan1"]=300;
    pizzaPrices["roni1"]=200;
    pizzaPrices["cheese1"]=200;
    pizzaPrices["bacon1"]=200;

function getAllPizzaPrices(){
    let AllPizzaPrices=0
    let theForm = document.forms["pizzaform"];
    let pizzaName = theForm.elements["pizza"];
    for(var i=0; i < pizza.length; i++);
} 
if(pizzaName[i].checked){
    allPizzaPrices = pizzaPrices[pizzaName[i].value];
    return pizzaPrices
}


