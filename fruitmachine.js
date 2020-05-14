const imgfruit1 = document.getElementById("fruit1");
const imgfruit2 = document.getElementById("fruit2");
const imgfruit3 = document.getElementById("fruit3");
const btnSpin = document.getElementById("spin");
const btnCollectWinnings = document.getElementById("collectwinnings");
const txtcredit = document.getElementById("credit");
const txtwinnings = document.getElementById("Winnings");
const button = document.getElementById("button")
// setting the values that are needed 

btnSpin.addEventListener("click", spin);
btnCollectWinnings.addEventListener("click", collectwinnings);
button.addEventListener("click", buttonClick)
// setting the event for the buttons 

var i = 0;
var x = 0;
// the values of the variables 

function buttonClick() {
    i++;
    document.getElementById('credit').innerHTML = i;
}

function spin() {
    i--;
    document.getElementById('credit').innerHTML = i;
 {
        let fruit1 = Math.floor(Math.random() * 7) + 1;
        imgfruit1.setAttribute("src", "fruitmachineresources/fruit" + fruit1 + ".png");
        credit--;
        // select a random image from the folder selected 

        let fruit2 = Math.floor(Math.random() * 7 + 1);
        imgfruit2.setAttribute("src", "fruitmachineresources/fruit" + fruit2 + ".png");
        credit--;
// selet a random image from the folder 
        let fruit3 = Math.floor(Math.random() * 7) + 1;
        imgfruit3.setAttribute("src", "fruitmachineresources/fruit" + fruit3 + ".png");
        credit--;
// select a random image from the folder
        btnCollectWinnings.disabled = false;
        //enable the winnings button to the user 



        if (fruit3 == fruit2 || fruit1 == fruit2) {
            x = x + 5;
            // if 2 of the images have the same value then plus 5 to the value of the winnings 
            document.getElementById('Winnings').innerHTML = x;
        }  if (fruit1==fruit2&&fruit2==fruit3)
            x = x + 10;
            // if all 3 images are the same then plus 10 to the value 
        document.getElementById('Winnings').innerHTML = x;
    }

}
function collectwinnings() {
    if (i > 0){
    alert("Winnings have been collected. Game reset");
    window.location.reload();
    // when the buttons is clicked set the values back down to 0 
    // reset the game 
    }

}