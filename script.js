const text =
    "O verdadeiro mistério não está na morte e sim em quem sobrevive a ela.";

const typing =
    document.getElementById("typing");

let i = 0;

function escrever() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(escrever, 50);
    }

}

escrever();

document
    .querySelector(".secret")
    .addEventListener("click", () => {

        window.location.href =
            "restricted/index.html";

    });

    const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeLightbox =
document.getElementById("close-lightbox");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";

lightboxImg.src = img.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});

}