const cartHide = document.getElementById("cartHide");
const cartSection = document.getElementById("cartSection");
const cartBtn = document.getElementById("cartBtn");


cartHide.onclick = () => {
    cartSection.style.display = "none";
}

cartBtn.onclick = () => {
    cartSection.style.display = "block";
}