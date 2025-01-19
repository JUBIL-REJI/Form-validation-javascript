function FormVlalidate() {
  const Username = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const conformPassword = document.getElementById("confirmPassword");
  const gender = document.getElementsByName("gender");
  const termsAndconditions = document.getElementById("terms");
  const dob = document.getElementById('dob');

  const nameError = document.getElementById("nameerror");
  const emailError = document.getElementById("emailerror");
  const passwordError = document.getElementById("passworderror");
  const confirmPasswordError = document.getElementById("confirmPasswordMessage");
  const genderError = document.getElementById("genderMessage");
  const termsError = document.getElementById("termsMessage");
  const dobError = document.getElementById('dobMessage');

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  genderError.textContent = "";
  termsError.textContent = "";
  dobError.textContent = "";

  const nameRegex = /^[a-zA-ZÀ-ÿ'-]+( [a-zA-ZÀ-ÿ'-]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let isValid = true;

  if (Username === "" || !nameRegex.test(Username.value.trim())) {
    nameError.textContent = "invalid name";
    isValid = false;
  }
  if (email === "" || !emailRegex.test(email.value.trim())) {
    emailError.textContent = "invalid email";
    isValid = false;
  }
  if (password === "" || !passwordRegex.test(password.value.trim())) {
    passwordError.textContent =
      "must have atleast 8 characters and include Uppercase, lowercase,number and special characters";
    isValid = false;
  }
  if (
    password.value !== conformPassword.value ||
    conformPassword.value.trim() === ""
  ) {
    confirmPasswordError.textContent = "password not matching";
    isValid = false;
  }

  if(!dob.value){
    dobError.textContent = 'add your date of birth'
  }



 
  let genderSelected = false;

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    isValid = false;
    genderError.textContent = "select your gender";
  }

  if(!termsAndconditions.checked){
    termsError.textContent = 'you must agree terms and conditions'
    isValid = false;
  }

  if (isValid) {
    alert("form submitted succesfully");
    const form = document.querySelector('form');
    form.reset();
  } else {
    console.log("failed");
  }
  return isValid;
}

document.getElementById("submit-btn").addEventListener("click", (event) => {
  event.preventDefault();
  FormVlalidate();
});
