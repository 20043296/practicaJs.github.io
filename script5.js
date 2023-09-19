function calculateDamage(type1, type2, attack, defense) {
    var efficacy = 0.5;
    type1 = type1.toLowerCase(); // Convertir a minúsculas
    type2 = type2.toLowerCase(); // Convertir a minúsculas

    if (type1 != type2) {
        if (type1 == "fuego" && type2 == "hierba") efficacy = 2;
        if (type1 == "agua" && type2 == "fuego") efficacy = 2;
        if (type1 == "hierba" && type2 == "agua") efficacy = 2;
        if (type1 == "electricidad" && type2 == "agua") efficacy = 2;
        if ((type1 == "fuego" && type2 == "electricidad") || (type2 == "fuego" && type1 == "electricidad")) efficacy = 1;
        if ((type1 == "fuego" && type2 == "hierba") || (type1 == "fuego" && type2 == "electricidad")) efficacy = 1;
    }

    var damage = Math.ceil(50 * (attack / defense) * efficacy);
    return damage;
}

function calcularDaño() {
    var type1 = document.getElementById("type1").value;
    var type2 = document.getElementById("type2").value;
    var attack = parseInt(document.getElementById("attack").value);
    var defense = parseInt(document.getElementById("defense").value);
    var resultadoDiv = document.getElementById("resultado");

    if (isNaN(attack) || isNaN(defense) || attack <= 0 || defense <= 0) {
        resultadoDiv.innerHTML = "Por favor, ingrese valores validos para Ataque y Defensa.";
        return;
    }

    var daño = calculateDamage(type1, type2, attack, defense);
    
    resultadoDiv.innerHTML = "El damage causado es: " + daño;
}

function limpiarResultado() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    document.getElementById("type1").value = "electricidad";
    document.getElementById("type2").value = "electricidad";
    document.getElementById("attack").value = "";
    document.getElementById("defense").value = "";
}
