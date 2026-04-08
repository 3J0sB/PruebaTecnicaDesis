// Cargas Dinámicas desde la Base de Datos

document.addEventListener('DOMContentLoaded', function() {
    cargarBodegas();
    cargarMonedas();
    
    // Cargar sucursales cuando cambia la bodega
    document.getElementById('bodega').addEventListener('change', cargarSucursales);
});

// Cargar Bodegas
function cargarBodegas() {
    fetch('php/obtener_bodegas.php')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('bodega');
            // Limpiar opciones previas excepto la primera
            while (select.options.length > 1) {
                select.remove(1);
            }
            
            if (data.success) {
                data.bodegas.forEach(bodega => {
                    const option = document.createElement('option');
                    option.value = bodega.id;
                    option.textContent = bodega.nombre;
                    select.appendChild(option);
                });
            }
        })
        .catch(error => console.error('Error al cargar bodegas:', error));
}

// Cargar Sucursales según la bodega seleccionada
function cargarSucursales() {
    const bodegaId = document.getElementById('bodega').value;
    const sucursalSelect = document.getElementById('sucursal');
    
    // Limpiar sucursales
    while (sucursalSelect.options.length > 1) {
        sucursalSelect.remove(1);
    }
    
    if (bodegaId === '') {
        return;
    }
    
    fetch('php/obtener_sucursales.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bodega_id: bodegaId })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                data.sucursales.forEach(sucursal => {
                    const option = document.createElement('option');
                    option.value = sucursal.id;
                    option.textContent = sucursal.nombre;
                    sucursalSelect.appendChild(option);
                });
            }
        })
        .catch(error => console.error('Error al cargar sucursales:', error));
}

// Cargar Monedas
function cargarMonedas() {
    fetch('php/obtener_monedas.php')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('moneda');
            // Limpiar opciones previas excepto la primera
            while (select.options.length > 1) {
                select.remove(1);
            }
            
            if (data.success) {
                data.monedas.forEach(moneda => {
                    const option = document.createElement('option');
                    option.value = moneda.id;
                    option.textContent = moneda.codigo + ' - ' + moneda.nombre;
                    select.appendChild(option);
                });
            }
        })
        .catch(error => console.error('Error al cargar monedas:', error));
}
