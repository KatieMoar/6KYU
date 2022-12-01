/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

//PREP
//Parameters: Taking a number
//Return: Multiple ararys. 


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
multiplicationTable = function(size) {
    let result = []
    let final = []
    for (var i = 0; i <= size; i++) {
        for (var j = 0; j <= size; j++) {
            if(i > 0 && j > 0){
                result.push(i * j)
            }
        }
    }
    for(let i = 0; i < result.length; i+=size){
        console.log(i+=size)
        final.push(result.slice(i , i+size))
    }
    console.log(final)

  }



/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]
