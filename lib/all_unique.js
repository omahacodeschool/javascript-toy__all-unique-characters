module.exports = {
  all_unique: function(str){
    
    var x = 0;
    var y =0;
    
    while (x < str.length){
      
      
      while (y < str.length){
        
        if (str.charAt(x) != str.charAt(y) || x == y){
        
         y += 1;
       
       
        }else{
          return false;
        }
      }
      
       x += 1;
       y = 0;
    }
     return true;
  }
}