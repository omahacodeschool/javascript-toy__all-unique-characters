module.exports = {
  all_unique: function(str){
 
 var i = 0;
 var j = 0;
 
 for (j = str.length - 1; j >= 1; j--){
    for (i = str.length - 2; i >= 0; i--){
      if (i == j){
        i--;
      }
      if (str.charAt(i) == str.charAt(j)){
        return false;
      }{
        
    }
}
}
return true;

}
};