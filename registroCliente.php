<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Cliente</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

</head>

<body >
<header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Gestru</a>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                    <a href="login.php" class="btn btn-primary">Iniciar Sesión</a>
                </li>

            </ul>
            </div>
        </nav>
    </header>

    <div class="row ">
        <div class="col-6 mx-auto py-4">
            <div class="card">
                <div class="card-header text-center bg-dark text-white">
                    <h4>Registrese en Gestru</h4>

                </div>
                <div class="card-body text-dark">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="nombreTxt">Nombre</label>
                                <input type="text" id="nombreTxt" required class="form-control" placeholder="Ingrese Nombre y Apellido">
                            </div>
                            <div class="form-group">
                                <label for="rutTxt">Rut</label>
                                <input type="text" id="rutTxt" name="rut" placeholder="Ingrese RUT" class="form-control">

                            </div>
                            <div class="form-group">
                                <label for="correoTxt">Correo</label>
                                <input type="text" id="correoTxt" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="contrasenaTxt">Contraseña</label>
                                <input type="password" id="contrasenaTxt" placeholder="de 4 o mas caracteres" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="contactoTxt">Contacto</label>
                                <input type="text" id="contactoTxt" class="form-control" placeholder="Solo 8 numeros">
                            </div>
                            <div class="form-group">
                                <label for="selectTipo">Tipo de Usuario</label>
                                <select class="form-control" id="tipoSelect">
                                    <option value="seleccione" cheked>Seleccione</option>
                                    <option value="jefe">Jefe de Obra</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="trabajador">Trabajador</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group py-2">
                        <button class="btn btn-outline-primary form-control" onclick="registrarCliente()" id="registrarUsuarioBtn">Registrarse</button>
                    </div>
                </div>

            </div>
        </div>

    </div>






    <?php require_once "templates/scripts.php"; ?>
    <script src="js/usuarios.js"></script>
</body>

</html>