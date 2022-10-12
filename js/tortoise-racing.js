/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1}

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"



/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function race(v1, v2, g) {
    //take v1 and v2 down to per second
    let secondsV1 = v1 / 3600
    let secondsV2 = v2 / 3600
    let tortAcounter = g
    let tortBcounter = 0
    while(tortAcounter > tortBcounter){
        tortAcounter = tortAcounter + secondsV1
        tortBcounter = tortBcounter + secondsV2
    } 
    let result = tortBcounter / secondsV2

    let hours = result * (1/3600)
    let hoursWhole = Number((hours - Math.floor(hours)).toFixed(15))
    let minutes = hoursWhole * (60/1)
    let minutesWhole = Number((minutes - Math.floor(minutes)).toFixed(15))
    let seconds = minutesWhole * (60/1)

    return[Math.floor(hours),Math.floor(minutes),Math.floor(seconds)]
}


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function race(v1, v2, g) {
    if (v2 < v1) { return null; }
    
    var seconds = Math.floor(g / (v2 - v1) * 3600);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds - h * 3600) / 60);
    var s = seconds - h * 3600 - m * 60;
    
    return [h, m, s];
  }


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
// race(720, 850, 70) // [0, 32, 18]
// race(80, 91, 37) // [3, 21, 49]
race(80, 100, 40) // [2, 0, 0]
// race(720, 850, 37) // [0, 17, 4]



//PREP
//Parameters : Speed of Tortoise A , Speed of Tortoise B and the length A is ahead of B
//Return: An array with hours / minutes / seconds



//IF IT WASNT FOR ROUNDING I WOULD HAVE HAD IT DONT FEEL TOO TOO BAD
