//details

function giveName() {
  let x = document.getElementById("fname").value;
  localStorage.setItem("nameUser", x);
}
var text = "";
function giveAddress(id) {
  text += document.getElementById(id).value + ",";
  localStorage.setItem("fullAdress", text);
}

function getMobileNumber() {
  let x = document.getElementById("mainMobileNumber").value;
  localStorage.setItem("mainMobileNumber", x);
}

//Price and quantity
let costToBePaid = localStorage.getItem("totalCost");
costToBePaid = JSON.parse(costToBePaid);
console.log(costToBePaid);
console.log(typeof costToBePaid);

let productsQuantity = localStorage.getItem("cartNumbers");
productsQuantity = JSON.parse(productsQuantity);
console.log(productsQuantity);
console.log(typeof productsQuantity);
document.getElementById("orderPrice").innerHTML = "Rs." + costToBePaid;
document.getElementById("orderQuantity").innerHTML = productsQuantity;

let nameUser = localStorage.getItem("nameUser");
document.getElementById("orderName").innerHTML = nameUser;

let userAddress = localStorage.getItem("fullAdress");
document.getElementById("orderAddress").innerHTML = userAddress;

let userMainMobileNumber = localStorage.getItem("mainMobileNumber");
document.getElementById("orderMobileNumber").innerHTML = userMainMobileNumber;
