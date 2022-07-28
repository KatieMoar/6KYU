/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }

solution('camelCasing')

/* -------------------------------------------- */
/*                     NOTES                    */
/* -------------------------------------------- */

//Came close, had the right idea. Thought I should use map but didn't 
