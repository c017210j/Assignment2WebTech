//constants
const availableshows = document.getElementById("availableshows");
const numberofseats = document.getElementById("numberofseats");
const showprice = document.getElementById("showprice");
const Result_1 = document.getElementById("Result_1");
const mod = document.getElementById("mod");
const Eticket = document.getElementById("Eticket");
const boxoffice = document.getElementById("boxoffice");
const post = document.getElementById("post");

//eventlisteners for the drop-downlists, number inputs and the buttons
availableshows.addEventListener("select", add);
numberofseats.addEventListener("select", add);
showprice.addEventListener("click", add);
mod.addEventListener("select", add);
Eticket.addEventListener("click",  calculate);
boxoffice.addEventListener("click", calculate);
post.addEventListener("click", calculate);


//function code for the calculations and the discounts
function add() {

    var availableshows = document.getElementById('availableshows').value;
    var numberofseats = document.getElementById('numberofseats').value;
    var result = availableshows * numberofseats;

    document.getElementById('Results_1').innerHTML =("£" + result.toFixed(2));

    if(numberofseats == 6 || numberofseats == 7 || numberofseats == 8 || numberofseats == 9){
    document.getElementById('Results_2').innerHTML = ("Discount10%")
    var results_2 = result - [availableshows * numberofseats] * 10 / 100;
    document.getElementById('Results_3').innerHTML =("£" + results_2.toFixed(2));
    }
    else if (numberofseats == 10 || numberofseats > 10 ){
    document.getElementById('Results_2').innerHTML = ("Discount15%")
    var results_2 = result - [availableshows * numberofseats] / 100 * 15;
    document.getElementById('Results_3').innerHTML =("£" + results_2.toFixed(2));
    }
    else{
        document.getElementById('Results_2').innerHTML = ("Discount 0%")
    var results_2 = result 
    document.getElementById('Results_3').innerHTML =("£" + results_2.toFixed(2));
    }
    document.getElementById('overallcost').innerHTML = results_2 
}

function calculate(){
    if(document.getElementById('Eticket').checked){
        document.getElementById('mod').innerHTML = ("Eticket");
        document.getElementById('Results4').innerHTML = ("£"+ Eticket.value);
    }
    if(document.getElementById('boxoffice').checked){
        document.getElementById('mod').innerHTML = ("boxoffice");
        document.getElementById('Results4').innerHTML = ("£" + boxoffice.value);
    }
    if(document.getElementById('post').checked){
        document.getElementById('mod').innerHTML = ("post");
        document.getElementById('Results4').innerHTML = ("£" + post.value);
    }
}

function show(){
    if(document.getElementById('availableshows').selected){
        document.getElementById('showandcost').innerHTML = ("Chosen Show And Cost");
        document.getElementById('showandcost').innerHTML = ("availableshows".value);
    }
}