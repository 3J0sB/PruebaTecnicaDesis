<?php
require_once 'config.php';

try {
    $conexion = conectarBD();
    
    $sql = 'SELECT id, codigo, nombre FROM monedas ORDER BY codigo ASC';
    $stmt = $conexion->prepare($sql);
    $stmt->execute();
    
    $monedas = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'monedas' => $monedas
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
