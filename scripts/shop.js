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

    var quantityInputs = document.getElementsByClassName("quantInput");
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

function quantityChanged(event) {
    input = event.target;
    if(isNaN(input.value)  || input.value <= 0) {
        input.value = 1;
    } 
    updateCart();
}

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
    addToCart(name, price, imgSrc)
}

function addToCart(name, price, imgSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cartRow");
    var cartItems = document.getElementById("cartDiv");
    var cartNames = document.getElementsByClassName("cartItemName");

    for(i = 0; i < cartNames.length; i++) {
        if(cartNames[i].innerText == name) {
            var cartRows = document.getElementsByClassName("cartRow");
            var cartQuantity = cartRows[i].getElementsByClassName("quantInput")[0];
            cartQuantity.value = +cartQuantity.value + +1;
            updateCart();
            return;
        };
    };

    var cartRowContent = `
    <img src="${imgSrc}" alt="">
    <p class="cartItemName">${name}</p>
    <p class="cartItemPrice">${price}</p>
    <input type="number" value="1" min="1" max="99" class="quantInput">
    <button class="removeBtn">Remove</button>`;
    cartRow.innerHTML = cartRowContent;
    cartItems.prepend(cartRow);
    cartRow.getElementsByClassName("removeBtn")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("quantInput")[0].addEventListener("click", quantityChanged);
    updateCart();
};

function updateCart() {
    var cartRows = document.getElementsByClassName("cartRow");
    var total = 0;
    var cartQuant = 0;
    var cartBtn = document.getElementById("cartBtn");
    const totalPrice = document.getElementById("totalPrice");
    for(i = 0; i < cartRows.length ; i++) {
        var cartRow = cartRows[i];
        var price = cartRow.getElementsByClassName("cartItemPrice")[0];
        var priceFloat = parseFloat(price.innerText.replace("kr", ""))
        var quant = cartRow.getElementsByClassName("quantInput")[0];
        var quantValue = quant.value;
        total += priceFloat * quantValue;
        cartQuant = +quantValue + +cartQuant;
    }
    cartBtn.innerText = cartQuant;
    if(total == 0) {
        totalPrice.innerText = "No Items In Cart";  
    } else {
        totalPrice.innerText = total + " SEK Total";
    }
}



cartHide.onclick = () => {
    cartSection.style.display = "none";
};

cartBtn.onclick = () => {
    cartSection.style.display = "block";
};