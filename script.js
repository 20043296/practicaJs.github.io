function imprimirImpares() {
    // Obtener los valores de inicio y fin del rango ingresados por el usuario
    var inicio = parseInt(document.getElementById("inicio").value);
    var fin = parseInt(document.getElementById("fin").value);

    // Validar que el valor de inicio sea menor que el valor de fin
    if (inicio >= fin) {
        alert("El valor de inicio debe ser menor que el valor de fin.");
        return;
    }

    // Inicializar una variable para almacenar los números impares
    var impares = "";

    // Iterar a través del rango y agregar los números impares a la variable
    for (var i = inicio; i <= fin; i++) {
        if (i % 2 !== 0) {
            impares += i + " ";
        }
    }

    // Mostrar los números impares en un elemento HTML
    document.getElementById("resultado").innerHTML = "Numeros Impares: " + impares;
}
function limpiarResultado() {
    // Limpiar el contenido del panel de resultados
    document.getElementById("resultado").innerHTML = "";
}


//Ejercicio numero 3
function verificarPalindromo() {
    var inputWord = document.getElementById("inputWord").value;
    var resultadoDiv = document.getElementById("resultadoPalindromo");

    // Eliminar espacios y convertir a minúsculas
    var palabraLimpia = inputWord.replace(/ /g, "").toLowerCase();

    // Verificar si es un palíndromo
    var esPalindromo = palabraLimpia === palabraLimpia.split('').reverse().join('');

    if (esPalindromo) {
        resultadoDiv.innerHTML = "<p>La palabra es palindromo.</p>";
    } else {
        resultadoDiv.innerHTML = "<p>La palabra no es palindromo.</p>";
    }
}

function limpiarPalindromo() {
    var resultadoDiv = document.getElementById("resultadoPalindromo");
    resultadoDiv.innerHTML = "";
    document.getElementById("inputWord").value = "";
}


//Ejercicio4
function obtenerPrimerYUltimoDiaDeMes(year, month) {
    // Crea una fecha para el primer día del mes
    var primerDia = new Date(year, month - 1, 1);

    // Incrementa el mes en 1 para obtener el primer día del siguiente mes
    var siguienteMes = new Date(year, month, 1);

    // Resta 1 día al siguienteMes para obtener el último día del mes actual
    var ultimoDia = new Date(siguienteMes - 1);

    // Configura las opciones para obtener el formato deseado en español
    var opciones = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };

    return {
        primerDia: primerDia.toLocaleDateString('es-ES', opciones),
        ultimoDia: ultimoDia.toLocaleDateString('es-ES', opciones)
    };
}

function obtenerFechas() {
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var resultadoDiv = document.getElementById("resultado");

    if (isNaN(year) || isNaN(month) || year <= 0 || month < 1 || month > 12) {
        resultadoDiv.innerHTML = "Por favor, ingrese un año y mes válidos.";
        return;
    }

    var fechas = obtenerPrimerYUltimoDiaDeMes(year, month);
    
    resultadoDiv.innerHTML = "Primer día del mes: " + fechas.primerDia + "<br>";
    resultadoDiv.innerHTML += "Último día del mes: " + fechas.ultimoDia;
}

function limpiarResultado() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    document.getElementById("year").value = "";
    document.getElementById("month").value = "";
}


//Ejercicio7
window.onload = function(){
    fondo1 = document.getElementById("fondouno");
    fondo2 = document.getElementById("fondodos");

    paramover = setInterval(mover, 50);
    setInterval(repetir,2250);
}
desplazar=0;

function mover(){
    desplazar -=10;
    desplazar2 = desplazar+450;
    posicion1 = desplazar+"px";
    posicion2 = desplazar2+"px";
    fondo1.style.left = posicion1;
    fondo2.style.left = posicion2;
}
function repetir(){
    fondo1.style.left = "0px"
    fondo2.style.left = "450px"
    desplazar=0;
}





