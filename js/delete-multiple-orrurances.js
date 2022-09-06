/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

//PREP
function deleteNth(arr,x) {
    //empty object
    var cache = {};
    //filters through the array. Taking the each number as a parameter
    return arr.filter(function(n) 
    {
        //To the best of my understanding this is how you see all of your data in a nice little object. I had this before. The 0 is where you start, the +1 is everytime the condition is met it will ad one. Somehow this keeps a running tally of your numbers. Which is accessed with cache[n] to compare in the last time if its greater than the number you put in. 
        cache[n] = (cache[n] || 0) + 1;
        //Since the last 2 does not meet the conditional it doesn't get returned to the cache object
        return cache[n] <= x
    });
  }

  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) //[1, 1, 3, 3, 7, 2, 2, 2]

//Parameters: taking in an array and also a random number. This number is how many times an element can be repeated in the array
//Results: We are expecting to get back a new array (think map or filter) with the same order, but only a *n* number of repeats


/* -------------------------------------------- */
/*                     NOTES                    */
/* -------------------------------------------- */

//Didn't get going in to psuedocode answer
