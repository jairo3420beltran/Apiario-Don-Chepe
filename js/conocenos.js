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




document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const fotos = document.querySelectorAll('.slider img');
    const btnIzquierdo = document.querySelector('.flecha-izquierda');
    const btnDerecho = document.querySelector('.flecha-derecha');
    let contador = 0;
    const anchoFoto = fotos[0].clientWidth; // Ancho de cada foto

    btnDerecho.addEventListener('click', () => {
        contador++;
        if (contador >= fotos.length) contador = 0;
        slider.style.transform = `translateX(-${contador * anchoFoto}px)`;
    });

    btnIzquierdo.addEventListener('click', () => {
        contador--;
        if (contador < 0) contador = fotos.length - 1;
        slider.style.transform = `translateX(-${contador * anchoFoto}px)`;
    });
});




function reproducirVideo(url) {
    const modal = document.getElementById('modal');
    const videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.src = url;
    modal.style.display = 'flex';

    // Cierra el modal al hacer clic en la "X"
    document.querySelector('.cerrar').addEventListener('click', () => {
        modal.style.display = 'none';
        videoPlayer.pause();
    });
}

function mostrarVideos() {
      const videoList = document.getElementById("videoList");
      videoList.style.display = videoList.style.display === "block" ? "none" : "block";
    }