module.exports = {
  all_unique: function(str){
    var ListOfLetters = str.split("");
    var NumberOfMatches, i, j;
    var Unique = true;
    for (i = 0; i < ListOfLetters.length; i++){
      NumberOfMatches = 0;
      for (j = 0; j < ListOfLetters.length; j++){
        if (ListOfLetters[i] === ListOfLetters[j]){
          NumberOfMatches = NumberOfMatches + 1;
        }
      }
      if (NumberOfMatches > 1){
        Unique = false;
      }
    }
    return Unique;
  }
};