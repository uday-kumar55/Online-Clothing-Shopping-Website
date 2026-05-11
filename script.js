// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => {

  navLinks.classList.toggle("active");

};

// CART

const cartIcon = document.getElementById("cartIcon");

const cartPopup = document.getElementById("cartPopup");

const closeCart = document.getElementById("closeCart");

// OPEN CART

cartIcon.onclick = () => {

  cartPopup.classList.add("active");

};

// CLOSE CART

closeCart.onclick = () => {

  cartPopup.classList.remove("active");

};

// CLOSE WHEN CLICK OUTSIDE

window.addEventListener("click", (e) => {

  if(
    !cartPopup.contains(e.target) &&
    !cartIcon.contains(e.target)
  ){

    cartPopup.classList.remove("active");

  }

});

// ADD TO CART

const buttons = document.querySelectorAll(".add-btn");

const cartItems = document.getElementById("cart-items");

const cartCount = document.getElementById("cart-count");

const total = document.getElementById("total");

let count = 0;

let totalPrice = 0;

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const name = button.dataset.name;

    const price = Number(button.dataset.price);

    const image = button.dataset.image;

    count++;

    totalPrice += price;

    cartCount.innerText = count;

    total.innerText = totalPrice.toLocaleString();

    const item = document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML = `

      <img src="${image}">

      <div class="cart-details">

        <h4>${name}</h4>

        <p>₹${price.toLocaleString()}</p>

        <button class="remove-btn">
          Remove
        </button>

      </div>

    `;

    const removeBtn = item.querySelector(".remove-btn");

    removeBtn.addEventListener("click", () => {

      item.remove();

      count--;

      totalPrice -= price;

      cartCount.innerText = count;

      total.innerText = totalPrice.toLocaleString();

    });

    cartItems.appendChild(item);

    cartPopup.classList.add("active");

  });

});

// WISHLIST

const wishlist = document.querySelectorAll(".wishlist");

wishlist.forEach(heart => {

  heart.addEventListener("click", () => {

    if (heart.style.background === "gold") {

      heart.style.background = "rgba(255,255,255,0.15)";

      heart.style.color = "#fff";

    } else {

      heart.style.background = "gold";

      heart.style.color = "#111";

    }

  });

});

// ORDER BUTTON

const orderBtn = document.getElementById("orderBtn");

orderBtn.onclick = () => {

  if(count === 0){

    showNotification("Your cart is empty!");

  }else{

    showNotification("Order Placed Successfully ✅");

    cartItems.innerHTML = "";

    count = 0;

    totalPrice = 0;

    cartCount.innerText = 0;

    total.innerText = 0;

    cartPopup.classList.remove("active");

  }

};

// CUSTOM NOTIFICATION

function showNotification(message){

  const notification = document.createElement("div");

  notification.classList.add("notification");

  notification.innerText = message;

  document.body.appendChild(notification);

  setTimeout(() => {

    notification.classList.add("show");

  },100);

  setTimeout(() => {

    notification.classList.remove("show");

    setTimeout(() => {

      notification.remove();

    },500);

  },2500);

}

// NAVBAR HIDE ON SCROLL

let lastScroll = 0;

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;

  if(currentScroll > lastScroll){

    header.classList.add("hide");

  }else{

    header.classList.remove("hide");

  }

  lastScroll = currentScroll;

});