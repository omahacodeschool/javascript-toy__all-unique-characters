module.exports = {
  all_unique: function(str){
    var separatedString = str.split("").sort();
    if (separatedString.length === 1){
        return true;
    }
    for (var currentChar = 0; currentChar < separatedString.length; currentChar++){
      //for (var nextChar = 1; nextChar < separatedString.length; nextChar++){
        if (separatedString[currentChar] === separatedString[currentChar+1]){
            return false;
        }
    }
    return true;
   }
};

/* Algorithmic Thought Process:
  First check if there is only one character in the string. If there's only one
  character in the string then it is not repeated so return the string. If there
  is more than one character in the string, go through each character and compare
  the current character with each other character in the string. If the two characters
  that are being compared are the same, return false. If there isn't any matching
  characters in the string, return true.
*/