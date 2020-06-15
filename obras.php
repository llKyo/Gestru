<?php require_once "templates/header.php"; ?>
<?php require_once "templates/nav.php"; ?>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Obras</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="home.php">Home</a></li>
                        <li class="breadcrumb-item active">Obras</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h2 class="card-title"><button class="btn btn-success" data-toggle="modal" data-target="#modal-lg">+
                        Nueva Obra</button></h2>
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
                            <th>
                                Fase
                            </th>
                            <th>
                                Fecha Inicio
                            </th>
                            <th>
                                Fecha Termino
                            </th>
                            <th style="width: 40%">
                            </th>
                        </tr>
                    </thead>
                    <tbody id="tableObras">

                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->

    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!-- /.modal -->
    <div class="modal fade" id="modal-lg">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Crear nueva obra</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="nombreTxt">Nombre</label>
                                <input type="text" class="form-control " id="nombreTxt">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 ml-auto">
                            <div class="form-group">
                                <label for="fechaInicioTxt">Fecha Inicio</label>
                                <input type="date" class="form-control" id="fechaInicioTxt" >
                            </div>
                        </div>
                        <div class="col-md-3 mr-auto">
                            <div class="form-group">
                                <label for="fechaTerminoTxt">Fecha Termino</label>
                                <input type="date" class="form-control" id="fechaTerminoTxt">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success swalDefaultSuccess" data-dismiss="modal"
                        onclick="agregarObra()" id="agregarBtn">Agregar</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

<?php require_once "templates/footer.php"; ?>
<?php require_once "templates/scripts.php"; ?>

<script src='js/obras.js'></script>

</body>
</html>