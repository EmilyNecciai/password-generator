// Assignment code here

// PASSWORD CRITERA COLLECTION FUNCTION
var generatePassword = function() {
  var password = "";

  //LENGTH - REQUIRED
  var pwdCriteriaLength = prompt("How long would you like the password? The password can be between 8 and 128 characters long.");
  // pwdCriteriaLength = parseInt(pwdCriteriaLength);
  // console.log(pwdCriteriaLength);
  // console.log(typeof pwdCriteriaLength);

  if (pwdCriteriaLength < 8 || pwdCriteriaLength > 128 || pwdCriteriaLength == null || isNaN(pwdCriteriaLength) == true) {
    // console.log("Invalid");
    alert("You must choose a valid number.");
    return generatePassword();
    } else {
      // console.log("Valid")
      var pwdLength = parseInt(pwdCriteriaLength);
      // console.log("Your password will be " + pwdLength + " characters long.");
      // console.log(typeof pwdLength);

      var pwdCompile = function() {
        var alphaNumericCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
        var specialCharacters = ["!#$%&()*+-./:;<=>?@^_`"]
        var validNumbers = [1234567890];
        // console.log(validNumbers);

        //PWD CRITERIA CONFIRM QUESTIONS AND IF STATEMENTS
        var pwdCriteriaLower = confirm("Would you like lowercase letters included?");
        var pwdCriteriaUpper = confirm("Would you like UPPERCASE letters included?");
        var pwdCriteriaNumbers = confirm("Would you like numbers included?");
        var pwdCriteriaSpecial = confirm("Would you like special characters included?");
        var passwordArray = "";
    
        if (pwdCriteriaLower == false && pwdCriteriaUpper == false && pwdCriteriaNumbers == false && pwdCriteriaSpecial == false) {
          alert("You must choose at least one option.");
          return pwdCompile();
        } else {
          if (pwdCriteriaLower == true) {
            var alphaNumericCharactersLower = alphaNumericCharacters.toString().toLowerCase().split(",");
            // console.log(alphaNumericCharactersLower);
            passwordArray = passwordArray.concat(alphaNumericCharactersLower);
          } 

          if (pwdCriteriaUpper == true) {
            // console.log(alphaNumericCharacters);
            passwordArray = passwordArray.concat(alphaNumericCharacters);
          } 

          if (pwdCriteriaNumbers == true) {
            passwordArray = passwordArray.concat(validNumbers.toString());
            // console.log(validNumbersString);
          } 

          if (pwdCriteriaSpecial == true) {
            // console.log(specialCharacters);
            passwordArray = passwordArray.concat(specialCharacters);
          }
          // COMPILE INTO ARRAY TEST
          // console.log(passwordArray);
        }

          // RANDOMLY SELECT FROM ARRAY
          for (var i = 0; i < pwdLength; i++) {
            password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
            // password = "";
          }
        }

        //CALL FUNCTION
      pwdCompile();
      }
      // RETURN PASSWORD FOR USE IN HTML
      return password;
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