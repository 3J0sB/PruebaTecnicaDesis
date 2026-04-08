<?php
require_once 'config.php';

try {
    $conexion = conectarBD();
    
    $sql = 'SELECT id, nombre FROM bodegas ORDER BY nombre ASC';
    $stmt = $conexion->prepare($sql);
    $stmt->execute();
    
    $bodegas = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'bodegas' => $bodegas
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
