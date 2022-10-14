let cartsWomen = document.querySelectorAll(".women-product-add-cart");

let productsWomen = [
  {
    name: "bride-models-wedding-fashion",
    tag: "bride-models-wedding-fashion",
    price: 29999,
    inCart: 0,
  },
  {
    name: "confident-young-woman",
    tag: "confident-young-woman",
    price: 499,
    inCart: 0,
  },
  {
    name: "fashion-model-in-striped-pants",
    tag: "fashion-model-in-striped-pants",
    price: 599,
    inCart: 0,
  },
  {
    name: "hands-on-hips-girls-fashion",
    tag: "hands-on-hips-girls-fashion",
    price: 5999,
    inCart: 0,
  },
  {
    name: "model-poses-casually-on-ride",
    tag: "model-poses-casually-on-ride",
    price: 799,
    inCart: 0,
  },
  {
    name: "modern-business-woman-portrait",
    tag: "modern-business-woman-portrait",
    price: 999,
    inCart: 0,
  },
  {
    name: "person-sits-cross-legged-in-summer-fashion",
    tag: "person-sits-cross-legged-in-summer-fashion",
    price: 899,
    inCart: 0,
  },
  {
    name: "smiling-woman-poses",
    tag: "smiling-woman-poses",
    price: 499,
    inCart: 0,
  },
  {
    name: "striped-blouse-fashion",
    tag: "striped-blouse-fashion",
    price: 4999,
    inCart: 0,
  },
  {
    name: "urban-overall-fashion",
    tag: "urban-overall-fashion",
    price: 1299,
    inCart: 0,
  },
  {
    name: "woman-in-summer-floral-fashion",
    tag: "woman-in-summer-floral-fashion",
    price: 3999,
    inCart: 0,
  },
  {
    name: "hot-pink-fashion-model",
    tag: "hot-pink-fashion-model",
    price: 999,
    inCart: 0,
  },
];

for (let i = 0; i < cartsWomen.length; i++) {
  cartsWomen[i].addEventListener("click", () => {
    cartNumbers(productsWomen[i]);
    totalCost(productsWomen[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(".cart span").textContent = productNumbers - 1;
    console.log("action running");
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = product.tag;
    console.log(currentProduct);

    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product,
      };
    }
    cartItems[currentProduct].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", cart - product.price);
  } else if (cart != null) {
    cart = parseInt(cart);
    localStorage.setItem("totalCost", cart + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let productContainer = document.querySelector(".products");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="${
        item.tag
      }.jpg" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">Rs.${item.price}.00</div>
            <div class="quantity">
                <ion-icon class="decrease " name="caret-back-outline"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="caret-forward-outline"></ion-icon>   
            </div>
            <div class="total">Rs.${item.inCart * item.price}.00</div>`;
    });

    productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">Rs.${cart}.00</h4>
            </div>`;

    deleteButtons();
    manageQuantity();
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity = decreaseButtons[i].parentElement.querySelector("span")
        .textContent;
      console.log(currentQuantity);
      currentProduct = decreaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity = increaseButtons[i].parentElement.querySelector("span")
        .textContent;
      console.log(currentQuantity);
      currentProduct = increaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);
      console.log(cartItems[currentProduct]);
      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".product ion-icon");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productName;
  console.log(cartItems);

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.textContent
        .toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

onLoadCartNumbers();
displayCart();
