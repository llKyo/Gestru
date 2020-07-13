<?php require_once "templates/header.php"; ?>

<body class="hold-transition register-page" style="background-image: url(img/fondo-login.jpg)">
    <div class="register-box">
        <div class="register-logo" style="font-size: 30px; color: white;">
            <h1><b>Ges</b>tru</h1>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Registro de un nuevo cliente</p>

                <form action="../../index.html" method="post">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Nombre" id="nombreTxt">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Correo" id="correoTxt">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Rut" id="rutTxt">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Contacto" id="contactoTxt">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Constraseña" id="contrasenaTxt">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Repita la contraseña" id="contrasenaRepTxt">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block" onclick="registrarCliente()" id="registrarUsuarioBtn">Registrarme</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <div class="social-auth-links text-center">
                    <p>- O -</p>
                    <p>¿Ya tienes cuenta?</p>
                    <a href="login.php" class="btn btn-block btn-danger">Iniciar sesión</a>
                </div>

                <a href="index.php" class="text-center">Volver al inicio</a>
            </div>
            <!-- /.form-box -->
        </div><!-- /.card -->
    </div>
    <!-- /.register-box -->


    <?php require_once "templates/scripts.php"; ?>
    <script src="js/usuarios.js"></script>

</body>

</html>