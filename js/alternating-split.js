/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

// function encrypt(text, n) {
//     text = text.split('')
//     for(let i = 0; i < n; i++){
//         let evenText = ""
//         let oddText = ""
//         for(let i = 0; i < text.length; i++){
//             if(i % 2 === 0){
//                 evenText += text[i]
//             } else {
//                 oddText += text[i]
//             }
//         }
//     text = oddText + evenText
//     }
//     return text
// }

function decrypt(encryptedText, n) {
    encryptedText = encryptedText.split('')
    for(let i = 0; i < n; i++){
        for(let i = 0; i < encryptedText.length; i++){
            if(i % 2 === 0){

            } else {

            }
        }
    }
    console.log(encryptedText)
}


    // encrypt("This is a test!", 0)  // "This is a test!");
    // encrypt("This is a test!", 1)  // "hsi  etTi sats!");
    // encrypt("This is a test!", 2)  // "s eT ashi tist!");
    // encrypt("This is a test!", 3)  // " Tah itse sits!");


    // decrypt("This is a test!", 0)  // "This is a test!");
    decrypt("hsi  etTi sats!", 1)  // "This is a test!");
    // decrypt("s eT ashi tist!", 2)  // "This is a test!");
    // decrypt(" Tah itse sits!", 3)  // "This is a test!");


    //Couldn't get it , even the answer doesn't make sense so thats fun.