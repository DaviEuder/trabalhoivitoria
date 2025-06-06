document.addEventListener("DOMContentLoaded", function() {
    const pratosSelecionados = JSON.parse(localStorage.getItem("pratosSelecionados")) || [];
    const pratosContainer = document.getElementById("pratosSelecionados");

    if (pratosSelecionados.length === 0) {
        pratosContainer.innerHTML = "<p>Você não selecionou nenhum prato.</p>";
    } else {
        let total = 0;
        pratosContainer.innerHTML = "<h3>Itens Selecionados:</h3>" + 
            pratosSelecionados.map(prato => {
                total += parseFloat(prato.preco.replace("R$ ", "").replace(",", "."));
                return `<p>${prato.nome} - <strong>${prato.preco}</strong></p>`;
            }).join('');

        pratosContainer.innerHTML += `<h3>Total: <strong>R$ ${total.toFixed(2)}</strong></h3>`;
    }

    document.getElementById("confirmarReserva").addEventListener("click", function() {
        document.getElementById("mensagemReserva").textContent = "Reserva confirmada! Entraremos em contato em breve.";
    });
});
