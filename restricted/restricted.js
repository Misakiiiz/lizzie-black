// ===========================
// LOGIN
// ===========================

const form = document.getElementById("loginForm");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (
        email === "lizzie_secret@lizzieblack.com" &&
        password === "noonesaw"
    ) {

        window.location.href = "../black-archive/index.html";

    } else {

        popup.classList.remove("hidden");

    }

});

// ===========================
// FECHAR POPUP
// ===========================

closePopup.addEventListener("click", function () {

    popup.classList.add("hidden");

});

// Fechar clicando fora da caixa

popup.addEventListener("click", function (e) {

    if (e.target === popup) {

        popup.classList.add("hidden");

    }

});

// Fechar com ESC

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        popup.classList.add("hidden");

    }

});


// ===========================
// BOTÃO DE AJUDA
// ===========================

const helpBtn = document.getElementById("helpBtn");
const helpContent = document.getElementById("helpContent");
const hintText = document.getElementById("hintText");

const hints = [

`DICA 01

Em inglês, reorganize as letras.

Às vezes a resposta sempre esteve na mesma mesa, apenas em outra ordem.`,

`DICA 02

Existe um velho imperador que gostava de mover letras.

Talvez ele tenha passado por aqui.`,

`DICA 03

"Ninguém viu."

E, aparentemente...

nem você.`

];

let currentHint = 0;

helpBtn.addEventListener("click", function () {

    helpContent.classList.remove("hidden");

    hintText.innerHTML = hints[currentHint].replace(/\n/g, "<br>");

    if (currentHint < hints.length - 1) {

        currentHint++;

        helpBtn.textContent = "Ainda preciso de ajuda";

    } else {

        helpBtn.textContent =
        "Você já recebeu todas as dicas. Se mesmo assim não conseguiu, este arquivo não foi feito para você.";

        helpBtn.disabled = true;

    }

});
