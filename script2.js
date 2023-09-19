function calcularFibonacci(n) {
    var fibonacciArray = [];
    
    if (n >= 1) {
        fibonacciArray.push(0);
    }
    if (n >= 2) {
        fibonacciArray.push(1);
    }
    
    for (var i = 2; i < n; i++) {
        var nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }
    
    return fibonacciArray;
}

function calcularYMostrarFibonacci() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var resultadoDiv = document.getElementById("resultado");

    if (isNaN(cantidad) || cantidad <= 0) {
        resultadoDiv.innerHTML = "Ingrese una cantidad valida mayor que 0.";
        return;
    }

    var fibonacciArray = calcularFibonacci(cantidad);
    resultadoDiv.innerHTML = "Serie de Fibonacci: " + fibonacciArray.join(", ");
}


