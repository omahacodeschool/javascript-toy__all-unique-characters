module.exports = {
  all_unique: function(str){
    for (i=0; i<=str.length; i++){
      var x = str.slice(0,1);
      str = str.slice(1);
      if(str.includes(x)){
        return false;
      }
    }
    return true;
  }
}