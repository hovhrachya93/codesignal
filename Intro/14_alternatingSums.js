// Several people are standing in a row and need to be divided into two teams.
// The first person goes into team 1, the second goes into team 2,
// the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people.
// Return an array of two integers, where the first element is the total weight of team 1,
// and the second element is the total weight of team 2 after the division is complete.

function alternatingSums(a) {
    firstTeam = 0;
    secondTeam = 0;
  
    a.forEach((elmt, index) => {
      // forEach: call once for each element in an array in order
      if (index % 2 === 0) {
        firstTeam += elmt;
      } else {
        secondTeam += elmt;
      }
    });
    return [firstTeam, secondTeam];
  }
  


  // alternatingSums = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])


  