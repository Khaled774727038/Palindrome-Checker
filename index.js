var checkPalindrome = function(word){
    var inputWord = word;
    var checkString = inputWord.toLowerCase();
    for(var i = 0; i < checkString.length/2; i++){
      if(checkString[i] != checkString[checkString.length-i-1]){
        return false; 
      }
    }
    return true;
  }
  
  var output = checkPalindrome("rasecar");
  console.log(output);//false
  
  let anotheroutput = checkPalindrome("holloh");
  console.log(anotheroutput);//true