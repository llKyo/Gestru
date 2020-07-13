<?php require_once "templates/header.php"; ?>
<?php require_once "templates/nav.php"; ?>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Avances</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="home.php">Home</a></li>
                        <li class="breadcrumb-item active">Avances</li>
                    </ol>
                </div><!-- /.col -->
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
            <div class="card-body table-responsive p-0">
                <table class="table table-striped projects table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Estado</th>
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
            <div class="card-body table-responsive p-0">
                <table class="table table-striped projects table-hover text-nowrap">
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
<!-- /.content-wrapper -->

<?php require_once "templates/footer.php"; ?>
<?php require_once "templates/scripts.php"; ?>

<script src="js/avances.js"></script>

</body>

</html>