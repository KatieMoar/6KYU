/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    console.log( s.split(' ')[as.indexOf(Math.max(...as))] )
  }

//didn't get lets annotate

//splitting it into words. mapping those words to a new array. [...s] is the same thing as s.split('')

//too hard... egh.


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
high('man i need a taxi up to ubud')   // 'taxi');
high('what time are we climbing up the volcano')   // 'volcano'); 
// high('take me to semynak')   // 'semynak');
// high('b aa') // 'b');   