// app.js (Opcional - Si lo usas, asegúrate de importarlo en index.js)
import { registrarDestino, mostrarItinerario } from './viajes.js';

export const iniciarApp = () => {
    // Puedes agregar aquí código de inicialización, como destinos predefinidos.
    // Ejemplo:
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
};

