document.addEventListener("DOMContentLoaded", function() {
    const pratosLista = document.getElementById("pratosLista");
    const reserveBtn = document.getElementById("reserveBtn");

    let pratosSelecionados = [];

    const pratos = [
        { nome: "Feijoada", preco: "R$ 45,90" },
        { nome: "Churrasco", preco: "R$ 49,90" },
        { nome: "Moqueca", preco: "R$ 55,90" },
        { nome: "Sushi", preco: "R$ 39,90" },
        { nome: "Pizza", preco: "R$ 32,90" },
        { nome: "Hambúrguer", preco: "R$ 25,90" },
        { nome: "Strogonoff", preco: "R$ 42,90" },
        { nome: "Lasanha", preco: "R$ 40,90" },
        { nome: "Tacos", preco: "R$ 38,90" },
        { nome: "Ceviche", preco: "R$ 48,90" }
    ];

    pratos.forEach(prato => {
        let pratoItem = document.createElement("button");
        pratoItem.classList.add("prato");
        pratoItem.innerHTML = `<img src="img/${prato.nome.toLowerCase().replace(/\s/g, '-')}.jpg" alt="${prato.nome}">
                               <p>${prato.nome}</p>
                               <div class="preco">${prato.preco}</div>`;
        
        pratoItem.addEventListener("click", function() {
            if (pratoItem.classList.contains("selecionado")) {
                pratoItem.classList.remove("selecionado");
                pratosSelecionados = pratosSelecionados.filter(item => item.nome !== prato.nome);
            } else {
                pratoItem.classList.add("selecionado");
                pratosSelecionados.push(prato);
            }

            if (pratosSelecionados.length > 0) {
                reserveBtn.classList.add("enabled");
                reserveBtn.classList.remove("disabled");
                reserveBtn.removeAttribute("disabled");
            } else {
                reserveBtn.classList.remove("enabled");
                reserveBtn.classList.add("disabled");
                reserveBtn.setAttribute("disabled", true);
            }
        });

        pratosLista.appendChild(pratoItem);
    });

    reserveBtn.addEventListener("click", function() {
        if (pratosSelecionados.length > 0) {
            localStorage.setItem("pratosSelecionados", JSON.stringify(pratosSelecionados));
            window.location.href = "10-reservas.html";
        }
    });

    document.getElementById("voltar").addEventListener("click", function() {
        window.location.href = "07-restaurante.html";
    });
});
