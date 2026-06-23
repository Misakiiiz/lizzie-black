const form =
document.getElementById("loginForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const error =
document.getElementById("error-message");

if(
email === "lizzie.black@darkemail.com"
&&
password === "viperdelamuerte"
){

window.location.href =
"../black-archive/index.html";

}

else{

error.textContent =
"Access denied.";

}

});