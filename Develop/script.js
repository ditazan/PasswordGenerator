const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const specialChar = "!@#$%^&*()?_-+=";


var generatorEl = document.querySelector(".card-header");

var promptEl = document.createElement("div");
generatorEl.appendChild(promptEl);

var formEl = document.createElement("form");
promptEl.appendChild(formEl);

var lengthPromptEl = document.createElement("input");
lengthPromptEl.setAttribute("type", "text");
lengthPromptEl.setAttribute("placeholder", "length (8-128 characters)");
formEl.appendChild(lengthPromptEl);

var numButtonEl = document.createElement("input");
numButtonEl.setAttribute("type", "checkbox");
numButtonEl.setAttribute("name", "num");
numButtonEl.setAttribute("id", "num");
var label1 = document.createElement("label");
label1.setAttribute("for", "num");
label1.innerHTML ="numbers";
formEl.appendChild(numButtonEl);
formEl.appendChild(label1);


var loCaseButtonEl = document.createElement("input");
loCaseButtonEl.setAttribute("type", "checkbox");
loCaseButtonEl.setAttribute("name", "lo");
loCaseButtonEl.setAttribute("id", "lo");
var label2 = document.createElement("label");
label2.setAttribute("for", "lo");
label2.innerHTML ="lowercase";
formEl.appendChild(loCaseButtonEl);
formEl.appendChild(label2);

var upCaseButtonEl = document.createElement("input");
upCaseButtonEl.setAttribute("type", "checkbox");
upCaseButtonEl.setAttribute("name", "up");
upCaseButtonEl.setAttribute("id", "up");
var label3 = document.createElement("label");
label3.setAttribute("for", "up");
label3.innerHTML ="uppercase";
formEl.appendChild(upCaseButtonEl);
formEl.appendChild(label3);

var specialButtonEl = document.createElement('input');
specialButtonEl.setAttribute("type", "checkbox");
specialButtonEl.setAttribute("name", "special");
specialButtonEl.setAttribute("id", "special");
var label4 = document.createElement("label");
label4.setAttribute("for", "special");
label4.innerHTML ="special";
formEl.appendChild(specialButtonEl);
formEl.appendChild(label4);


// prompt for length of password / amnt of characters
var passLength = function length() {
  var characters = parseInt(window.prompt(
    "how long would you like your password? (password must be a minimum of 8 characters and a max of 128)."
  ));
  // characters = parseInt(characters);

  if (characters < 8 || characters > 128) {
    window.alert("invalid length. (password must be a minimum of 8 characters and a max of 128)");
  } else {
    // double checking values are correct  
    console.log(`numerical answer ${characters}`);
  }
}


// console.log(`passLength func returns: ${passLength}`);

function generatePassword(length) {
var pass = "";
var characters = lowerCase;
var charactersLength = characters.length;


for (var i=0; i < length; i++){
  pass += characters.charAt(Math.floor(Math.random()*charactersLength));
  }
  return pass;
}

  //prompt for character types
  // var lCase = window.prompt(
  //   "Would you like LOWERCASE letters in your password? y/n"
  // );
  // let lAnswer = lCase.toLowerCase();

  // var uCase = window.prompt(
  //   "Would you like UPPERCASE letters in your password? y/n"
  // );
  // let uAnswer = uCase.toLowerCase();

  // var num = window.prompt(
  //   "Would you like SPECIAL characters in your password? y/n"
  // );
  // let nAnswer = num.toLowerCase();

  // var sChar = window.prompt(
  //   "Would you like SPECIAL characters in your password? y/n"
  // );
  // let sAnswer = sChar.toLowerCase();

  // if (
  //   lAnswer === "y" &&
  //   uAnswer === "y" &&
  //   nAnswer === "y" &&
  //   sAnswer === "y"
  // ) {
  //   console.log("slime");
  // }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passLength;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
