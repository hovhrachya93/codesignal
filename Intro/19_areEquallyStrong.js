// Call two arms equally strong if the heaviest weights
// they each are able to lift are equal. Call two people 
// equally strong if their strongest arms are equally 
// strong (the strongest arm can be both the right and the left),
// and so are their weakest arms. Given your and your friend's arms' 
// lifting capabilities find out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    var yourWeakest = (yourLeft <= yourRight) ? yourLeft : yourRight;
    var yourStrongest = (yourLeft >= yourRight) ? yourLeft : yourRight;
  
    var friendsWeakest = (friendsLeft <= friendsRight) ? friendsLeft : friendsRight;
    var friendsStrongest = (friendsLeft >= friendsRight) ? friendsLeft : friendsRight;
  
    return (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest) ?
      true : false;
  }
  

// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
//     return yourLeft+yourRight === friendsLeft+friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
// }


// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
//     var me = [yourLeft, yourRight].sort().join("");
//     var friend = [friendsLeft, friendsRight].sort().join("");
    
//     return me === friend;
// }
