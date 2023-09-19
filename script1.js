function invertirTexto() {
    // Obtener el texto ingresado por el usuario
    var texto = document.getElementById("texto").value;

    // Invertir el texto
    var textoInvertido = texto.split('').reverse().join('');

    // Crear una nueva ventana HTML para mostrar el texto invertido
    var nuevaVentana = window.open("", "_blank", "width=400,height=200");
    nuevaVentana.document.write("<html><head><title>Texto Invertido</title></head><body>");
    nuevaVentana.document.write("<h1>Texto Invertido</h1>");
    nuevaVentana.document.write("<p>Texto original: " + texto + "</p>");
    nuevaVentana.document.write("<p>Texto invertido: " + textoInvertido + "</p>");
    nuevaVentana.document.write("</body></html>");
}
function limpiarTexto() {
    var resultadoDiv = document.getElementById("resultadoTexto");
    resultadoDiv.innerHTML = "";
    document.getElementById("inputText").value = "";
}
