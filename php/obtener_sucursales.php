<?php
require_once 'config.php';

// Obtener el ID de la bodega
$datos = json_decode(file_get_contents('php://input'), true);
$bodega_id = isset($datos['bodega_id']) ? intval($datos['bodega_id']) : 0;

if ($bodega_id <= 0) {
    echo json_encode([
        'success' => false,
        'message' => 'ID de bodega inválido.'
    ]);
    exit();
}

try {
    $conexion = conectarBD();
    
    $sql = 'SELECT id, nombre FROM sucursales WHERE bodega_id = :bodega_id ORDER BY nombre ASC';
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':bodega_id', $bodega_id, PDO::PARAM_INT);
    $stmt->execute();
    
    $sucursales = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'sucursales' => $sucursales
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
