// Assignment code here
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capitalLetters = [ 'A', 'B', 'C', 'D', 'E', "F", 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'R', 'U', 'V', 'W', 'X', 'Y', 'Z']; 





var promptUser = function() {
 var passwordLength = window.prompt("How long would you like your password to be?")
 if (passwordLength <8 ||passwordLength>128){
  alert("Your passwords needs to be more than eight characters and less than 128 characters")
  return
 }

  
  
  var confirmCapital = window.confirm ("Do you want capital letters?")
  var confirmLowers = window.confirm ("Do you want lower case letters?")
  var confirmSymbols= window.confirm ("Do you want any special symbols?")
  var confirmNumbers= window.confirm ("Would you like numbers?")
  
var userChoice= {
  capital: confirmCapital,
  Lower : confirmLowers,
  symbols : confirmSymbols,
  numbers : confirmNumbers,
  length : passwordLength,

}
console.log (userChoice)
return userChoice
}


function  randomRay(options){
  var index = Math.floor(Math.random() * options.length);
  var indexValue = options[index]
  return indexValue
}



function generatePassword () {
  console.log ["button"]
var userAnswers = promptUser ()
var characterPool = []
var finalPassword = []


if (userAnswers.capital === true){
  characterPool=characterPool.concat(capitalLetters)
  characterPool.push(randomRay(capitalLetters))
}
if (userAnswers.Lower === true){
  characterPool=characterPool.concat(lowerCase)
  characterPool.push(randomRay(lowerCase))
}
if (userAnswers.symbols === true){
  characterPool=characterPool.concat(specialCharacters)
  characterPool.push(randomRay(specialCharacters))
}
if (userAnswers.numbers === true){
  characterPool=characterPool.concat(numericCharacters)
  characterPool.push(randomRay(numericCharacters))
}

for (var i=0; i<userAnswers.length; i ++){
  var stageArray= randomRay(characterPool)
  finalPassword.push (stageArray)
};
console.log (finalPassword)

return finalPassword.join("")
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

