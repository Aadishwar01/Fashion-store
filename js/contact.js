function validateName() {
  let n = document.getElementById("Name").value;
  if (n.length >= 4 && n.length <= 25) {
    let i;
    let flag = 0;
    for (i = 0; i < n.length; i++) {
      if (n.charAt(i) >= "0" && n.charAt(i) <= "9") flag++;
    }
    if (flag == 0) {
      document.getElementById("sName").style.color = "green";
      document.getElementById("sName").innerHTML = "valid";
    } else {
      document.getElementById("sName").style.color = "red";
      document.getElementById("sName").innerHTML =
        "Name should not contain digits";
    }
  } else {
    document.getElementById("sName").style.color = "red";
    document.getElementById("sName").innerHTML = "Please enter 4-25 characters";
  }
}
function validatePhone() {
  let p = document.getElementById("Phone").value;
  if (p.length == 10) {
    document.getElementById("sPhone").style.color = "green";
    document.getElementById("sPhone").innerHTML = "Valid";
    return true;
  } else {
    document.getElementById("sPhone").style.color = "red";
    document.getElementById("sPhone").innerHTML =
      "Mobile Number should contain 10 digits";
    return false;
  }
}

function validateEmail() {
  let p = document.getElementById("Email").value;
  if (p == "") {
    document.getElementById("sEmail").style.color = "red";
    document.getElementById("sEmail").innerHTML =
      "Please fill the email id field";
    return false;
  }
  if (p.indexOf("@") <= 0) {
    document.getElementById("sEmail").style.color = "red";
    document.getElementById("sEmail").innerHTML = "'@' at Invalid Position";
    return false;
  }

  if (p.charAt(p.length - 4) != "." && p.charAt(p.length - 3) != ".") {
    document.getElementById("sEmail").style.color = "red";
    document.getElementById("sEmail").innerHTML = " '.' at Invalid Position";
    return false;
  } else {
    document.getElementById("sEmail").style.color = "green";
    document.getElementById("sEmail").innerHTML = "Valid";
    return true;
  }
}
