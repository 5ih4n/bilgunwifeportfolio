const cartHide = document.getElementById("cartHide");
const cartSection = document.getElementById("cartSection");
const cartBtn = document.getElementById("cartBtn");
var addItemButtons = document.getElementsByClassName("buyBtn");

for (var i = 0; i < addItemButtons.length; i++) {
    var button = addItemButtons[i];
    button.addEventListener("click", function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
    });
};

cartHide.onclick = () => {
    cartSection.style.display = "none";
};

cartBtn.onclick = () => {
    cartSection.style.display = "block";
};