let pratosSelecionados = [];

function selecionarPrato(element) {
    const nomePrato = element.querySelector("img").alt;
    const precoPrato = element.querySelector(".preco").textContent;

    if (element.classList.contains("selecionado")) {
        element.classList.remove("selecionado");
        pratosSelecionados = pratosSelecionados.filter(prato => prato.nome !== nomePrato);
    } else {
        element.classList.add("selecionado");
        pratosSelecionados.push({ nome: nomePrato, preco: precoPrato });
    }

    let reserveBtn = document.getElementById("reserveBtn");
    if (pratosSelecionados.length > 0) {
        reserveBtn.classList.add("enabled");
        reserveBtn.classList.remove("disabled");
        reserveBtn.removeAttribute("disabled");
    } else {
        reserveBtn.classList.remove("enabled");
        reserveBtn.classList.add("disabled");
        reserveBtn.setAttribute("disabled", true);
    }
}

// Redireciona para a tela de reservas e envia os pratos selecionados
document.getElementById("reserveBtn").addEventListener("click", function() {
    if (pratosSelecionados.length > 0) {
        localStorage.setItem("pratosSelecionados", JSON.stringify(pratosSelecionados));
        window.location.href = "10-reservas.html";
    }
});

// Redireciona para cardápio completo ao clicar no botão "Mais Pratos"
document.getElementById("verMaisPratos").addEventListener("click", function() {
    window.location.href = "13-cardapio.html";
});

// Exibe o rodapé após rolar um pouco a página
window.addEventListener("scroll", function () {
    const copyright = document.getElementById("copyright");
    if (!copyright) return;

    if (window.scrollY > 30) {
        copyright.classList.add("visivel");
    } else {
        copyright.classList.remove("visivel");
    }
});
