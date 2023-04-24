// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  var passwordLength = prompt("How many characters? (8-128)");
  if (passwordLength === null) {
   
    return;
  }

  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Lenght should be between 8 and 128 characters, try again.");
    return;
    
  }

  var includeUppercase = confirm("Include lowercase?");
  var includeLowercase = confirm("Include uppercase?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialCharacters = confirm("Include special characters?");
  var password = writePassword();
  
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialCharacters) {
    alert("You must select at least one character type.");
    return;
  }

  var charset = "";
  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers) {
    charset += "0123456789";
  }
  if (includeSpecialCharacters) {
    charset += "!@#$%^&*()-+";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

