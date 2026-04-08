# Prueba de Diagnóstico - DESIS

## Requisitos Previos

- PHP 8.5 o superior (necesario tenerlo agregado al PATH de nuestra máquina)
- PostgreSQL 17 o superior
- Se recomienda utilizar alguna herramienta de interfaz gráfica para gestionar la base de datos, como **DBeaver** o **PgAdmin**
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

---

## Estructura del Proyecto

```
/
├── index.php                   # Formulario principal
├── README.md                   # Este archivo
├── assets/
│   └── css/
│       └── styles.css          # Estilos CSS
├── utils/
│   └── js/
│       ├── validaciones.js     # Validaciones JavaScript
│       └── cargas_dinamicas.js # Carga dinámica de datos
├── php/
│   ├── config.php              # Configuración de BD
│   ├── guardar_producto.php    # Guardar producto
│   ├── obtener_bodegas.php     # Obtener bodegas
│   ├── obtener_sucursales.php  # Obtener sucursales
│   └── obtener_monedas.php     # Obtener monedas
└── DataBase/
    └── schema.sql              # Script SQL para crear tablas y cargar datos iniciales
```

---

## Instalación

### 1. Crear la base de datos (PostgreSQL)

- Crear la base de datos `producto_db`
- Cargar el script `schema.sql` ubicado en la carpeta `DataBase/` en la base de datos recién creada

### 2. Configurar el archivo `config.php`

Abrir `php/config.php` y ajustar los siguientes parámetros:

| Parámetro | Descripción |
|-----------|-------------|
| `DB_HOST` | `localhost` (o IP del servidor) |
| `DB_USER` | Usuario de la base de datos |
| `DB_PASS` | Contraseña |
| `DB_PORT` | Puerto de PostgreSQL (por defecto `5432`) |

### 3. Iniciar el servidor

Ejecutar el siguiente comando en la raíz del proyecto:

```bash
php -S localhost:8000
```