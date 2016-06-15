module.exports = {
  all_unique: function(str){
    var abc_string = str.sort();
    var abc_array = abc_string.split("");
    for var x = 0; x < abc_array.length ; x++){
      if abc_arr[x] = abc_arr[x + 1]
    }
    
    
  }
}


#Algorithmic Process
    
    #Convert the string to all lowercase characters - not needed given the tests
    #Convert all the elements in the string to sorted, individual elements in an array
    #Create a loop to see if [0]=[1] if [1]=[2] if [2]=[3] etc
    #If the loop does not find any equalities then the original string contains all unique characters
    #If the loop returns consecutive characters that are equal than you have a string string with repeating characters 