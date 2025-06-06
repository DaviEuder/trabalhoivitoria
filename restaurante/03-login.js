document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Preencha todos os campos!";
        return;
    }

    // Busca credenciais armazenadas
    const savedUser = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUser && password === savedPassword) {
        setTimeout(() => {
            window.location.href = "07-restaurante.html"; // Novo nome correto!
        }, 500);
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});

// Redireciona para cadastro
document.getElementById("cadastroBtn").addEventListener("click", function() {
    window.location.href = "04-cadastro.html";
});
