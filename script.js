const article = document.querySelectorAll(".all");

article.forEach((art) => {
    art.addEventListener("click", () => {
        art.classList.toggle("activo");
    });
});