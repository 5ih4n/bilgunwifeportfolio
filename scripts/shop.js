const cartHide = document.getElementById("cartHide");
const cartSection = document.getElementById("cartSection");
const cartBtn = document.getElementById("cartBtn");

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
};

function ready() {
    var removeCartItemButtons = document.getElementsByClassName("removeBtn");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
    };

    var quantityInputs = document.getElementsByClassName("cartQuant");
    for (var i = 0; i < quantityInputs.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("change", quantityChanged);
    };

    var addToCartBtns = document.getElementsByClassName("buyBtn");
    for (var i = 0; i < addToCartBtns.length; i++) {
        var button = addToCartBtns[i];
        button.addEventListener("click", addToCartClicked);
    };
};

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCart()
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement;
    var name = shopItem.getElementsByClassName('productName')[0].innerText;
    var price = shopItem.getElementsByClassName('productPrice')[0].innerText;
    var imgSrc = shopItem.getElementsByClassName('productImage')[0].src;
    console.log("pung");
    addToCart(name, price, imgSrc)

}

function addToCart(name, price, imgSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cartRow");
    var cartItems = document.getElementById("cartDiv");
    var cartRowContent = `
    <img src="${imgSrc}" alt="">
    <p>${name}</p>
    <p>${price}</p>
    <input type="number" value="1" class="quantInput">
    <button class="removeBtn">Remove</button>`;
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("removeBtn")[0].addEventListener("click", removeCartItem)
};

function updateCart() {
    
}

cartHide.onclick = () => {
    cartSection.style.display = "none";
};

cartBtn.onclick = () => {
    cartSection.style.display = "block";
};