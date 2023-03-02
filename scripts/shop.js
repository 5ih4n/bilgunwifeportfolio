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
    for (var i = 0; i < quantityInputs.length; i++) {
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
}

function addToCart(name, price, imgsrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add('cartRow');
    var cartItems = getElementById="cartDiv";
    var cartRowContent = `
    <img src="${imageSrc}" alt="">
    <p>${title}</p>
    <p>${price}</p>
    <input type="number" value="1" class="quantInput">
    <button class="removeBtn">Remove</button>`;
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);

};

cartHide.onclick = () => {
    cartSection.style.display = "none";
};

cartBtn.onclick = () => {
    cartSection.style.display = "block";
};