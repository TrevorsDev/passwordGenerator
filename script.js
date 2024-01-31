/* We begin with a constant variable called gereatePassword which is equal to an arrow function that will
hold all of the programming needed to generate a password when a user clicks the button "generate password
on the web page*/

const generatePassword = () => {

/*Inside the function, I then label and set our main variables equal to the characters that will be used in 
any generated password. Separate variables are defined based on thier relationship w/each other. Ex: uppercase letters
numbers, etc*/
  var specialCharacters = '!@#$%^&*'.split('');
  var numbers = '123456789'.split('');
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upperCase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');

  let confirmChoices = []

  /*Here I'm establishing four fixed variables that store the confirm function as a value, with a string stored
  inside. These four functions, when ran, will display a dialog box to the user with an 'OK' and 'Cancel' button that act as 'true'
  or 'false' answers to the displayed question. Each answer is stored in memory and will be used later. Lastly, i create a variable 
  that stores the 'prompt' function which, when ran, will display a question for the user and a text box for their answer*/
  const needsCapital = confirm("Do you want uppercase letters?");
  const needsLower = confirm("Do you want lower case letters?")
  const needsSpecial = confirm("Do you want special characters?");
  const needsNumbers = confirm("Do you want numbers?");
  const psswrdLength = prompt("How long do you want your password to be?");

  /*Here, 'if' statements are created which individually refer to the users choice of characters for their password. If the user
  confirms that they indeed want capital letters, then needsCapital is equal to 'true' and 'confirmChoices' is ran, so that the
  'confirmChoices' array value and the upperCase array value are stored inside the variable 'let confirmChoices'. Each statement is ran 
  until, at the end, 'confirmChoices' is logged to the console, presenting all of the stored choices of the user.*/
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
/*A new variable called password is set equal to an empty string.  */
  let password = "";
/*A loop is created with a local variable assgined a name of randomCharacter and set equal to the variable confrimChoices (which holds all
  of the users confirmed characters for their password). This value is multiplying the length of the users character choices by a random
  number between 0 and .999 with 'Math.random'. That number is then round down with Math.floor. The password is then */ 
  for (i = 0; i < psswrdLength; i++) {
    let randomCharacter = confirmChoices[Math.floor(Math.random() * confirmChoices.length)];
    password += randomCharacter;
  }
  return password;
}

/*Step 1: This line basically connects JS to the HTML button so we can create the program needed to generate a pasword. 
Written in words to help me understand better, here 'var generateBtn is created. This variable is like an electric guitar whos port is 
connected by a wire. The wire in this case is 'document.querySelector'. This wire connects the electric guitar to an amplifire. In this case
the amplifire is the HTML ID 'generate'. The ID 'generate' is attached to a button. So, the HTML button is tangible and something the user
can interact with, while the JS variable 'generateBtn' is connecting JS to this button via 'document.querySelector'. This allows us as
programmers to create specific actions in the background after a user presses the HTML button to generate a password.*/ 
var generateBtn = document.querySelector("#generate");

/*Step 3: Once the user has clicked the button, this function runs. Inside, a local variable called 'password' is set equal to the global function
I created called 'generatePassword'. Another variable called 'passwordText' selects the HTML textarea (which will display the generated password)
through the ID 'password', and connects the two together so that an action can be performed by JS when the user interacts with the HTML.
Finally 'passwordText.value' is given a value of our locally created variable 'password', which itself is a function created to generate a
password for the user */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //initial comment for creating new feature branch
}

/*Step 2: This line LISTENS for the users CLICK of the button, and runs the function just above. 
Here, bc 'generateBtn' CONNECTS the HTML button to our JS, the next step is to attach a method '.addEventListener' to the JS variable
'generateBtn'. This allows the button to come alive in a sense. With this line of code, when the user clicks on the button, this method
'listens' for the users click, and then runs the function 'writePassword' which we have created above. */
generateBtn.addEventListener("click", writePassword);

