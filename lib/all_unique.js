module.exports = {
  all_unique: function(str){
    var abc_array = str.split("").sort();
    for (var x = 0; x < abc_array.length ; x++){
      if (abc_array[x] == abc_array[x + 1]){
        delete(abc_array[x]);
      }
        if (abc_array.length == str.length){
          return true;
        }
        else{
          return false;
        }
      }
    }
  };
