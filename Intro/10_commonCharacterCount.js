// Given two strings,
// find the number of common 
// characters between them.

function commonCharacterCount(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");
    const s1Object = getCharList(s1);
    const s2Object = getCharList(s2);
    let total = 0;
    for (const prop in s1Object) {
        if (s2Object.hasOwnProperty(prop) === true) {
            if (s2Object[prop] < s1Object[prop]) {
                total += s2Object[prop];
            } else {
                total += s1Object[prop];
            }
        }
    }
    return total;
}

function getCharList(word) {
    const wordCount = {};
    for (let i = 0; i < word.length; i++) {
        if (wordCount.hasOwnProperty(word[i]) === false) {
            wordCount[word[i]] = 1;
        } else {
            wordCount[word[i]]++;
        }
    }
    return wordCount;
}


// function commonCharacterCount(s1, s2) {
//     for (var i = 0; i < s1.length; i++) {
//         s2 = s2.replace(s1[i], "!");
//     }
//     return s2.replace(/[^!]/g, "").length;
// }


// function commonCharacterCount(s1, s2) {
//   var a=s1.split(""),r=0
//   while (a.length){
//     var t=a.pop()
//     if(s2.includes(t)){
//       r++
//       s2=s2.replace(t,"")
//     }
//   }
//   return r
// }
