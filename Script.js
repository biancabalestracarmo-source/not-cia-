document.addEventListener("DOMContentLoaded", () => {
    // Exemplo de interação dinâmica simples
    const elementoData = document.getElementById("data-publicacao");
    
    // Confirma no console que os scripts foram carregados corretamente
    console.log("Página de notícias do Colégio Frederico Guilherme Gise carregada com sucesso!");
    
    // Adiciona um efeito suave de destaque ao passar o mouse na notícia
    const cartaoNoticia = document.querySelector(".noticia");
    
    cartaoNoticia.addEventListener("mouseenter", () => {
        cartaoNoticia.style.transition = "box-shadow 0.3s ease";
        cartaoNoticia.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
    });

    cartaoNoticia.addEventListener("mouseleave", () => {
        cartaoNoticia.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
    });
});
