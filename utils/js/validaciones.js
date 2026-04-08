// Validaciones del Formulario

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Limpiar mensaje anterior
    limpiarMensaje();
    
    // Validar todos los campos
    if (!validarFormulario()) {
        return;
    }
    
    // Si todas las validaciones pasan, enviar por AJAX
    enviarFormularioAJAX();
});

function validarFormulario() {
    // 1. Validar Código del Producto
    if (!validarCodigo()) return false;
    
    // 2. Validar Nombre del Producto
    if (!validarNombre()) return false;
    
    // 3. Validar Bodega
    if (!validarBodega()) return false;
    
    // 4. Validar Sucursal
    if (!validarSucursal()) return false;
    
    // 5. Validar Moneda
    if (!validarMoneda()) return false;
    
    // 6. Validar Precio
    if (!validarPrecio()) return false;
    
    // 7. Validar Material
    if (!validarMaterial()) return false;
    
    // 8. Validar Descripción
    if (!validarDescripcion()) return false;
    
    return true;
}

// 1. VALIDACIONES CÓDIGO DEL PRODUCTO
function validarCodigo() {
    const codigo = document.getElementById('codigo').value.trim();
    
    // Validar que no esté vacío
    if (codigo === '') {
        alert('El código del producto no puede estar en blanco.');
        return false;
    }

    // Validar longitud: 5-15 caracteres
    if (codigo.length < 5 || codigo.length > 15) {
        alert('El código del producto debe tener entre 5 y 15 caracteres.');
        return false;
    }

    // Validar formato: letras y números
    const regexCodigo = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,15}$/;
    if (!regexCodigo.test(codigo)) {
        alert('El código del producto debe contener letras y números.');
        return false;
    }
  

    
    return true;
}

// 2. VALIDACIONES NOMBRE DEL PRODUCTO
function validarNombre() {
    const nombre = document.getElementById('nombre').value.trim();
    
    // Validar que no esté vacío
    if (nombre === '') {
        alert('El nombre del producto no puede estar en blanco.');
        return false;
    }
    
    // Validar longitud: 2-50 caracteres
    if (nombre.length < 2 || nombre.length > 50) {
        alert('El nombre del producto debe tener entre 2 y 50 caracteres.');
        return false;
    }
    
    return true;
}

// 3. VALIDACIONES BODEGA
function validarBodega() {
    const bodega = document.getElementById('bodega').value;
    
    if (bodega === '') {
        alert('Debe seleccionar una bodega.');
        return false;
    }
    
    return true;
}

// 4. VALIDACIONES SUCURSAL
function validarSucursal() {
    const sucursal = document.getElementById('sucursal').value;
    
    if (sucursal === '') {
        alert('Debe seleccionar una sucursal para la bodega seleccionada.');
        return false;
    }
    
    return true;
}

// 5. VALIDACIONES MONEDA
function validarMoneda() {
    const moneda = document.getElementById('moneda').value;
    
    if (moneda === '') {
        alert('Debe seleccionar una moneda para el producto.');
        return false;
    }
    
    return true;
}

// 6. VALIDACIONES PRECIO
function validarPrecio() {
    const precio = document.getElementById('precio').value.trim();
    
    // Validar que no esté vacío
    if (precio === '') {
        alert('El precio del producto no puede estar en blanco.');
        return false;
    }
    
    // Validar formato: número positivo con hasta 2 decimales
    const regexPrecio = /^\d+(\.\d{1,2})?$/;
    if (!regexPrecio.test(precio)) {
        alert('El precio del producto debe ser un número positivo con hasta dos decimales.');
        return false;
    }
    
    // Validar que sea un número válido
    const precioNum = parseFloat(precio);
    if (isNaN(precioNum) || precioNum <= 0) {
        alert('El precio del producto debe ser un número positivo con hasta dos decimales.');
        return false;
    }
    
    return true;
}

// 7. VALIDACIONES MATERIAL
function validarMaterial() {
    const materiales = document.querySelectorAll('input[name="material"]:checked');
    
    // Validar que se hayan seleccionado al menos 2 materiales
    if (materiales.length < 2) {
        alert('Debe seleccionar al menos dos materiales para el producto.');
        return false;
    }
    
    return true;
}

// 8. VALIDACIONES DESCRIPCIÓN
function validarDescripcion() {
    const descripcion = document.getElementById('descripcion').value.trim();
    
    // Validar que no esté vacío
    if (descripcion === '') {
        alert('La descripción del producto no puede estar en blanco.');
        return false;
    }
    
    // Validar longitud: 10-1000 caracteres
    if (descripcion.length < 10 || descripcion.length > 1000) {
        alert('La descripción del producto debe tener entre 10 y 1000 caracteres.');
        return false;
    }
    
    return true;
}

// ENVÍO AJAX
function enviarFormularioAJAX() {
    const form = document.getElementById('productForm');
    const formData = new FormData(form);
    
    // Convertir checkboxes a array
    const materiales = document.querySelectorAll('input[name="material"]:checked');
    const materialesArray = Array.from(materiales).map(m => m.value);
    
    // Crear objeto con datos
    const datos = {
        codigo: document.getElementById('codigo').value.trim(),
        nombre: document.getElementById('nombre').value.trim(),
        bodega: document.getElementById('bodega').value,
        sucursal: document.getElementById('sucursal').value,
        moneda: document.getElementById('moneda').value,
        precio: document.getElementById('precio').value.trim(),
        material: materialesArray.join(','),
        descripcion: document.getElementById('descripcion').value.trim()
    };
    
    fetch('php/guardar_producto.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            mostrarMensaje('Producto guardado exitosamente.', 'success');
            document.getElementById('productForm').reset();
        } else {
            mostrarMensaje(data.message || 'Error al guardar el producto.', 'error');
            alert(data.message || 'Error al guardar el producto.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarMensaje('Error en la conexión con el servidor.', 'error');
    });
}

// Funciones auxiliares
function mostrarMensaje(mensaje, tipo) {
    const messageDiv = document.getElementById('responseMessage');
    messageDiv.textContent = mensaje;
    messageDiv.className = 'message ' + tipo;
}

function limpiarMensaje() {
    const messageDiv = document.getElementById('responseMessage');
    messageDiv.textContent = '';
    messageDiv.className = 'message';
}
