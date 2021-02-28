// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacter = " !#$%&'()*+,-./:;<=>?@][^_`{|}~";

  var characterOptions = "";
  var finalPassword = "";

  var lengthOfPassword = parseInt(prompt("How long would you like your password to be?"))

  if (lengthOfPassword < 8) {
    alert("Please select a length greater than 8");
    return;
  }

  if (lengthOfPassword > 128) {
    alert("Please select shorter number of characters");
    return;
  }

  var useUppercase = confirm("would you like to use upper case letters?")
  if (useUppercase === true) {
    characterOptions += upperCase
  }

  var useLowercase = confirm("Would you like to use any lowercase?")
  if (useLowercase === true) {
    characterOptions += lowerCase
  }

  var useNumbers = confirm("Would you like to use any numbers?")
  if (useNumbers === true) {
    characterOptions += numbers
  }

  var usespecialCharacter = confirm("Would you like to use any special characters?")
  if (usespecialCharacter === true) {
    characterOptions += specialCharacter
  }

  for (var i = 0; i <= lengthOfPassword; i++) {
    finalPassword += characterOptions[Math.floor(Math.random() * characterOptions.length)]
  }
  return finalPassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  /* build generatePassword funtion - it needs to be written before it's called. */

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* event listener paired with button in the HTML -

1st argument is click, second is write password


/*





Determine rules for automated output - CONDITIONAL STATEMENTS (IF / ELSE) STATEMENTS?
- characters can only be 8 - 128 characters long
- 1 lowercase, 1 upper case, 1 special, 1 numeric





*/