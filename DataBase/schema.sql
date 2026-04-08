-- ============================================
-- SCHEMA PARA BASE DE DATOS
-- ============================================

-- 1. TABLA DE BODEGAS
CREATE TABLE bodegas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    ubicacion VARCHAR(255),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. TABLA DE SUCURSALES
CREATE TABLE sucursales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    bodega_id INT NOT NULL,
    ubicacion VARCHAR(255),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_sucursal_bodega FOREIGN KEY (bodega_id) REFERENCES bodegas(id) ON DELETE CASCADE,
    CONSTRAINT unique_sucursal_bodega UNIQUE(nombre, bodega_id)
);

-- 3. TABLA DE MONEDAS
CREATE TABLE monedas (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(3) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    simbolo VARCHAR(10),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. TABLA DE PRODUCTOS
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(15) NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    bodega_id INT NOT NULL,
    sucursal_id INT NOT NULL,
    moneda_id INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    material VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_producto_bodega FOREIGN KEY (bodega_id) REFERENCES bodegas(id) ON DELETE RESTRICT,
    CONSTRAINT fk_producto_sucursal FOREIGN KEY (sucursal_id) REFERENCES sucursales(id) ON DELETE RESTRICT,
    CONSTRAINT fk_producto_moneda FOREIGN KEY (moneda_id) REFERENCES monedas(id) ON DELETE RESTRICT
);


-- DATOS DE PRUEBA
INSERT INTO bodegas (nombre, ubicacion) VALUES
('Bodega 1', 'Ubicación 1'),
('Bodega 2', 'Ubicación 2'),
('Bodega 3', 'Ubicación 3');

INSERT INTO sucursales (nombre, bodega_id, ubicacion) VALUES
('Sucursal A', 1, 'Zona Norte'),
('Sucursal B', 1, 'Zona Sur'),
('Sucursal C', 2, 'Zona Centro'),
('Sucursal D', 2, 'Zona Este'),
('Sucursal E', 3, 'Zona Oeste');

INSERT INTO monedas (codigo, nombre, simbolo) VALUES
('USD', 'Dólar Estadounidense', '$'),
('EUR', 'Euro', '€'),
('PEN', 'Sol Peruano', 'S/.'),
('CLP', 'Peso Chileno', '$'),
('COP', 'Peso Colombiano', '$');