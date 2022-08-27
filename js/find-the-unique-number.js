/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
    //find, find the first value to satisfy the testing function
    // this function would find the only unique character because the indexOf and lastIndexOf would be the same since it only has the one occurance

  }

  findUniq([ 1, 5, 1 ]) 

//   findUniq([ 1, 1, 1, 2, 1, 1 ]) //2

/* ------------------- NOTES ------------------ */

//DID NOT GET, ADDING COMMENTATION FOR LEARNING