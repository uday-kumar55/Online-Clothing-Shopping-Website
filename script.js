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

cartIcon.onclick = () => {

  cartPopup.classList.add("active");

};

closeCart.onclick = () => {

  cartPopup.classList.remove("active");

};

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