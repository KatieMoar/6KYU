/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function solution(str){
    var i = 0;
    var result = []
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    console.log (result)
  }


solution("abcdefg") // ["ab", "cd", "ef"]

/* -------------------------------------------- */
/*                     NOTES                    */
/* -------------------------------------------- */

//HAD GOOD IDEAS, JUST COULDNT GET THERE