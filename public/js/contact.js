document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.btn-contacto'); // Tu botón del nav
    const overlay = document.getElementById('contactOverlay');
    const closeBtn = document.getElementById('closeContact');
    const copyBtn = document.getElementById('copyBtn');

    // Abrir Modal
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
    });

    // Cerrar Modal
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Cerrar al hacer clic fuera del cuadro blanco
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    });

    // Función Copiar Email
    copyBtn.addEventListener('click', () => {
        const email = document.getElementById('emailText').innerText;
        navigator.clipboard.writeText(email).then(() => {
            copyBtn.innerText = "¡Copiado!";
            copyBtn.style.background = "#25D366";
            setTimeout(() => {
                copyBtn.innerText = "Copiar";
                copyBtn.style.background = "var(--main-black)";
            }, 2000);
        });
    });
});