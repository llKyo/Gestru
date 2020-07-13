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
                </div>
                <!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="home.php">Home</a></li>
                        <li class="breadcrumb-item active">Obras</li>
                    </ol>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h2 class="card-title"><button class="btn btn-success" data-toggle="modal" data-target="#modal-lg" onclick="limpiarModalAgregar(),setearFechas()">+ Nueva Obra</button></h2>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i class="fas fa-minus"></i></button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                        <i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="card-body table-responsive p-0">
                <table class="table table-striped projects table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>
                                Obra
                            </th>
                            <th>
                                Fecha Inicio
                            </th>
                            <th>
                                Fecha Termino
                            </th>
                            <th>
                                Cliente Asociado
                            </th>
                            <th style="width: 20%">
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
                            <div class="invalid-feedback" id="nombre-feedback">Debe ingresar un nombre</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 ml-auto">
                        <div class="form-group">
                            <label for="fechaInicioTxt">Fecha Inicio</label>
                            <input type="date" class="form-control" id="fechaInicioTxt">
                            <div class="invalid-feedback" id="inicio-feedback"></div>
                        </div>
                    </div>
                    <div class="col-md-3 mr-auto">
                        <div class="form-group">
                            <label for="fechaTerminoTxt">Fecha Termino</label>
                            <input type="date" class="form-control" id="fechaTerminoTxt">
                            <div class="invalid-feedback" id="fin-feedback"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="form-group">
                         <label for="">Cliente Asociado</label>
                            <select  class="form-control text-uppercase" id="selectCliente"></select>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success swalDefaultSuccess" onclick="agregarObra()" id="agregarBtn">Crear</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->


<div class="modal fade" id="modal-edit">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Editar obra</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="form-group">
                            <label for="nombreTxt">Nombre</label>
                            <input type="text" class="form-control " id="nombreEdit">
                            <div class="invalid-feedback" id="nombreEdit-feedback">Debe ingresar un nombre</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 ml-auto">
                        <div class="form-group">
                            <label for="fechaInicioTxt">Fecha Inicio</label>
                            <input type="date" class="form-control" id="fechaInicioEdit">
                            <div class="invalid-feedback" id="inicioEdit-feedback"></div>
                        </div>
                    </div>
                    <div class="col-md-3 mr-auto">
                        <div class="form-group">
                            <label for="fechaTerminoTxt">Fecha Termino</label>
                            <input type="date" class="form-control" id="fechaFinEdit">
                            <div class="invalid-feedback" id="finEdit-feedback"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="form-group">
                         <label for="">Cliente Asociado</label>
                            <select  class="form-control text-uppercase" id="selectClienteEdit">
                            
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success swalDefaultSuccess" onclick="editarObra()" id="actualizarBtn">Actualizar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<!-- Modal confirmar delete -->
<div class="modal fade" id="modal-delete">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">¿Estás seguro?</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <!-- <div class="modal-body">
              <p>Al eliminar la obra se eliminarán las fases y actividades relacionadas con esta.</p>
            </div> -->
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-danger" onclick="eliminar()">Eliminar</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- Fin Modal confirmar delete -->

<?php require_once "templates/footer.php"; ?>
<?php require_once "templates/scripts.php"; ?>

<script src='js/obras.js'></script>

</body >

</html>