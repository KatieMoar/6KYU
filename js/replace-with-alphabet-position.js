/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
//P R E P
function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //creating an alphabet will give me somwhere to look for the numbers
    console.log(text.toLowerCase().split('')
    //has to be lowercase so all values are the same, splitting to see individual characters
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    //Filtering through the text element. Getting the index of the same letter thats in the alphabet.
    //Returning > -1 means there will always be a match found. -1 means false, we don't mwant to print these.
    .map( letter => alphabet.indexOf(letter) + 1 )
    //map creates a new array from the outcome of the brackets
    //this is basically just to add +1 beacuse we started at 0
    .join(' '))
    //joining by spaces to make it look nicer. And we're done.
  }

/* -------------- TEST CONDITIONS ------------- */
alphabetPosition("The sunset sets at twelve o' clock.") //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//Taking in a string
//Should return numbers that coordinate to the respective letter

/* ------------------- NOTES ------------------ */

//Did not get. Going into answer to break it down in PseudoCode
