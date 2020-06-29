<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de sesion</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">


</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Gestru</a>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                    <a href="index.html" class="btn btn-success">Crear Cuenta</a>
                </li>

            </ul>
            </div>
        </nav>
    </header>

    <section class="main-section">
        <div class="background-overlay py-4 ">
            <div class="container">
                <div class="row ">
                    <div class="col-6 mx-auto">
                        <!--  <form action="registroUsuario"> -->
                        <div class="card">
                            <div class="card-header text-center text-white bg-dark">
                                <h4>Iniciar Sesion</h4>

                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="correoTxt">Correo</label>
                                    <input type="email" id="correoTxt" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="contrasenaTxt">Contraseña</label>
                                    <input type="password" id="contrasenaTxt" class="form-control">
                                </div>
                                <button class="btn btn-success form-control" onclick="iniciarSesion()">Ingresar
                                    Credenciales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


   
    <?php require_once "templates/scripts.php"; ?>

</body>

</html>