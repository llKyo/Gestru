<?php require_once "templates/header.php"; ?>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="index.php" style="font-size: 25px;"><b>Ges</b>tru</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                    <a href="index.php" class="btn btn-info" onclick="cerrarSesion()">Desconectarse</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Content Wrapper. Contains page content -->
    <div class="content px-5">

        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Avances</h1>
                    </div><!-- /.col -->
                    <!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
        <div class="row">
            <div class="col-md-3 ml-auto">
                <div class="form-group">
                    <label for="selectObra">Seleccione obra asociada</label>
                    <select id="selectObra" class="form-control"></select>
                </div>
            </div>
            <div class="col-md-3 mr-auto ">
                <div class="form-group">
                    <label for="">Acción</label>
                    <button class="btn btn-warning form-control text-uppercase font-weight-bold" onclick="buscarObra()"
                        id="buscarObraBtn">Ver Estado</button>
                </div>
            </div>
        </div>
        <!-- /.content -->
        <section class="content">
            <!-- Default box -->
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Detalle de obra</h2>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                            title="Collapse">
                            <i class="fas fa-minus"></i></button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip"
                            title="Remove">
                            <i class="fas fa-times"></i></button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped projects">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                            </tr>
                        </thead>
                        <tbody id="tableObra">

                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </section>
        <!-- /.content -->

        <!-- .content -->
        <section class="content">
            <!-- Default box -->
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Detalle de la fase de obra</h2>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                            title="Collapse">
                            <i class="fas fa-minus"></i></button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip"
                            title="Remove">
                            <i class="fas fa-times"></i></button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped projects">
                        <thead>
                            <tr>
                                <th>Fase</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody id="tableFase">

                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </section>
        <!-- /.content -->


    </div>

    </div>
    <footer class="main-footer" style="margin-left: 0px; 
        position:absolute;
        bottom:0;
        width:100%;
        height:60px">
        <strong>Copyright &copy; 2020 <a href="https://github.com/llKyo" target="_blank">Gestru</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
            <b>Version</b> 1.0.0
        </div>
    </footer>
    <?php require_once "templates/scripts.php"; ?>

    <script src="js/estadoObra.js"></script>

</body>

</html>