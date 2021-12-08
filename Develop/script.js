// prompt for length of password
function passLength() {
  var pass = [];
  var character = window.prompt(
    "how long would you like your password? (password must be a minimum of 8 characters and a max of 128)."
  );
  var character = parseInt(character);
  if (character < 8 || character > 128) {
    window.alert(
      "invalid length. (password must be a minimum of 8 characters and a max of 128)"
    );
  } else {
    pass.length = character;
  }
  console.log(character);
  console.log(`character # ${character}`);
  console.log(`password length ${pass.length}`);

  for (i = 0; i < character; i++) {
    console.log(pass[i]);
  }
  return character;
  // double checking values are correct and character length / array length are changing properly
}
console.log(`passLength func returns: ${passLength()}`);

function generatePassword() {
  //prompt for character types
  // var lCase= window.prompt("Would you like LOWERCASE letters in your password? y/n")
  // let LCAnswer = lCase.toLowerCase();
  // if (LCAnswer === "y"){
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
