// Assignment code here
var alphaNumericCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`"]
console.log(alphaNumericCharacters);

var pwdCriteria = function() {
  var pwdCriteriaLength = prompt("How long would you like the password? The password can be between 8 and 128 characters long.");
  pwdCriteriaLength = parseInt(pwdCriteriaLength);
  console.log(pwdCriteriaLength);
  console.log(typeof pwdCriteriaLength);

  if (pwdCriteriaLength < 8 || pwdCriteriaLength > 128 || pwdCriteriaLength == null) {
    console.log("Invalid");
    alert("You must choose a valid number.");
    return pwdCriteria();
    } else {
      console.log("Valid")
      var pwdCriteriaLower = confirm("Would you like lowercase alphanumeric characters included?");
      var pwdCriteriaUpper = confirm("Would you like UPPERCASE alphanumeric characters included?");
      var pwdCriteriaNumbers = confirm("Would you like numbers included?");
      var pwdCriteriaSpecial = confirm("Would you like special characters included?");
      console.log(pwdCriteriaLength + pwdCriteriaLower + pwdCriteriaNumbers + pwdCriteriaUpper + pwdCriteriaSpecial);
    }
}

pwdCriteria();

// var passwordCriteria = function() {
//   if (pwdCriteriaLength >= 8 || pwdCriteriaLength >= 128 || typeof(pwdCriteriaLength) !== "number") {
//     return passwordCriteria(); 
//   } 
//   else {
//   }
// }

// function name(params) {
  
// }

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
