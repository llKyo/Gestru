<?php require_once "templates/header.php"; ?>
<?php require_once "templates/nav.php"; ?>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Trabajadores</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="home.php">Home</a></li>
                        <li class="breadcrumb-item active">Trabajadores</li>
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
                        Nuevo Trabajador</button></h2>
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
                                Nombre
                            </th>
                            <th>
                                Rut
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Contacto
                            </th>
                            <th>
                                Rol
                            </th>
                            <th style="width: 20%">
                            </th>
                        </tr>
                    </thead>
                    <tbody id="tableTrabajadores">

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
                    <h4 class="modal-title">Ingresar nuevo trabajador</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="nombreTxt">Nombre</label>
                                <input type="text" class="form-control " id="nombreTxt" placeholder="Ingrese nombre del trabajador">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="apellidoTxt">Rut</label>
                                <input type="text" class="form-control " id="rutTxt" placeholder="Ingrese rut del trabajador">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="contactoTxt">Email</label>
                                <input type="text" class="form-control " id="emailTxt" placeholder="Ingrese email del trabajador">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="contactoTxt">Contacto</label>
                                <input type="text" class="form-control " id="contactoTxt" placeholder="Ingrese contacto del trabajador">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="rolTxt">Rol</label>
                                <input type="text" id="rolTxt" required class="form-control"
                                    placeholder="Ingrese rol del trabajador">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success swalDefaultSuccess" data-dismiss="modal"
                        onclick="registrarTrabajador()" id="registrarTrabajadorBtn">Registrar</button>
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
                    <h4 class="modal-title">Actualizar datos de trabajador</h4>
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
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="apellidoTxt">Rut</label>
                                <input type="text" class="form-control " id="rutEdit" >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="contactoTxt">Email</label>
                                <input type="text" class="form-control " id="emailEdit">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="contactoTxt">Contacto</label>
                                <input type="text" class="form-control " id="contactoEdit">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                                <label for="rolTxt">Rol</label>
                                <input type="text" id="rolEdit" required class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success swalDefaultSuccess" data-dismiss="modal"
                        onclick="actualizarTrabajador()" id="registrarTrabajadorBtn">Actualizar</button>
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

<script src="js/trabajadores.js"></script>

</body>

</html>