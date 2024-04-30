function toggleContrast() {
    const estiloAltoContraste = document.querySelector('link[title="Alto Contraste"]');
    estiloAltoContraste.disabled = !estiloAltoContraste.disabled;
}

document.addEventListener("DOMContentLoaded", function () {
    var tamanhoFonte = parseFloat(getComputedStyle(document.querySelector(".text")).fontSize);

    document.querySelector("#aumentar").addEventListener("click", function () {
        tamanhoFonte += 1;
        const elementosTexto = document.querySelectorAll(".text"); 
        elementosTexto.forEach(function (elemento) {
            elemento.style.fontSize = tamanhoFonte + "px";
        });
    });

    document.querySelector("#diminuir").addEventListener("click", function () {
        tamanhoFonte -= 1;
        const elementosTexto = document.querySelectorAll(".text");
        elementosTexto.forEach(function (elemento) {
            elemento.style.fontSize = tamanhoFonte + "px";
        });
    });
});
