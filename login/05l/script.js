document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === "" || password === "") {
                alert("Por favor, preencha todos os campos (usuário e senha).");
                return;
            }

            console.log('Tentativa de login com:');
            console.log('Usuário:', username);
            // Nunca registre senhas em produção! Isto é apenas para demonstração.
            console.log('Senha:', password);

            alert('Formulário enviado! Verifique o console para mais detalhes (F12). Em um sistema real, os dados seriam enviados para um servidor.');
            // Aqui você adicionaria a lógica de autenticação real,
            // por exemplo, enviar os dados para um backend com fetch() ou XMLHttpRequest.
        });
    }
});