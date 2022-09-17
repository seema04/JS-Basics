let userName = document.querySelector('#name');

let userPswd = document.querySelector('#password');

let nameError = document.querySelector("#name-error");

let pswdError = document.querySelector("#pswd-error");

const validateForm = () => {
  if(userName.value == ""){
  nameError.innerHTML = "username is empty!";
  return false;
  }
  else if(userName.value.length < 5)
  { 
  nameError.innerHTML = "min length must be > 5";
  return false;
  }
  else{
    nameError.innerHTML = "";
  }

  if(userPswd.value == "")
  {
  pswdError.innerHTML = "password is empty!";
  return false;
  }
  else if( userPswd.value.length < 5)
  {
  pswdError.innerHTML = "min length must be > 5"; 
  return false;
   } 
   else{
    pswdError.innerHTML = "";
   }

  return true;
}