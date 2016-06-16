module.exports = {
  all_unique: function(str){
      var nstring = str.split("");
      for (var i = 0; i < nstring.length; i++){
        // need to loop through it again so that they match
        for (var ii = 0; ii < nstring.length; ++ii){
          if (nstring[i] == nstring[ii] && i != ii){
            return false;
          }
        }
     
      }
     return true;
  }
};