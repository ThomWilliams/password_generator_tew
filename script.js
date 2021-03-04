// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function
function generatePassword() {

  // Local variables defined 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacter = " !#$%&'()*+,-./:;<=>?@][^_`{|}~";

  var characterOptions = "";
  var finalPassword = "";
  
  
  var lengthOfPassword = window.prompt("How many characters long would you like your password to be?");

  // if no length of password is in inputted or left blank, return to start
    if (!lengthOfPassword) {
      alert("please enter a number of characters between 8 - 128");
      return finalPassword("");
    }
// if length < 8 characters is in inputted, return to start
    if (lengthOfPassword < 8) {
     alert("Please select a length greater than 8 characters");
     return finalPassword("");
    } 

    // if length > 128 characters is in inputted, return to start
    if (lengthOfPassword > 128) {
      alert("Please select a length less than 128 characters");
      return finalPassword("");
    }

    // if special characters erroneously inputted, return to start
    if (specialCharacter) {
      alert("Please enter numerical values only");
      return finalPassword("");
    }


  // fix bug: determine reponse if character length of password is cancel, or left empty

  // if (lengthOfPassword === false) { 
  // alert("Please select desired number of characters");
  //return;
 //}


 // if the length of the password is less than 128 characters it is void //
  var useUppercase = confirm("Confirm OK if you would like to use upper case letters in your password?")
  if (useUppercase === true) {
    characterOptions += upperCase
  }

  var useLowercase = confirm("Confirm OK if you would like to use lowercase letters in your password?")
  if (useLowercase === true) {
    characterOptions += lowerCase
  }

  var useNumbers = confirm("Confirm OK if you would like to use numbers in your password?")
  if (useNumbers === true) {
    characterOptions += numbers
  }

  var usespecialCharacter = confirm("Confirm OK if you would like to use any special characters in your password?")
  if (usespecialCharacter === true) {
    characterOptions += specialCharacter 
  }

  // fix bug: if no characters are selected (cancelled)
   //   else {
    //   alert("Please select at least one type of character")}
  

  for (var i = 0; i <= lengthOfPassword; i++) {
    finalPassword += characterOptions[Math.floor(Math.random() * characterOptions.length)]
  }

  return finalPassword;

  


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  /* build generatePassword function - it needs to be written before it's called. */

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* event listener correlates with "Click" ID and button in the HTML -

1st argument is click, second is write password


/*





Determine rules for automated output - CONDITIONAL STATEMENTS (IF / ELSE) STATEMENTS?
- characters can only be 8 - 128 characters long
- 1 lowercase, 1 upper case, 1 special, 1 numeric


*/

//useful comment tips: https://www.w3schools.com/js/js_comments.asp