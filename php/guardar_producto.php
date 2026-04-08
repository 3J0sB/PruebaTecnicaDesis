<?php
require_once 'config.php';

// Obtener datos del formulario
$datos = json_decode(file_get_contents('php://input'), true);


$errores = [];

$codigo = isset($datos['codigo']) ? trim($datos['codigo']) : '';
$nombre = isset($datos['nombre']) ? trim($datos['nombre']) : '';
$bodega = isset($datos['bodega']) ? $datos['bodega'] : '';
$sucursal = isset($datos['sucursal']) ? $datos['sucursal'] : '';
$moneda = isset($datos['moneda']) ? $datos['moneda'] : '';
$precio = isset($datos['precio']) ? trim($datos['precio']) : '';
$material = isset($datos['material']) ? trim($datos['material']) : '';
$descripcion = isset($datos['descripcion']) ? trim($datos['descripcion']) : '';


// Si hay errores, devolver respuesta con errores
if (!empty($errores)) {
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errores)
    ]);
    exit();
}

// Intentar guardar en la base de datos
try {
    $conexion = conectarBD();
    
    // Verificar si el código ya existe
    $sql_check = 'SELECT id FROM productos WHERE codigo = :codigo';
    $stmt_check = $conexion->prepare($sql_check);
    $stmt_check->bindParam(':codigo', $codigo, PDO::PARAM_STR);
    $stmt_check->execute();
    
    if ($stmt_check->rowCount() > 0) {
        echo json_encode([
            'success' => false,
            'message' => 'El código del producto ya está registrado.'
        ]);
        exit();
    }
    
    // Insertar producto
    $sql = 'INSERT INTO productos (codigo, nombre, bodega_id, sucursal_id, moneda_id, precio, material, descripcion, fecha_registro)
            VALUES (:codigo, :nombre, :bodega, :sucursal, :moneda, :precio, :material, :descripcion, NOW())';
    
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':codigo', $codigo, PDO::PARAM_STR);
    $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
    $stmt->bindParam(':bodega', $bodega, PDO::PARAM_INT);
    $stmt->bindParam(':sucursal', $sucursal, PDO::PARAM_INT);
    $stmt->bindParam(':moneda', $moneda, PDO::PARAM_INT);
    $stmt->bindParam(':precio', $precio, PDO::PARAM_STR);
    $stmt->bindParam(':material', $material, PDO::PARAM_STR);
    $stmt->bindParam(':descripcion', $descripcion, PDO::PARAM_STR);
    
    if ($stmt->execute()) {
        echo json_encode([
            'success' => true,
            'message' => 'Producto guardado exitosamente.'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Error al guardar el producto.'
        ]);
    }
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error en servidor: ' . $e->getMessage()
    ]);
}
?>
