/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */


var uniqueInOrder = function(iterable){
    //your code here - remember iterable can be a string or an array

    if(Array.isArray(iterable) === true){
        let arrArr = []
        for (let i = 0; i < iterable.length; i++){
            if(iterable[i] !== iterable[i+1]) {
                arrArr.push(iterable[i])
            }
        }
        return arrArr
    } else {
        let stringArr = []
        let split = iterable.split('')
        for (let i = 0; i < iterable.length; i++){
            if(split[i] !== split[i+1]) {
                stringArr.push(split[i])
            }
        }
        return stringArr
    }


  }

// uniqueInOrder('AAAABBBCCDAABBB')
// uniqueInOrder([1,2,2,3,3])




/* ------------------- NOTES ------------------ */

//DID SHEE JUST DO A 6KYU ON THE FIRST TRY BY HERSELF??! HUH WHO IS THIS QUEEN. SHE DESERVES PIZZA FOR SURE. 
//On a serious note, this is DRY AF code. Can't wait to see the best in show

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

  //ooof