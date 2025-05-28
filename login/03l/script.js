document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');

    if (passwordInput && togglePasswordIcon) {
        const showPassword = () => {
            passwordInput.type = 'text';
        };

        const hidePassword = () => {
            passwordInput.type = 'password';
        };

        // Eventos para mouse
        togglePasswordIcon.addEventListener('mousedown', showPassword);
        togglePasswordIcon.addEventListener('mouseup', hidePassword);
        // Caso o mouse saia do ícone com o botão ainda pressionado
        togglePasswordIcon.addEventListener('mouseleave', hidePassword);

        // Eventos para toque (dispositivos móveis)
        togglePasswordIcon.addEventListener('touchstart', function(event) {
            // Previne comportamentos padrão do toque (como scroll ou zoom)
            // que podem interferir com a intenção de "segurar"
            event.preventDefault(); 
            showPassword();
        });
        togglePasswordIcon.addEventListener('touchend', hidePassword);
        // Caso o toque seja cancelado (ex: dedo desliza para fora da tela)
        togglePasswordIcon.addEventListener('touchcancel', hidePassword);

    } else {
        console.warn('Elementos do toggle de senha não encontrados.');
    }

    // Você pode adicionar o código de validação do formulário aqui, se necessário
    // Exemplo: document.getElementById('loginForm').addEventListener('submit', function(event) { ... });
});