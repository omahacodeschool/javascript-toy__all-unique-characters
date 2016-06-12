module.exports = {
  all_unique: function(str){
    var characters = str.split("");
    for (var i = 0; i < characters.length; i++) {
	    for (var j = 0; j < characters.length; j++) {
		    if (characters[i] === characters[j] && i !== j) {
			    return false;
		    }
	    }
    }
    return true;
  }
};