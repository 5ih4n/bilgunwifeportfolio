if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
};

function ready() {
    let cartDiv = document.getElementById("cartDiv");
    if(localStorage.getItem("cart") === null){
        localStorage.setItem("cart", `<button id="cartHide">X</button>
        <p id="totalPrice">No Items In Cart</p>
        <button id="checkoutBtn">to checkout</button>
        <button id="clearBtn">Clear Cart</button>`)
    } else {
        cartDiv.innerHTML = localStorage.getItem("cart");
    }

    let removeCartItemButtons = document.getElementsByClassName("removeBtn");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
    };

    let quantityInputs = document.getElementsByClassName("quantInput");
    for (let i = 0; i < quantityInputs.length; i++) {
        let button = quantityInputs[i];
        button.addEventListener("input", updateCart);
    };

    let addToCartBtns = document.getElementsByClassName("buyBtn");
    for (let i = 0; i < addToCartBtns.length; i++) {
        let button = addToCartBtns[i];
        button.addEventListener("click", addToCartClicked);
    };

    const clearBtn =document.getElementById("clearBtn");
    const cartHide = document.getElementById("cartHide");
    const cartBtn = document.getElementById("cartBtn");
    const checkout = document.getElementById("checkoutBtn");
    const price = document.getElementById("totalPrice");

    clearBtn.onclick = () => {
        localStorage.setItem("cart", `<button id="cartHide">X</button>
        <p id="totalPrice">No Items In Cart</p>
        <button id="checkoutBtn">to checkout</button>
        <button id="clearBtn">Clear Cart</button>`);
        cartDiv.innerHTML = localStorage.getItem("cart");
        ready();
    }

    checkout.onclick = () => {
        sessionStorage.setItem("price", price.innerHTML);
        window.location.href = ("checkout.html")
    }

    cartHide.onclick = () => {
        cartSection.style.display = "none";
    };
    
    cartBtn.onclick = () => {
        cartSection.style.display = "block";
    };

    updateCart();
};

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCart()
}

function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement;
    let name = shopItem.getElementsByClassName('productName')[0].innerText;
    let price = shopItem.getElementsByClassName('productPrice')[0].innerText;
    let imgSrc = shopItem.getElementsByClassName('productImage')[0].src;
    button.innerText = "Added To Cart";
    addToCart(name, price, imgSrc)
}

function addToCart(name, price, imgSrc) {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cartRow");
    let cartItems = document.getElementById("cartDiv");
    let cartNames = document.getElementsByClassName("cartItemName");

    for(i = 0; i < cartNames.length; i++) {
        if(cartNames[i].innerText == name) {
            let cartRows = document.getElementsByClassName("cartRow");
            let cartQuantity = cartRows[i].getElementsByClassName("quantInput")[0];
            cartQuantity.value = +cartQuantity.value + +1;
            updateCart();
            return;
        };
    };

    let cartRowContent = `
    <img src="${imgSrc}" alt="">
    <p class="cartItemName">${name}</p>
    <p class="cartItemPrice">${price}</p>
    <input type="number" value="1" min="1" max="99" class="quantInput">
    <button class="removeBtn">Remove</button>`;
    cartRow.innerHTML = cartRowContent;
    cartItems.prepend(cartRow);
    cartRow.getElementsByClassName("removeBtn")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("quantInput")[0].addEventListener("input", updateCart);
    updateCart();
};

function updateCart() {
    let cartRows = document.getElementsByClassName("cartRow");
    let total = 0;
    let cartQuant = 0;
    let cartBtn = document.getElementById("cartBtn");
    let cartDiv = document.getElementById("cartDiv");
    const totalPrice = document.getElementById("totalPrice");
    for(i = 0; i < cartRows.length ; i++) {
        let cartRow = cartRows[i];
        let price = cartRow.getElementsByClassName("cartItemPrice")[0];
        let priceFloat = parseFloat(price.innerText.replace("kr", ""))
        let quant = cartRow.getElementsByClassName("quantInput")[0];
        let quantValue = quant.value;
        total += priceFloat * quantValue;
        cartQuant = parseFloat(quantValue)  + parseFloat(cartQuant) ;
    }
    cartBtn.innerText = cartQuant;
    if(total == 0) {
        totalPrice.innerText = "No Items In Cart";  
    } else {
        totalPrice.innerText = total + " SEK Total";
    }
    localStorage.setItem("cart", cartDiv.innerHTML);
}