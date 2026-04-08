================================================================================
               Prueba de Diagnostico - DESIS
================================================================================

DESCRIPCIÓN:
Sistema web para registro de productos con validaciones en cliente y servidor.

================================================================================
REQUISITOS PREVIOS:
================================================================================
- PHP 8.5 o superior (necesario tenerlo agregado al PATH de nuestra maquina)
- PostgreSQL 17+ o superior
- Se recomienta utilizar alguna herramienta de interfaz grafica para gestionar la db como Dbeaver o PgAdmin
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

================================================================================
ESTRUCTURA DEL PROYECTO:
================================================================================

/
├── index.php                   # Formulario principal
├── README.txt                  # Este archivo
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos CSS
├── utils     
│   └── js/
│       ├── validaciones.js     # Validaciones JavaScript
│       └── cargas_dinamicas.js # Carga dinámicos de datos
├── php/
│   ├── config.php              # Configuración de BD
│   ├── guardar_producto.php    # Guardar producto
│   ├── obtener_bodegas.php     # Obtener bodegas
│   ├── obtener_sucursales.php  # Obtener sucursales
│   └── obtener_monedas.php     # Obtener monedas
└── DataBase/
    └── schema.sql              # Script SQL para crear tablas y cargar datos iniciales

================================================================================
INSTALACIÓN:
================================================================================

1. CREAR LA BASE DE DATOS

   PostgreSQL:
   ----------------
   - Crear la base de datos "producto_db" 
   - Cargar el script schema.sql en la base de datos previamente creada que se encuentra ubicado en la carpeta DataBase


2. CONFIGURAR ARCHIVO config.php

   Abrir php/config.php y ajustar:
   - DB_TYPE: 'postgresql' o 'mysql'
   - DB_HOST: localhost (o IP del servidor)
   - DB_USER: usuario de BD
   - DB_PASS: contraseña
   - DB_PORT: puerto (5432 PostgreSQL, 3306 MySQL)


3. INICIAR SERVIDOR

    - Para iniciar el servior utilizar el comando "php -S localhost:8000"


