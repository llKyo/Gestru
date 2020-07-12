<?php require_once "templates/header.php"; ?>
<?php require_once "templates/nav.php"; ?>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Actividades</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="home.php">Home</a></li>
                        <li class="breadcrumb-item active">Actividades</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- /.content -->
    <section class="content">
        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h2 class="card-title"><button class="btn btn-success" onclick="cargarSelect(), setearFechas()" data-toggle="modal"
                        data-target="#modal-lg">+
                        Nueva Actividad</button></h2>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                        title="Collapse">
                        <i class="fas fa-minus"></i></button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip"
                        title="Remove">
                        <i class="fas fa-times"></i></button>
                </div>
                <div class="row text-right">
                    <div class="col-md-3 ml-auto">
                        <div class="form-group text-right">
                            <label for="selectObra" style="margin-top: 0.3rem;">Filtrar por fase</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <select id="selectFase" class="form-control"></select>
                        </div>
                    </div>
                    <div class="col-md-3 mr-auto">
                        <div class="form-group ">
                            <button class="btn btn-warning form-control text-uppercase font-weight-bold"
                                onclick="buscarFase()" id="buscarObraBtn">Filtrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body p-0">
                <table class="table table-striped projects">
                    <thead>
                        <tr>
                            <th>Actividad</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Trabajadores</th>
                            <th style="width: 10%">Estado</th>
                            <th style="width: 25%"></th>
                        </tr>
                    </thead>
                    <tbody id="tableActividades">

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
                    <h4 class="modal-title" onclick="limpiarModalAgregar() ">Crear nueva actividad</h4>
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
                                <label for="finTxt">Fase Asociada</label>
                                <select name="" class="form-control" id="cronogramaSelect">
                                    <!--<option value="crono 1">CRONO 1</option>
                                    <option value="crono 2">crono 2</option>
                                    <option value="crono 3">crono 3</option>-->
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3 mr-auto ">
                            <div class="form-group">
                                <label for="finTxt">Trabajadores Asociados</label>
                                <select name="" class="form-control" id="trabajadorSelect">
                                    <!--<option value="juan">juan</option>
                                    <option value="momo">momo</option>
                                    <option value="chan">chan</option>-->
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success swalDefaultSuccess" onclick="agregarActividad()"
                        id="agregarActividadBtn">Crear</button>
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
                    <h4 class="modal-title">Editar actividad</h4>
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
                            <label for="estadoSelectEdit">Estado</label>
                                <select name="" class="form-control" id="estadoSelectEdit">
                                    <option value="En ejecución">En ejecución</option>
                                    <option value="Terminado">Terminado</option>
                                
                            </select>
                        </div>
                        <div class="col-md-3 mr-auto ">
                            <div class="form-group">
                                <label for="trabajadorSelectEdit">Trabajadores Asociados</label>
                                <select name="" class="form-control" id="trabajadorSelectEdit">
                                    <!--<option value="juan">juan</option>
                                    <option value="momo">momo</option>
                                    <option value="chan">chan</option>-->
                                    <div class="invalid-feedback">Debe ingresar un trabajador</div>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="finTxt">Fase Asociada</label>
                                <select name="" class="form-control" id="cronogramaSelectEdit">
                                    <!--<option value="crono 1">CRONO 1</option>
                                    <option value="crono 2">crono 2</option>
                                    <option value="crono 3">crono 3</option>-->
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success swalDefaultSuccess" onclick="actualizarActividad()"
                        id="agregarActividadBtn">Actualizar</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->

        
    </div>

</div>
<!-- /.content-wrapper -->

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

<script src="js/actividades.js"></script>

</body>

</html>