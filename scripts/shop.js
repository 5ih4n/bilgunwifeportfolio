const cartHide = document.getElementById("cartHide");
const cartSection = document.getElementById("cartSection");
const cartBtn = document.getElementById("cartBtn");
var removeButtons = document.getElementsByClassName("removeBtn");

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
};

function ready() {
    var removeCartItemButtons = document.getElementsByClassName("removeBtn");
    for (var i = 1; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
    };

    var quantityInputs = document.getElementsByClassName("cartQuant");
    for (var i = 1; i < quantityInputs.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("change", quantityChanged);
    };

    var addToCartBtns = document.getElementsByClassName("buyBtn");
    for (var i = 1; i < quantityInputs.length; i++) {
        var button = addToCartBtns[i];
        button.addEventListener("click", addToCart);
    };
};

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCart()
}

function addToCart(name, price, imgsrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add('cart-row');
};

cartHide.onclick = () => {
    cartSection.style.display = "none";
};

cartBtn.onclick = () => {
    cartSection.style.display = "block";
};