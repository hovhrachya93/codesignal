//  Given a string s consisting of small English letters, 
// find and return the first instance of 
// a non-repeating character in it.
// If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return s[i];
        }
    } return '_';
}


// function firstNotRepeatingCharacter(s){
//     r = {}
//     for (e of s)
//         r[e] = -~r[e]
//     for (e in r)
//         if (r[e] == 1)
//             return e
//     return '_'
// }


// function firstNotRepeatingCharacter(s) {   
//     var arr = s.split("");
//     for(var i = 0; i < arr.length; i++){
//         var chr = arr[i];
//         if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
//             return arr[i]
//         }       
//     }
//     return "_"
// }