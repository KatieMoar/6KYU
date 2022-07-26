/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function likes(names) {
    //for loop through the names
    let multipleNamesLength = names.length - 2
        if(names.length === 0) {
            return("no one likes this")
        } else if (names.length === 1){
            return(`${names[0]} likes this`)
        } else if (names.length ===2) {
            return(`${names[0]} and ${names[1]} like this`)
        } else if (names.length === 3) {
            return(`${names[0]}, ${names[1]} and ${names[2]} like this`)
        } else {
            return(`${names[0]}, ${names[1]} and ${multipleNamesLength} others like this`)
        }
  }


//PREP
//Parameters: Will be taking in an array of names
//Returns : Returned will be a string of the name who liked the post. If there are more than 3 people you must put the first two names and then "and *number* others like this"



// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// likes([])
// likes(['Peter'])
// likes(['Jacob', 'Alex'])
// likes(['Max', "John", "Abby"])
likes(['Max', "John", "Abby", "Mark"])