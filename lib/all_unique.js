module.exports = {
  all_unique: function(str){
    	// If a string contains all unique characters, then it returns true
	var sorted_str = str.split("").sort(); //turned the string into a sorted array of letters. any duplicate letters will be next to each each
	var unique_letters = []; //This empty array will contain the unique letters
	for (var i = 0; i < sorted_str.length ; i++){ //The for loop will go throught the sorted array of letters
		if (sorted_str[i] !== sorted_str[i+1]){ // for each element in sortedstr, it will see if the element in the following position is a different letter.
			unique_letters.push(sorted_str[i]); //if it isn't, that letter is not repeated and gets put in the unique_letters array
		}
	}
  if (sorted_str.length == unique_letters.length) { //If the length of the sorted_str and unique_letters is the same, then all letters are unique.
    return true;
    } 
    else {return false} //if not there are repeated letters
  }
};