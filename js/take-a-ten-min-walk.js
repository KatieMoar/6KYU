/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function isValidWalk(walk) {
    let nsCounter = 0
    let ewCounter = 0
    if(walk.length !== 10) {
        console.log(false + " " + "does not equal 10")
    } else {
        for(let i = 0; i < walk.length; i++){
            if(walk[i] === 'n') {
                nsCounter++
            } else if(walk[i] === 's'){
                nsCounter--
            } else if(walk[i] === 'e'){
                ewCounter++
            } else if (walk[i] === 'w'){
                ewCounter--
            }
        }
        console.log(ewCounter)
        console.log(nsCounter)
        if (nsCounter === 0 && ewCounter === 0) {
            console.log(true)
        } else {
            console.log(false + " " + "does not equal have proper count")
        }
    }
    console.log(walk)
  }



/* -------------- TEST CONDITIONS ------------- */


  isValidWalk([
    'n', 'w', 'n', 'w',
    'n', 'w', 'n', 'w',
    'n', 'w'
  ])// 'should return false'
// isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])// 'should return false'
// isValidWalk(['w'])// 'should return false'
// isValidWalk(['n','n','n','s','n','s','n','s','n','s'])// 'should return false'


//PREP
//Parameters: Taking in an array of letters coordinated to the direction you're walking
//Returns: true or false boolean, you want to walk EXACTLY 10 letters. And be back at your starting point