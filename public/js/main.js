document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightbox = document.getElementById('closeLightbox');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentImages = [];
    let currentIndex = 0;

    // Buscamos los contenedores de posts dentro de Tres-I
    const postGroups = document.querySelectorAll('#modal-tres-i .modal__gallery > div');

    postGroups.forEach(group => {
        // Obtenemos solo las imágenes de este grupo específico
        const images = Array.from(group.querySelectorAll('img'));
        
        images.forEach((img, index) => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => {
                currentImages = images; 
                currentIndex = index;
                updateLightbox();
                lightbox.showModal();
            });
        });
    });

    function updateLightbox() {
        lightboxImg.src = currentImages[currentIndex].src;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightbox();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightbox();
    });

    closeLightbox.addEventListener('click', () => lightbox.close());
    
    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.close();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            console.log("Menú toggle activo"); // Esto te avisará si funciona
        });
    } else {
        console.error("No se encontraron los elementos del menú. Revisa los IDs.");
    }
});