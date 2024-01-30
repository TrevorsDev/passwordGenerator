// Assignment code here. This is going to be the code
//used to generate our password when we click the button


//var specArr = specialCharacters.split('');

function generatePassword() {

  var specialCharacters = '!@#$%^&*'.split('');
  var numbers = '123456789'.split('');
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upperCase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');

  //create prompt when button is clicked -> ask 3 criteria choices for password
  let needsCapital = prompt("Do you want uppercase letters?", " Type yes or no");
  let needsSpecial = confirm("Do you want special characters");
  let needsNumbers = confirm("Do you want numbers");

  const morphToUpper
  if (needsCapital === "yes")

  

return
}

// Get references to the #generate element
//everything will refer to this button click
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//This will take the generated pswrd and spit it into the 
//textarea on the screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //initial comment for creating new feature branch
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// adding something to see if I can push into git repo