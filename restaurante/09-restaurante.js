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

// Redireciona para reservas apenas se pelo menos um prato estiver selecionado
document.getElementById("reserveBtn").addEventListener("click", function() {
    if (pratosSelecionados > 0) {
        localStorage.setItem("pratosSelecionados", JSON.stringify(pratosSelecionados));
        window.location.href = "10-reservas.html";
    }
});

// Redireciona para cardápio completo ao clicar no botão "Mais Pratos"
document.getElementById("verMaisPratos").addEventListener("click", function() {
    window.location.href = "13-cardapio.html";
});

// Exibir rodapé ao rolar para baixo
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