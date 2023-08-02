
var numborofOwn=0;
var numborofLost=0;

for (var i=1; i<=5; i++){

    var guessNum= parseInt(prompt("Enter a number form 1 to 5 : "));
    var randomNumber=Math.floor (Math.random()*5)+1;
    
    if(guessNum==randomNumber){
        console.log("You have won");
        numborofOwn++;
    }
    else{
        console.log("You have Lost. Random number was " + randomNumber);
        numborofLost++;
    }
}

document.write("Number of Won = " + numborofOwn + "<br>");
document.write("Number of Lost = " + numborofLost);
