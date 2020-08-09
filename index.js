$(document).ready(function(){

let theForm = document.form['pizzaform'];
let prices = new Array();
prices["small"]=800;
prices["medium"]=1000;
prices["small"]=1200;
prices["crust1"]=200;
prices["crust2"]=250;
prices["crust3"]=300;
prices["pepperoni"]=200;
prices["cheese"]=250;
prices["vegan"]=300;

function getPizzaPrices(){
    let pizzaPrices=0;
    let theForm = document.form['pizzaform'];
    let pizza = theForm.elements['pizza'];
    for(var i=0; i<pizza.length; i++);
    if(pizza[i].checked);

    pizzaPrices = prices[pizza[i].value];
        break;
        alert (pizzaPrices)
    }
});

