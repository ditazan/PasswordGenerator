var generatorEl = document.querySelector(".card-header");

var promptEl = document.createElement("div");

generatorEl.appendChild(promptEl);

var formEl = document.createElement("form");
formEl.setAttribute(
  "style",
  "display: flex; justify-content: space-between; flex-wrap:wrap"
);
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
label1.innerHTML = "numbers";
formEl.appendChild(numButtonEl);
formEl.appendChild(label1);

var loCaseButtonEl = document.createElement("input");
loCaseButtonEl.setAttribute("type", "checkbox");
loCaseButtonEl.setAttribute("name", "lo");
loCaseButtonEl.setAttribute("id", "lo");
var label2 = document.createElement("label");
label2.setAttribute("for", "lo");
label2.innerHTML = "lowercase";
formEl.appendChild(loCaseButtonEl);
formEl.appendChild(label2);

var upCaseButtonEl = document.createElement("input");
upCaseButtonEl.setAttribute("type", "checkbox");
upCaseButtonEl.setAttribute("name", "up");
upCaseButtonEl.setAttribute("id", "up");
var label3 = document.createElement("label");
label3.setAttribute("for", "up");
label3.innerHTML = "uppercase";
formEl.appendChild(upCaseButtonEl);
formEl.appendChild(label3);

var specialButtonEl = document.createElement("input");
specialButtonEl.setAttribute("type", "checkbox");
specialButtonEl.setAttribute("name", "special");
specialButtonEl.setAttribute("id", "special");
var label4 = document.createElement("label");
label4.setAttribute("for", "special");
label4.innerHTML = "special";
formEl.appendChild(specialButtonEl);
formEl.appendChild(label4);

// console.log(`passLength func returns: ${passLength}`);

const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChar = lowerCaseChar.toUpperCase();
const specialChar = "!@#$%^&*()?_-+=";
const numberChar = "123456789";






function generatePassword() {
  var characterString;
  if ( numButtonEl.checked == true && loCaseButtonEl.checked == true && upCaseButtonEl.checked == true &&  specialButtonEl.checked == true ){
    characterString = "".concat(lowerCaseChar, upperCaseChar, numberChar, specialChar);
  } else if ( numButtonEl.checked == true && loCaseButtonEl.checked == true && upCaseButtonEl.checked == true &&  specialButtonEl.checked == false){
      characterString = "".concat(lowerCaseChar, upperCaseChar, numberChar);
  } else if ( numButtonEl.checked == true && loCaseButtonEl.checked == true && upCaseButtonEl.checked == false &&  specialButtonEl.checked == false){ 
    characterString = "".concat(lowerCaseChar, upperCaseChar);
  }


  var pass = "";
  var charactersLength = characterString.length;

  var lengthPromptInput = parseInt(
    document.querySelector("input[type='text']").value
  );

  if (lengthPromptInput < 8 || lengthPromptInput > 128 || !lengthPromptInput) {
    alert("invalid length. (password must be a minimum of 8 characters and a max of 128)");
  } else {
    for (var i = 0; i < lengthPromptInput; i++) {
      pass += characterString.charAt(Math.floor(Math.random() * charactersLength));
    }
    return pass;
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  console.log("write");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
