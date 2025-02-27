const submitBtn = document.querySelector(".submitBtn");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const usernameInput = document.querySelector("#username");
const alertEmailDiv = document.querySelector(".alertEmailDiv");
const alertEmail = document.createElement("p");
const alertPwdDiv = document.querySelector(".alertPwdDiv");
const alertPwd = document.createElement("p");
const alertUsernameDiv = document.querySelector(".alertUsernameDiv");
const alertUsername = document.createElement("p");

submitBtn.addEventListener("click", (event) => {
  let emailInputVal = document.querySelector("#email").value;
  let passwordInputVal = document.querySelector("#password").value;
  let usernameInputVal = usernameInput ? usernameInput.value : null; // Check if it exists
  if (!emailInputVal) {
    alertEmail.innerHTML = "Your email is still empty";
    alertEmailDiv.append(alertEmail);
    event.preventDefault();
  }
  if (!passwordInputVal) {
    alertPwd.innerHTML = "Your password is still empty";
    alertPwdDiv.append(alertPwd);
    event.preventDefault();
  }
  if (usernameInput && !usernameInputVal) {
    alertUsername.innerHTML = "Your username is still empty";
    alertUsernameDiv.append(alertUsername);
    event.preventDefault();
  }
});

emailInput.addEventListener("input", (event) => {
  let InputVal = event.target.value;
  if (!InputVal) {
    alertEmail.innerHTML = "Your email is still empty";
    alertEmailDiv.append(alertEmail);
  } else {
    alertEmail.innerHTML = ""; // Clears the message if input is filled
  }
});
passwordInput.addEventListener("input", (event) => {
  let InputVal = event.target.value;
  if (!InputVal) {
    alertPwd.innerHTML = "Your password is still empty";
    alertPwdDiv.append(alertPwd);
  } else {
    alertPwd.innerHTML = ""; // Clears the message if input is filled
  }
});

if (usernameInput) {
  usernameInput.addEventListener("input", (event) => {
    let InputVal = event.target.value;
    if (!InputVal) {
      alertUsername.innerHTML = "Your username is still empty";
      alertUsernameDiv.append(alertUsername);
    } else {
      alertUsername.innerHTML = ""; // Clears the message if input is filled
    }
  });
}
