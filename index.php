<!DOCTYPE html>
<html lang="es">

<head>
    <title>Gestru</title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Bootstrap 4 landing page template for developers and startups">
    <meta name="author" content="Xiaoying Riley at 3rd Wave Media">
    <link rel="shortcut icon" href="favicon.ico">
    <link
        href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
        rel='stylesheet' type='text/css'>
    <!-- FontAwesome JS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <!-- Global CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- Theme CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/styles.css">

</head>

<body>
    <!-- ******HEADER****** -->
    <header id="header" class="header">
        <div class="container">
            <h1 class="logo">
                <a class="scrollto" href="#hero">
                    <span class="logo-icon-wrapper"><img class="logo-icon" src="dist/img/logo.png" alt="icon"></span>
                    <span class="text"><span class="highlight">Ges</span>tru</span></a>
            </h1>
            <!--//logo-->
            <nav class="main-nav navbar-expand-md float-right navbar-inverse" role="navigation">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!--//nav-toggle-->

                <div id="navbar-collapse" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"><a class="active nav-link scrollto" href="#about">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link scrollto" href="#contact">Contáctanos</a></li>
                        <li class="nav-item"><a class="nav-link " href="login.php">Iniciar Sesión</a></li>
                        <li class="nav-item"><a class="nav-link " href="registroCliente.php">Registrese</a></li>
                    </ul>
                    <!--//nav-->
                </div>
                <!--//navabr-collapse-->
            </nav>
            <!--//main-nav-->
        </div>
        <!--//container-->
    </header>
    <!--//header-->

    <div id="hero" class="hero-section">

        <div id="hero-carousel" class="hero-carousel carousel carousel-fade slide" data-ride="carousel"
            data-interval="10000">

            <div class="figure-holder-wrapper">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="figure-holder">
                            <!--<img class="figure-image img-fluid" src="assets/images/imac.png" alt="image" />-->
                        </div>
                        <!--//figure-holder-->
                    </div>
                    <!--//row-->
                </div>
                <!--//container-->
            </div>
            <!--//figure-holder-wrapper-->

            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#hero-carousel"></li>
                <li data-slide-to="1" data-target="#hero-carousel"></li>
                <li data-slide-to="2" data-target="#hero-carousel"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">

                <div class="carousel-item item-1 active">
                    <div class="item-content container">
                        <div class="item-content-inner">

                            <h2 class="heading">Empresa seria y dedicada<br class="d-none d-md-block"></h2>
                            <p class="intro">José Marín SPA, Empresa dedicada a la construcción de obras civiles
                                pequeñas y medianas</p>
                            <a class="btn btn-primary btn-cta" href="registroCliente.php"
                                target="_blank">Registrarme</a>

                        </div>
                        <!--//item-content-inner-->
                    </div>
                    <!--//item-content-->
                </div>
                <!--//item-->

                <div class="carousel-item item-2">
                    <div class="item-content container">
                        <div class="item-content-inner">

                            <h2 class="heading">Gestión 24/7</h2>
                            <p class="intro">Visualiza tu estado de avance cuando quieras</p>
                            <a class="btn btn-primary btn-cta" href="registroCliente.php"
                                target="_blank">Registrarme</a>


                        </div>
                        <!--//item-content-inner-->
                    </div>
                </div>
                <!--//item-->

                <div class="carousel-item item-3">
                    <div class="item-content container">
                        <div class="item-content-inner">
                            <h2 class="heading">¿Listo para probar Gestru?</h2>
                            <p class="intro">Contáctanos a nuestro correo josemarin@gmail.com</p>
                            <a class="btn btn-primary btn-cta" href="#" target="_blank">Contáctanos</a>
                        </div>
                        <!--//item-content-inner-->
                    </div>
                </div>
                <!--//item-->
            </div>
            <!--//carousel-inner-->

        </div>
        <!--//carousel-->
    </div>
    <!--//hero-->



    <!-- <div id="pricing" class="pricing-section">
        <div class="container text-center">
            <h2 class="section-title">Precios</h2>
            <div class="intro">Diseño vía ejemplo de módulo adicional de publicidad a las ventas</div>
            <div class="pricing-wrapper row">
                <div class="item item-1 col-md-4 col-12">
                    <div class="item-inner">
                        <h3 class="item-heading">Presupuesto<br><span class="item-heading-desc"></span></h3>
                        <div class="price-figure">
                            <span class="currency"></span><span class="number">Gratis</span>
                        </div>
                        <ul class="list-unstyled mb-3">
	                        <li class="mb-2"><i class="fas fa-check"></i> Detalle de los costos de la obra</li>
                            <li class="mb-2"><i class="fas fa-check"></i> Tiempo estimado del término de la obra</li>
                            
                        </ul>
                        <div class="mb-3 pt-2"><a href="#" target="_blank">Detalles</a></div>
                        <a class="btn btn-cta" href="#">Contáctanos</a>                        
                    </div>
                </div>
                <div class="item item-2 col-md-4 col-12">
                    <div class="item-inner">
                        <h3 class="item-heading">Obra básica<br><span class="item-heading-desc"></span></h3>
                       
                        <div class="price-figure">
                            <span class="currency">$</span><span class="number">20.000</span><br><h5></h5>
                        </div>
                        <ul class="list-unstyled mb-3">
                            <li class="mb-2"><i class="fas fa-check"></i> Estado de avance diario</li>
                            <li class="mb-2"><i class="fas fa-check"></i> Monitoreo del personal involucrado</li>
                            <li class="mb-2"><i class="fas fa-times"></i> Disponibilidad 24/7</li>
                        </ul>
                        <div class="mb-3"><a href="#" target="_blank">Detalles</a></div>
                        <a class="btn btn-cta" href="#">Obtener Ahora!</a>
                        
                    </div>
                </div>
                
                <div class="item item-3 col-md-4 col-12">
                    <div class="item-inner">
                        <h3 class="item-heading">Obra Avanzada<br><span class="item-heading-desc"></span></h3>
                        <div class="price-figure">
                            <span class="currency">$</span><span class="number">50.000</span>
                        </div>
                        <ul class="list-unstyled mb-3">
                            <li class="mb-2"><i class="fas fa-check"></i> Estado de avance diario</li>
                            <li class="mb-2"><i class="fas fa-check"></i> Monitoreo del personal involucrado</li>
                            <li class="mb-2"><i class="fas fa-check"></i> Disponibilidad 24/7</li>
                        </ul>
                        <div class="mb-3"><a href="#" target="_blank">Detalles</a></div>
                        <a class="btn btn-cta" href="#" target="_blank">Obtener Ahora!</a>
                        
                    </div>
                </div>

            
            </div>
            
        </div>
    </div>//pricing-section -->


    <footer class="footer text-center">
        <div class="container">
            <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
            <small class="copyright">Designed with <i class="fas fa-heart"></i> by <a href="https://github.com/llKyo"
                    target="_blank">Kyo Chino 🐤</a></small>


        </div>
        <!--//container-->
    </footer>

    <!-- BOOSTRAP SCRIPTS -->

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>

    <!-- //BOOSTRAP SCRIPTS -->

    <script type="text/javascript" src="assets/js/main.js"></script>

</body>

</html>