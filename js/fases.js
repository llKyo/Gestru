/* firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        // User is not signed in.
        location.href = 'index.php';
        alert("no está autenticado");


    }
});
 */
let idFase;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

cargarSelectObra();

//cargar Selects
function cargarSelectObra() {
    const selectObra = document.querySelector("#selectObra");
    db.collection("obras").onSnapshot((querySnapshot) => {
        selectObra.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            const nombre = doc.nombreObra;
            selectObra.innerHTML += `
            <option value="${doc.id}">${doc.data().nombre}</option>
            `
        })

    })
}
const nombre = document.querySelector('#nombreTxt');
const inicio = document.querySelector("#inicioTxt");
const fin = document.querySelector('#finTxt');

function limpiarModalAgregar() {
    const nombre = document.querySelector('#nombreTxt');
    const inicio = document.querySelector("#inicioTxt");
    const fin = document.querySelector('#finTxt');

    nombre.classList.remove('is-invalid');
    inicio.classList.remove('is-invalid');
    fin.classList.remove('is-invalid');

    nombre.value = "";
    inicio.value = "";
    fin.value = "";
}

function setearFechas() {
    let hoy = moment().format('YYYY-MM-DD');
    inicio.min = hoy;
    inicio.value = hoy;
    fin.value = hoy;
    fin.min = hoy;

    inicio.addEventListener('change', () => {
        fin.min = inicio.value;
        fin.value = inicio.value;
    })
}


//AGREGAR CRONOGRAMA
function agregarCronograma() {

    const estado = document.querySelector("#selectEstado").value;
    const obra = document.querySelector("#selectObra").value;
    let inicioFB = document.querySelector("#inicio-feedback");
    let finFB = document.querySelector("#fin-feedback");


    // -------------- VALIDACIONES --------------

    inicioFB.innerText = "";
    finFB.innerText = "";
    nombre.classList.remove('is-invalid');
    inicio.classList.remove('is-invalid');
    fin.classList.remove('is-invalid');


    let error = false;

    if (nombre.value.length == 0) {
        error = true;
        nombre.classList.add('is-invalid');
    }

    if (inicio.value == "") {
        error = true;
        inicio.classList.add('is-invalid');
        inicioFB.innerText += "Debe ingresar una fecha de inicio";
    }
    if (fin.value == "") {
        error = true;
        fin.classList.add('is-invalid');
        finFB.innerText = "La fecha de término debe ser mayor a la de inicio";
    }

    if (inicio.value > fin.value) {
        error = true;
        inicio.classList.add('is-invalid');
        fin.classList.add('is-invalid');
        inicioFB.innerText += "La fecha de término debe ser mayor a la de inicio";
    }

    if (error) {
        return false;
    }

    // -------------- FIN VALIDACIONES --------------


    db.collection("cronogramas").add({
            nombre: nombre.value.trim(),
            fechaInicio: inicio.value,
            fechaTermmino: fin.value,
            estado: estado,
            obra: obra
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            Toast.fire({
                icon: 'success',
                title: '  Fase agregada correctamente.'
            });
            nombre.value = '';
            inicio.value = '';
            fin.value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    //Cerrar Modal
    $('#modal-lg').modal('hide');
}
//leer de Fase
const progreso = 0;
const table = document.querySelector('#tableCronogramas')
db.collection("cronogramas").onSnapshot((querySnapshot) => {
    table.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const id = doc.id;
        select = document.querySelector("#selectEstado");
        table.innerHTML += `
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().fechaInicio}</td>
        <td>${doc.data().fechaTermmino}</td>
        <td class="project_progress">
            <div class="progress progress-sm">
                <div class="progress-bar bg-green" role="progressbar" aria-valuenow="${progreso}" aria-valuemin="0" aria-valuemax="100" style="width: ${progreso}%">
                </div>
            </div>
            <small>
                ${progreso}% Completado
            </small>
        </td>
        <td class="project-state text-center">
            <span class="badge badge-success">${doc.data().estado}</span>
        </td>
        <td class="project-actions text-center">
        <a class="btn btn-info btn-md text-white" data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt"></i>Editar</a>
        <a class="btn btn-danger btn-md text-white" data-toggle="modal" data-target="#modal-delete" onclick="addIdModalEliminar('${id}')"><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        </tr>`
    });
});

function actualizarModal(id) {
    idFase = id;

    db.collection("cronogramas").onSnapshot((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            const id = doc.id;
            if (idFase == id) {
                document.querySelector("#nombreEdit").value = doc.data().nombre;
                document.querySelector("#inicioEdit").value = doc.data().fechaInicio;
                document.querySelector("#finEdit").value = doc.data().fechaTermmino;
            }

        })
    });

    const selectFase = document.querySelector("#selectObraModal");
    db.collection("obras").onSnapshot((querySnapshot) => {
        selectFase.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            //const nombre = doc.nombreObra;
            selectFase.innerHTML += `
            <option value="${doc.id}">${doc.data().nombre}</option>
            `
        })

    });
}

function editarFase() {

    const id = idFase;
    const nombre = document.querySelector('#nombreEdit');
    const inicio = document.querySelector('#inicioEdit');
    const fin = document.querySelector('#finEdit');
    const estado = document.querySelector("#selectEstadoModal").value;
    const obra = document.querySelector("#selectObraModal").value;
    let inicioFB = document.querySelector("#inicioEdit-feedback");
    let finFB = document.querySelector("#finEdit-feedback");


    inicioFB.innerText = "";
    finFB.innerText = "";
    nombre.classList.remove('is-invalid');
    inicio.classList.remove('is-invalid');
    fin.classList.remove('is-invalid');

    let error = false;

    if (nombre.value.length == 0) {
        error = true;
        nombre.classList.add('is-invalid');
    }

    if (inicio.value == "") {
        error = true;
        inicio.classList.add('is-invalid');
        inicioFB.innerText += "Debe ingresar una fecha de inicio";
    }
    if (fin.value == "") {
        error = true;
        fin.classList.add('is-invalid');
        finFB.innerText = "La fecha de término debe ser mayor a la de inicio";
    }

    if (inicio.value > fin.value) {
        error = true;
        inicio.classList.add('is-invalid');
        fin.classList.add('is-invalid');
        inicioFB.innerText += "La fecha de término debe ser mayor a la de inicio";
    }

    if (!error) {

        db.collection("cronogramas").doc(id).set({
            nombre: nombre.value,
            fechaInicio: inicio.value,
            fechaTermmino: fin.value,
            estado: estado,
            obra: obra
        }, function(error) {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });
        Toast.fire({
            icon: 'success',
            title: 'Registro actualizado correctamente.'
        });
        //Cerrar Modal
        $('#modal-edit').modal('hide');
    }
}


function editar(id, nombre, fechaInicio, fechaTermmino, estado, obra, select) {
    console.log("Entrando a funcion editar")
    document.querySelector("#nombreTxt").value = nombre;
    document.querySelector("#inicioTxt").value = fechaInicio;
    document.querySelector("#finTxt").value = fechaTermmino;
    document.querySelector("#selectEstado").value = estado;
    boton = document.querySelector("#agregarCronogramaBtn");
    boton.innerHTML = 'Guardar';
    select = document.querySelector("#selectEstado");
    select.removeAttribute("disabled");
    boton.onclick = function() {
        console.log("Entrando a funcion Guardar")
        let cronoEdit = db.collection("cronogramas").doc(id);
        let nombre = document.querySelector("#nombreTxt").value.trim();
        if (nombre == "") {
            alert('Debe ingresar un nombre');
            return false;
        }
        let inicio = document.querySelector("#inicioTxt").value;
        if (inicio == "") {
            alert("debe ingresar un inicio");
            return false
        }

        let fin = document.querySelector('#finTxt').value;
        if (fin == "") {
            alert("debe ingresar un fin");
            return false
        }
        let estado = document.querySelector("#selectEstado").value;
        let obra = document.querySelector("#selectObra").value;
        return cronoEdit.update({
            nombre: nombre,
            fechaInicio: inicio,
            fechaTermmino: fin,
            estado: estado,
            obra: obra
        }).then(function() {
            console.log("Documento actualizado");
            boton.innerHTML = 'Agregar';
            alert("Cronograma Actualizado");
            document.querySelector("#nombreTxt").value = "";
            document.querySelector("#inicioTxt").value = "";
            document.querySelector("#finTxt").value = "";

        }).catch(function(error) {
            console.log("no se actualizó correctamente", error);
        })

    }

}

let idEliminar;
const addIdModalEliminar = (id) => idEliminar = id;

//Borrar Cronograma
function eliminar() {
    id = idEliminar;
    db.collection("actividades").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (id == doc.data().cronograma) {
                eliminarActividades(doc.id);
            }
        })
    });
    db.collection("cronogramas").doc(id).delete().then(function() {
        Toast.fire({
            icon: 'success',
            title: 'Fase y sus respectivas actividades borrada correctamente.'
        });
        //Cerrar Modal
        $('#modal-delete').modal('hide');
    }).catch(function(error) {
        console.error("Error elimiando el objeto :", error);
    });

}

function eliminarActividades(idActividad) {
    db.collection("actividades").doc(idActividad).delete().then(function() {

        console.log("Documento borrado Correctamente.");
    }).catch(function(error) {
        console.error("Error elimiando el objeto :", error);
    });
}

cargarSelectObra1();

function cargarSelectObra1() {
    const selectFase = document.querySelector("#selectObra1");
    db.collection("obras").onSnapshot((querySnapshot) => {
        selectFase.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            //const nombre = doc.nombreObra;
            selectFase.innerHTML += `
            <option value="${doc.id}">${doc.data().nombre}</option>
            `
        })

    })
}

function buscarObra() {
    const obra = document.querySelector('#selectObra1').value;
    const table = document.querySelector('#tableCronogramas');
    table.innerHTML = '';
    db.collection("cronogramas").onSnapshot((querySnapshot) => {
        table.innerHTML = '';
        querySnapshot.forEach((doc) => {
            //const id = doc.id;
            if (obra == doc.data().obra) {
                const id = doc.id;
                table.innerHTML += `
                <tr>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().fechaInicio}</td>
                <td>${doc.data().fechaTermmino}</td>
                <td>${doc.data().estado}</td>
                <td class="project-actions text-center">
                    <a class="btn btn-info btn-md text-white" data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt"></i>Editar</a>
                    <a class="btn btn-danger btn-md text-white" data-toggle="modal" data-target="#modal-delete" onclick="addIdModalEliminar('${id}')"><i class="fas fa-trash"></i>Eliminar</a>
                </td>
                </tr>`
            }

        })
    });
}