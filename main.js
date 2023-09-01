// Get references to the input elements and the button
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("btn");
const errorDisplay = document.querySelector(".error")
const errorText = document.querySelector(".errorText")
// Add a click event listener to the button
loginButton.addEventListener("click", () => {
   // Get the values from the input fields
   const emailValue = emailInput.value;
   const passwordValue = passwordInput.value;
   //Checking if it contains the info submitted are correct
   if(!emailValue.includes('@') && passwordValue.length < 10){
      errorText.textContent = "Incorrect email or password please try again!"
      errorDisplay.classList.add("display")
   }else if(!emailValue.includes('@')){
     errorText.textContent = "Incorrect email or password please try again!"
      errorDisplay.classList.add("display")
   }
   else if(passwordValue.length < 10){
      errorText.textContent = "Incorrect password!"
      errorDisplay.classList.add("display")
   }else{
      errorDisplay.classList.remove("display")
   }
   //Adding and removing click background effect from loginButton
   loginButton.classList.add("color")
   setTimeout(() => {
      loginButton.classList.remove("color")
   }, 100)
});
