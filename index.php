<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro de Producto</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Formulario de Producto</h1>
        
        <form id="productForm" method="POST" action="php/guardar_producto.php">
            <div class="form-row">
                <div class="form-group">
                    <label for="codigo">Código</label>
                    <input type="text" id="codigo" name="codigo" placeholder="Ej: PROD001" >
                </div>
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Ingresar nombre completo" >
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="bodega">Bodega</label>
                    <select id="bodega" name="bodega" >
                        <option value="">Seleccionar bodega</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="sucursal">Sucursal</label>
                    <select id="sucursal" name="sucursal" >
                        <option value="">Seleccionar sucursal</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="moneda">Moneda</label>
                    <select id="moneda" name="moneda" >
                        <option value="">Seleccionar moneda</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="precio">Precio</label>
                    <input type="text" id="precio" name="precio" placeholder="1500" >
                </div>
            </div>

            <div class="form-group">
                <label>Material del Producto</label>
                <div class="checkbox-group">
                    <label class="checkbox">
                        <input type="checkbox" name="material" value="Plástico"> Plástico
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" name="material" value="Metal"> Metal
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" name="material" value="Madera"> Madera
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" name="material" value="Vidrio"> Vidrio
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" name="material" value="Textil"> Textil
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea id="descripcion" name="descripcion" rows="4" placeholder="Descripción del producto..." ></textarea>
            </div>

            <button type="submit" class="btn-submit">Guardar Producto</button>
        </form>

        <div id="responseMessage" class="message"></div>
    </div>

    <script src="utils/js/validaciones.js"></script>
    <script src="utils/js/cargas_dinamicas.js"></script>
</body>
</html>
