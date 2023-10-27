const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const signInButton = document.getElementById("sign-in-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = loginForm.name.value;
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (email.includes('@') && name && password) {
    alert(`Welcome, ${name}`);
    location.href = "index.html"; 
    signInButton.innerText = name; 
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

// Sample was taken from external source, link is in the report 

