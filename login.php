<?php require_once "templates/header.php"; ?>

<body class="hold-transition login-page" style="background-image: url(img/fondo-login.jpg)">
    <div class="login-box">
        <div class="login-logo" style="font-size: 30px; color: white;">
            <h1><b>Ges</b>tru</h1>
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg" style="font-size: 20px;">Inicio de sesión</p>


                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Correo" id="correoTxt">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Contraseña" id="contrasenaTxt">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- /.col -->
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block" onclick="iniciarSesion()">Iniciar Sesión</button>
                    </div>
                    <!-- /.col -->
                </div>

                <div class="social-auth-links text-center mb-3">
                    <p>- O -</p>
                    <p>¿No tienes cuenta?</p>
                    <a href="registroCliente.php" class="btn btn-block btn-danger">
                        Registrate
                    </a>
                </div>
                <p class="mb-1">
                    <a href="index.php">Volver al inicio</a>
                </p>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->


    <?php require_once "templates/scripts.php"; ?>

</body>

</html>