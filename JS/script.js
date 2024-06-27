let y = Math.floor(Math.random() * 100 + 1);

// Counting the number of guesses
// made for correct Guess
let guess = 0;

document.getElementById("submitguess").onclick = function () {

    // Number guessed by user    
    let x = document.getElementById("guessField").value;

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }

    /* If guessed number is greater than actual number*/
    else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
    if (guess == 10) {
        document.getElementById("guessField").value = "";
        document.getElementById("guessField").disabled = true;
        document.getElementById("submitguess").disabled = true;
        alert("You have tried the maximum number of attempts");
        if (confirm("Want to try again???")) {
            guess = 0;
            y = Math.floor(Math.random() * 100 + 1);
            document.getElementById("guessField").disabled = false;
            document.getElementById("submitguess").disabled = false;
        }
    }
}