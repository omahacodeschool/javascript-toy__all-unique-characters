module.exports = {
  all_unique: function(str){
    //I approached the code by first converting the string to an array, which is easier for me to manipulate.
    //I established a variable 'total' which can be accessed outside of the following iteration. I sorted the array to put repeated letters
    //next to each other, and then I wrote an if statement comparing each letter to the letters next to it. If there are any
    //repeated letters, the variable total is incremented by one. So at the end of the function, if the total is still 0, 
    //then all of the characters are unique.
    str = str.split("").sort();
    var total = 0;
    for (var i in str) {
      if (str[i] == str [i-1] || str[i] == str[i+1]) {
        total += 1;
      }
    }
    if (total === 0) {
    	return true
    }
    else {
    	return false
    }
  }
};
