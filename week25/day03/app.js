FormValidate = () => {
  let Fname = document.forms["SubForm"]["FN"].value;
  let Lname = document.forms["SubForm"]["LN"].value;
  let Email = document.forms["SubForm"]["Email"].value;
  let Pass = document.forms["SubForm"]["pass"].value;
  let ConfirmPass = document.forms["SubForm"]["CP"].value;
  let Num = document.forms["SubForm"]["num"].value;

  if (Fname === "") {
    alert("Please Enter First Name");
    return false;
  }
  if (Lname === "") {
    alert("Please Enter Last Name");
    return false;
  }
  if (Email === "") {
    alert("Please Enter Email");
    return false;
  }
  if (Pass === "") {
    alert("Please Enter Password");
    return false;
  }
  if (ConfirmPass === "") {
    alert("Can not leave Confirm Password blank");
    return false;
  }
  if (Pass != ConfirmPass) {
    alert("PASSWORD MISMATCH");
    return false;
  }
  if (Pass === ConfirmPass) {
    alert("Welcome");
    return true;
  }
  if (Num === "") {
    alert("Please Enter Phone Number");
    return false;
  }
};
