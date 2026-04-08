<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'postgres');
define('DB_PASS', '1234'); // CAMBIAR CONTRASEÑA A LA DEL USUARIO
define('DB_NAME', 'producto_db');
define('DB_PORT', '5432');

// Headers de respuesta JSON
header('Content-Type: application/json; charset=utf-8');

// Función para conectar a la base de datos
function conectarBD() {
    try {
    $conexion = new PDO(
        "pgsql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME,
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
    );
    return $conexion;
    } catch (PDOException $e) {
        throw new Exception('Error de conexión a la base de datos: ' . $e->getMessage());
    }
}
?>
