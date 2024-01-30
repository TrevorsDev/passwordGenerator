/* Assignment code here. This is going to be the code
/used to generate our password when we click the button*/

const generatePassword = () => {

  var specialCharacters = '!@#$%^&*'.split('');
  var numbers = '123456789'.split('');
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upperCase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');

  let confirmChoices = []

  
  const needsCapital = confirm("Do you want uppercase letters?");
  const needsLower = confirm("Do you want lower case letters?")
  const needsSpecial = confirm("Do you want special characters?");
  const needsNumbers = confirm("Do you want numbers?");
  const psswrdLength = prompt("How long do you want your password to be?")

  if (needsCapital) {
    confirmChoices = confirmChoices.concat(upperCase);
  }
  if (needsLower) {
    confirmChoices = confirmChoices.concat(lowerCase);
  }
  if (needsSpecial) {
    confirmChoices = confirmChoices.concat(specialCharacters);
  }
  if (needsNumbers) {
    confirmChoices = confirmChoices.concat(numbers);
  }
  console.log(confirmChoices)

  let password = "";

  for (i = 0; i < psswrdLength; i++) {
    let randomCharacter = confirmChoices[Math.floor(Math.random() * confirmChoices.length)];
    password += randomCharacter;
  }
  return password;
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