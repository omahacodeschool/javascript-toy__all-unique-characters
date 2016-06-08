module.exports = {
  all_unique: function(str){
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
