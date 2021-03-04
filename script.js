// Query Selector for Generate Button
var generateBtn = document.querySelector("#generate");

// Event listener - click to begin password generation process
generateBtn.addEventListener("click", writePassword);


//  1ST ARGUMENT - Generate Password Function
function generatePassword() {

  // Local variables defined 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacter = " !#$%&'()*+,-./:;<=>?@][^_`{|}~";

  var characterOptions = "";
  var finalPassword = "";
  
  // Length of Password - prompt asks for required numbers of numerical characters
  var lengthOfPassword = window.prompt("How many characters long would you like your password to be?");

  // if no length of password is in inputted or left blank, return to start
  if (!lengthOfPassword) {
    alert("please enter a number of characters between 8 - 128");
    return finalPassword("")
  }
  // if length < 8 characters is in inputted, return to start
  if (lengthOfPassword < 8) {
    alert("Please select a length greater than 8 characters");
    return finalPassword("")
  } 

  // if length > 128 characters is in inputted, return to start
  if (lengthOfPassword > 128) {
    alert("Please select a length less than 128 characters");
    return finalPassword("")
  }


 // Confirm if the user would like a password with Uppercase characters
  var useUppercase = confirm("Confirm OK if you would like to use upper case letters in your password?")
  if (useUppercase === true) {
    characterOptions += upperCase
  }

  // Confirm if the user would like a password with lowercase characters
  var useLowercase = confirm("Confirm OK if you would like to use lowercase letters in your password?")
  if (useLowercase === true) {
    characterOptions += lowerCase
  }

  // Confirm if the user would like a password with numbers
  var useNumbers = confirm("Confirm OK if you would like to use numbers in your password?")
  if (useNumbers === true) {
    characterOptions += numbers
  }

  // Confirm if the user would like a password with special characters
  var usespecialCharacter = confirm("Confirm OK if you would like to use any special characters in your password?")
  if (usespecialCharacter === true) {
    characterOptions += specialCharacter 
  }

  // If no characters at all are selected, return to start
 if (!usespecialCharacter && !useNumbers && !useUppercase && !useLowercase) {
  alert("Please select at least one type of character");
  return finalPassword("")
  }

  // For loop function uses iterator to define length of password and random fucntion to randomise characters
  for (var i = 0; i <= lengthOfPassword; i++) {
    finalPassword += characterOptions[Math.floor(Math.random() * characterOptions.length)]
  }

  // returns final password
  return finalPassword;

}


// SECOND ARGUMENT - Writes password to the #password input ID
function writePassword() {
  var password = generatePassword();

  // Query Selector for Password output
  var passwordText = document.querySelector("#password");
 
  // Password displayed in Html document
  passwordText.value = password;

}
