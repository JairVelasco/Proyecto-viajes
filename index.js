// index.js
import { registrarDestino, mostrarItinerario } from '../viajes.js';
// Si usas app.js:
// import { iniciarApp } from './app.js';

// Si usas app.js:
// iniciarApp(); // Inicializa la aplicación (si usas app.js)

// Función para registrar un viaje (llamada desde index.html)
window.registrarViaje = () => {  // Importante: usar window. para que sea global
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const transporte = document.getElementById('transporte').value;

    registrarDestino(destino, fecha, transporte);
    mostrarItinerarioEnHTML();
};

const mostrarItinerarioEnHTML = () => {
    const itinerarioDiv = document.getElementById('itinerario');
    itinerarioDiv.innerHTML = mostrarItinerario();
};

// Mostrar el itinerario inicial (opcional)
mostrarItinerarioEnHTML();

