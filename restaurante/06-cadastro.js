document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const cadastroMessage = document.getElementById("cadastroMessage");

    if (newUsername === "" || newPassword === "") {
        cadastroMessage.textContent = "Preencha todos os campos!";
        cadastroMessage.style.color = "red";
        return;
    }

    // Salva credenciais
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    cadastroMessage.textContent = "Cadastro realizado com sucesso!";
    cadastroMessage.style.color = "green";

    setTimeout(() => {
        window.location.href = "01-login.html"; // Novo nome correto!
    }, 2000);
});
