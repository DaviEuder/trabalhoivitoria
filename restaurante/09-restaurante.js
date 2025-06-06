let pratosSelecionados = 0;

function selecionarPrato(element) {
    if (element.classList.contains("selecionado")) {
        element.classList.remove("selecionado");
        pratosSelecionados--;
    } else {
        element.classList.add("selecionado");
        pratosSelecionados++;
    }

    let reserveBtn = document.getElementById("reserveBtn");
    if (pratosSelecionados > 0) {
        reserveBtn.classList.remove("disabled");
        reserveBtn.classList.add("enabled");
        reserveBtn.removeAttribute("disabled");
    } else {
        reserveBtn.classList.remove("enabled");
        reserveBtn.classList.add("disabled");
        reserveBtn.setAttribute("disabled", true);
    }
}


document.getElementById("reserveBtn").addEventListener("click", function() {
    if (pratosSelecionados > 0) {
        localStorage.setItem("pratosSelecionados", JSON.stringify(pratosSelecionados));
        window.location.href = "10-reservas.html";
    }
});


document.getElementById("verMaisPratos").addEventListener("click", function() {
    window.location.href = "13-cardapio.html";
});


window.addEventListener("scroll", function() {
    const copyright = document.getElementById("copyright");
    if (window.scrollY > 150) {
        copyright.style.display = "block";
        copyright.style.opacity = "1";
    } else {
        copyright.style.opacity = "0";
        setTimeout(() => {
            copyright.style.display = "none";
        }, 500);
    }
});
