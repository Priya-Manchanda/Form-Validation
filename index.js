function submit() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;
  cusername(username);
  cemail(email);
  chpassword(password);
  confirmpas(cpassword, password);
}
function cusername(username) {
  if (username.length > 7) {
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("username_id").innerText = "";
  } else {
    document.getElementById("username").classList.add("error");
    document.getElementById("username_id").innerText =
      "username must be 8 letters long";
  }
}
function cemail(email) {
  if (email.length > 7 && email.includes("@gmail")) {
    document.getElementById("email").classList.add("success");
    document.getElementById("email").classList.replace("error", "success");
    document.getElementById("email_id").innerText = "";
  } else {
    document.getElementById("email").classList.add("error");
    document.getElementById("email_id").innerText = "Enter valid email";
  }
}
function chpassword(password) {
  if (password.length > 7) {
    document.getElementById("password").classList.add("success");
    document.getElementById("password").classList.replace("error", "success");
    document.getElementById("password_id").innerText = "";
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("password_id").innerText =
      "password must be 8 letters long";
  }
}
function confirmpas(cpassword, password) {
  if (cpassword == password) {
    document.getElementById("cpassword").classList.add("success");
    document.getElementById("cpassword").classList.replace("error", "success");
    document.getElementById("password_id").innerText = "";
  } else {
    document.getElementById("cpassword").classList.add("error");
    document.getElementById("cpassword_id").innerText =
      "password did not match";
  }
}
