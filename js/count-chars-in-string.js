/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

// function count (string) {
//   let str = string.split('')
//   console.log(str)
//   let result = str.reduce((n,a) => (n[a] = (n[a] || 0) + 1, n), {})
//   return result
//   }



//{a: 2, b:1}


/* ------------------- NOTE ------------------- */


function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {

     count[s] ? count[s]++ : count[s] = 1;
     console.log(count[s])
  });
  return count;
} 

count("aba")