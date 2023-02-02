const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const images = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".modalClose");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.classList.add("appear");
    });

    close.addEventListener("click", () => {
        modal.classList.remove("appear");
    });
});
