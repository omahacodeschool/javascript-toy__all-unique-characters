module.exports = {
  all_unique: function(str){
  
  //Create array from string.
  var arr1 = str.split("");
  
  //Put length of array prior to de-duping into a variable.
  var pre_len = arr1.length;
  
  //Put length of array after de-duping into a variable.
  var post_len = Array.from(new Set(arr1)).length;
  
  //If array length is shorter after de-duping, return as true, else return as false.
  if (pre_len == post_len)
  	return true;
  else return false;
  }
};