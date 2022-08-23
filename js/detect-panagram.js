/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */


// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */


function isPangram(string){
    string = string.toLowerCase()
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(let i = 0; i < alpha.length; i++){
        if(string.indexOf(alpha[i]) < 0 ) {
            console.log(false)
        }
    }
    console.log(true)
}


isPangram("abcdefghijklmopqnrstuvwxyz")

// var string = "This is not a pangram."
// assert.strictEqual(isPangram(string), false)

/* ------------------- NOTES ------------------ */

//Important things learned : .every

function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

//.every will take all elements passed through (here it is the alphabet) and test against the provided function (string to lowercase which includes the letter of the alphabet) it will return a boolean