var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");
function validatePassword()
{
  if(password.value != confirm_password.value)
  {
    confirm_password.setCustomValidity("Passwords Don't Match");
  }
  else
  {
    confirm_password.setCustomValidity('');
  }
}
function displayValues()
{
  var fname = document.getElementById("fname")
  , lnane = document.getElementById("lname")
  , email = document.getElementById("email")
  , phone = document.getElementById("phone")
  , male = document.getElementById("male")
  , female = document.getElementById("female")
  , other = document.getElementById("other")
  , comments = document.getElementById("comments");
  validatePassword();
  console.log(fname.value);
  console.log(lname.value);
  console.log(email.value);
  console.log(phone.value);
  console.log(password.value);
  console.log(confirm_password.value);
  console.log(male.value);
  console.log(female.value);
  console.log(other.value);
  console.log(comments.value);
}