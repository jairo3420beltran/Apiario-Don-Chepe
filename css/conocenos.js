document.getElementById("botonFotos").addEventListener("click", function() {
    const galeria = document.getElementById("galeria");
    
    if (galeria.style.display === "none") {
        galeria.style.display = "flex"; // Muestra la galería
        this.textContent = "Ocultar Fotos"; // Cambia el texto del botón
    } else {
        galeria.style.display = "none";
        this.textContent = "Ver Fotos";
    }
    });

