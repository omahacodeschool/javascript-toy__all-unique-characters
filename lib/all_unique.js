// For each character within the string, check for repeating characters for each character in the string.
// If a character repeats, return true. If a character does not repeat, return false.
module.exports = {
    all_unique: function(str) {
        for (var x = 0; x < str.length; x++) {
            for (var y = 0; y < str.length; y++) {
                if (x == y) {} else {
                    if (str.charAt(x) == str.charAt(y)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}