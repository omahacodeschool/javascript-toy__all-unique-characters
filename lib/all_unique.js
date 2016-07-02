module.exports = {
  all_unique: function(str){
    var abc_array = str.split("");
    for (var x = 0; x < abc_array.length ; x++){
      for(var y = 0; y < abc_array.length; y++){
        if (x !== y && abc_array[x] == abc_array[y]){
          return false;
        }
        
      }
    }
    return true;
  }
};
