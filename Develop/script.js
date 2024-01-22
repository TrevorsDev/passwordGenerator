// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //initial comment for creating new feature branch
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// adding something to see if I can push into git repo