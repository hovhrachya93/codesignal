// Given a rectangular matrix of characters, 
// add a border of asterisks(*) to it.

function addBorder(picture) {
    var borderLength = picture[0].length + 2; 
    var border = "";
  
    for (var i = 0; i < borderLength; i++) {
      border = border.concat("*");
  
    }
    picture.unshift(border);
    picture.push(border); 
  
    for(var j = 1; j < picture.length -1; j++){
      picture[j] = "*".concat(picture[j], "*");
    }
  
    return picture;
  }

//   function addBorder(picture) {
//     var width = picture[0].length + 2;
//     return [
//         '*'.repeat(width),
//         ...picture.map(line => `*${line}*`),
//         '*'.repeat(width)
//     ];
// }


// addBorder = p => [(t = p[0].replace(/./g, '*')+'**'), ...p.map(v => `*${v}*`), t]
