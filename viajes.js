// viajes.js
export const destinos = []; // Array para almacenar los destinos (const)

export const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = { destino, fecha, transporte, costo: calcularCosto(destino, transporte) };
    destinos.push(nuevoViaje);
};

export const calcularCosto = (destino, transporte) => {
    // Tu lógica para calcular el costo (ejemplo)
    const tarifasDestino = { /* ... tus tarifas ... */ };
    const tarifasTransporte = { /* ... tus tarifas ... */ };

    let costoBase = tarifasDestino[destino] || 300;
    return costoBase + (tarifasTransporte[transporte] || 50);
};

export const mostrarItinerario = () => {
    let itinerarioHTML = "<ul>";
    destinos.forEach(viaje => {
        itinerarioHTML += `<li>
            <strong>Destino:</strong> ${viaje.destino}<br>
            <strong>Fecha:</strong> ${viaje.fecha}<br>
            <strong>Transporte:</strong> ${viaje.transporte}<br>
            <strong>Costo:</strong> $${viaje.costo}<br>
        </li>`;
    });
    itinerarioHTML += "</ul>";
    return itinerarioHTML;
};
