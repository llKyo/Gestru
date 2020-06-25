<?php require_once "templates/header.php"; ?>
<?php require_once "templates/nav.php"; ?>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Fases</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="home.php">Home</a></li>
                        <li class="breadcrumb-item active">Fases</li>
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
                <h2 class="card-title"><button class="btn btn-success" data-toggle="modal" data-target="#modal-lg"
                        onclick="limpiarModalAgregar()">+ Nueva Fase</button></h2>
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
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style="width: 15%">
                                Fase
                            </th>
                            <th style="width: 10%">
                                Fecha Inicio
                            </th>
                            <th style="width: 10%">
                                Fecha Fin
                            </th>
                            <th style="width: 15%">
                                Obra
                            </th>
                            <th style="width: 20%">
                                Progreso
                            </th>
                            <th style="width: 8%" class="text-center">
                                Estado
                            </th>
                            <th style="width: 20%">
                            </th>
                        </tr>
                    </thead>
                    <tbody id="tableCronogramas">
                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->

    </section>
    <!-- /.content -->

    <!-- /.modal -->

    <div class="modal fade" id="modal-lg">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Crear nueva fase</h4>
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
                                <div class="invalid-feedback">Debe ingresar un nombre</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 ml-auto">
                            <div class="form-group">
                                <label for="inicioTxt">Fecha de Inicio</label>
                                <input type="date" class="form-control " id="inicioTxt">
                                <div class="invalid-feedback" id="inicio-feedback"></div>
                            </div>
                        </div>
                        <div class="col-md-3 mr-auto">
                            <div class="form-group">
                                <label for="finTxt">Fecha de Término</label>
                                <input type="date" class="form-control " id="finTxt">
                                <div class="invalid-feedback" id="fin-feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 ml-auto">
                            <div class="form-group">
                                <label for="selectEstado">Estado</label>
                                <select id="selectEstado" class="form-control">
                                    <option value="Creado" cheked>Creado</option>
                                    <option value="En ejecucion">En ejecución</option>
                                    <option value="Finalizado">Finalizado</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3 mr-auto ">
                            <div class="form-group">
                                <label for="selectObra">Obra asociada</label>
                                <select id="selectObra" class="form-control"></select>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success swalDefaultSuccess" onclick="agregarCronograma()"
                        id="agregarCronogramaBtn">Crear</button>
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
                    <h4 class="modal-title">Actualizar Fase</h4>
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
                                <div class="invalid-feedback">Debe ingresar un nombre</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 ml-auto">
                            <div class="form-group">
                                <label for="inicioTxt">Fecha de Inicio</label>
                                <input type="date" class="form-control " id="inicioEdit">
                                <div class="invalid-feedback" id="inicioEdit-feedback"></div>
                            </div>
                        </div>
                        <div class="col-md-3 mr-auto">
                            <div class="form-group">
                                <label for="finTxt">Fecha de Término</label>
                                <input type="date" class="form-control " id="finEdit">
                                <div class="invalid-feedback" id="finEdit-feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 ml-auto">
                            <div class="form-group">
                                <label for="selectEstado">Estado</label>
                                <select id="selectEstadoModal" class="form-control">
                                    <option value="Creado">Creado</option>
                                    <option value="En ejecución" checked>En ejecución</option>
                                    <option value="Finalizado">Finalizado</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3 mr-auto ">
                            <div class="form-group">
                                <label for="selectObra">Obra asociada</label>
                                <select id="selectObraModal" class="form-control"></select>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success swalDefaultSuccess"
                        onclick="editarFase()" id="editarCronogramaBtn">Actualizar</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</div>
<!-- /.content-wrapper -->

<?php require_once "templates/footer.php"; ?>
<?php require_once "templates/scripts.php"; ?>

<script src="js/fases.js"></script>

</body>

</html>