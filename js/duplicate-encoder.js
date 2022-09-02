/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      //making the letters all equal and splitting into an array
      .map( function (a, i, w) {
    //array.map(function(currentValue, index, arr), thisValue)
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }


duplicateEncode("dinn") // "((("

//taking in a word
//the output of this code should be every unique letter ( , every duplicate letter )


/* ------------------- NOTES ------------------ */
//Did not get going in to psuedo code to learn
//Important lesson learned about the map function. It can take in the current value, which in this case would be the word. It can take in the index, which in this case doesn't matter, and it can take in the arr we created. 