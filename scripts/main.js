const menuList = document.getElementById("menuList");
const icon = document.querySelector('.navburger');

const images = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const modalContent = document.querySelector(".modalcontent");
const close = document.querySelector(".modalClose");

const hiddenElements = document.querySelectorAll('.hidden');

menuList.style.maxHeight = "0px";

images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.classList.add("appear");
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        console.log("pung");
    });
    modalContent.addEventListener("click", () => {
        modal.classList.remove("appear");
    })
    close.addEventListener("click", () => {
        modal.classList.remove("appear");
    });

});

icon.onclick = () => {
    icon.classList.toggle('opened');
    icon.setAttribute('aria-expanded', icon.classList.contains('opened'));
    menuList.style.maxHeight = menuList.style.maxHeight === "0px" ? "340px" : "0px";
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

