function jugarPartida() {
    const opciones = ["piedra", "papel", "tijeras"];
    const eleccionUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    
    alert("La computadora eligió: " + eleccionComputadora);
    
    if (eleccionUsuario === eleccionComputadora) {
        alert("¡Es un empate!");
        return "empate";
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")
    ) {
        alert("¡Ganaste!");
        return "usuario";
    } else {
        alert("¡La computadora gana!");
        return "computadora";
    }
}

function jugarPartidas(numeroPartidas) {
    let victoriasUsuario = 0; 
    let victoriasComputadora = 0; 

    for (let i = 0; i < numeroPartidas; i++) { 
        const resultado = jugarPartida();
        if (resultado === "usuario") {
            victoriasUsuario++;
        } else if (resultado === "computadora") {
            victoriasComputadora++;
        }
    }

    alert("Resultados totales:\nUsuario: " + victoriasUsuario + " victorias\nComputadora: " + victoriasComputadora + " victorias");
}

const numeroPartidas = parseInt(prompt("¿Cuántas partidas deseas jugar?"));

jugarPartidas(numeroPartidas);
