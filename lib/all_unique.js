module.exports = {
  all_unique: function(str){
    var arr = str.split("");
      for (var i = 0; i < arr.length; ++i){
        for (var j =0; j < arr.length; ++j){
          if (arr[i] == arr[j] && i != j){
            return false;
        }
      }
    } return true;
  }
};