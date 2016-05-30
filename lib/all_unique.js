module.exports = {
  all_unique: function(str){
    var chars = str.split("");
    for (var i = 0; i < chars.length; i++) {
      for (var j = 0; j < chars.length; j++) {
        if (chars[i] === chars[j] && i !== j) {
          return false;
        }
      }
    }
    return true;
  }
}