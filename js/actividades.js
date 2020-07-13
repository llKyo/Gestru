autenticar();

let idActividad;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});


/* Variables de inputs */
const nombre = document.querySelector("#nombreTxt");
const inicio = document.querySelector("#inicioTxt");
const fin = document.querySelector('#finTxt');
const cronograma = document.querySelector('#cronogramaSelect');
const trabajador = document.querySelector("#trabajadorSelect");
let inicioFB = document.querySelector("#inicio-feedback");
let finFB = document.querySelector("#fin-feedback");

cargarSelectTrabajadores();

function cargarSelectTrabajadores() {
    const selectTrabajador = document.querySelector("#trabajadorSelect");
    db.collection("trabajadores").onSnapshot((querySnapshot) => {
        selectTrabajador.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            //const nombre = doc.nombreObra;
            selectTrabajador.innerHTML += `
            <option value="${doc.data().nombre}">${doc.data().nombre}</option>
            `
        })

    })
}

function limpiarModalAgregar() {
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

setearFechas();




/* Agregar Actividad */
function agregarActividad() {

    inicioFB.innerText = "";
    finFB.innerText = "";
    nombre.classList.remove('is-invalid');
    inicio.classList.remove('is-invalid');
    fin.classList.remove('is-invalid');
    cronograma.classList.remove('is-invalid');
    trabajador.classList.remove('is-invalid');
    // -------------- VALIDACIONES --------------
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
    if (cronograma.value == "") {
        cronograma.classList.add("is-invalid");
        return false;
    }
    if (trabajador.value == "") {
        trabajador.classList.add("is-invalid");
        return false;
    }

    db.collection("actividades").add({
            nombre: nombre.value,
            fechaInicio: inicio.value,
            fechaTermmino: fin.value,
            cronograma: cronograma.value,
            trabajador: trabajador.value,
            estado: "En ejecución"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            Toast.fire({
                icon: 'success',
                title: 'Actividad agregada correctamente'
            });
            document.querySelector('#nombreTxt').value = '';
            document.querySelector('#inicioTxt').value = '';
            document.querySelector('#finTxt').value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    //Cerrar Modal
    $('#modal-lg').modal('hide');
}
//Mostrar de Actividades
const table = document.querySelector('#tableActividades');
db.collection("actividades").onSnapshot((querySnapshot) => {
    table.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const id = doc.id;
        table.innerHTML += `
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().fechaInicio}</td>
        <td>${doc.data().fechaTermmino}</td>
        <td>${doc.data().trabajador}</td>
        <td> <span class="badge badge-success">${doc.data().estado}</span></td>
        <td class="project-actions text-center">
        <a class="btn btn-info btn-md text-white" data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt" ></i>Editar</a>
        <a class="btn btn-danger btn-md text-white" data-toggle="modal" data-target="#modal-delete" onclick="addIdModalEliminar('${id}')"><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        </tr>`
    });
});


let idEliminar;
const addIdModalEliminar = (id) => idEliminar = id;

//Borrar Actividad
function eliminar(id) {
    id = idEliminar;
    db.collection("actividades").doc(id).delete().then(function() {
        Toast.fire({
            icon: 'success',
            title: 'Actividad borrada correctamente.'
        });
        //Cerrar Modal
        $('#modal-delete').modal('hide');
        console.log("Documento borrado Correctamente.");
    }).catch(function(error) {
        console.error("Error elimiando el objeto :", error);
    });
}

//cargar selects 
function cargarSelect() {
    let select = document.querySelector("#cronogramaSelect");
    db.collection("cronogramas").onSnapshot((querySnapshot) => {
        select.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            select.innerHTML += `
            <option value="${doc.id}">${doc.data().nombre}</option>
            `
        })

    });

}

function actualizarModal(id) {
    idActividad = id;
    
    let select = document.querySelector("#cronogramaSelectEdit");
    db.collection("cronogramas").onSnapshot((querySnapshot) => {
        select.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            select.innerHTML += `
            <option value="${doc.id}">${doc.data().nombre}</option>
            `
        })

    });

    db.collection("actividades").onSnapshot((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            const id = doc.id;
            if (idActividad == id) {
                document.querySelector("#nombreEdit").value = doc.data().nombre;
                document.querySelector("#inicioEdit").value = doc.data().fechaInicio;
                document.querySelector("#finEdit").value = doc.data().fechaTermmino;
                document.querySelector("#estadoSelectEdit").value = doc.data().estado;
                document.querySelector("#cronogramaSelectEdit").value = doc.data().cronograma;
            }

        })
    });

    

    let selectTrabajador = document.querySelector("#trabajadorSelectEdit");
    db.collection("clientes").onSnapshot((querySnapshot) => {
        selectTrabajador.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            //const nombre = doc.nombreObra;
            selectTrabajador.innerHTML += `
            <option value="${doc.data().nombre}">${doc.data().nombre}</option>
            `
        })

    })

}

function actualizarActividad() {

    let id = idActividad;
    let nombre = document.querySelector('#nombreEdit');
    let inicio = document.querySelector('#inicioEdit');
    let fin = document.querySelector('#finEdit');
    let fase = document.querySelector("#cronogramaSelectEdit");
    let estado = document.querySelector("#estadoSelectEdit");
    let trabajador = document.querySelector("#trabajadorSelectEdit");
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
    if (trabajador.value == "") {
        error = true;
        trabajador.classList.add('is-invalid');

    }

    if (!error) {
        db.collection("actividades").doc(id).set({
            nombre: nombre.value,
            fechaInicio: inicio.value,
            fechaTermmino: fin.value,
            cronograma: fase.value,
            trabajador: trabajador.value,
            estado: estado.value
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

cargarSelectFase();

function cargarSelectFase() {
    const selectFase = document.querySelector("#selectFase");
    db.collection("cronogramas").onSnapshot((querySnapshot) => {
        selectFase.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            selectFase.innerHTML += `
            <option value="${doc.id}">${doc.data().nombre}</option>
            `
        })

    })
}

function buscarFase() {
    const fase = document.querySelector('#selectFase').value;
    const table = document.querySelector('#tableActividades');
    table.innerHTML = '';
    db.collection("actividades").onSnapshot((querySnapshot) => {
        table.innerHTML = '';
        querySnapshot.forEach((doc) => {
            //const id = doc.id;
            if (fase == doc.data().cronograma) {
                const id = doc.id;
                table.innerHTML += `
                <tr>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().fechaInicio}</td>
                <td>${doc.data().fechaTermmino}</td>
                <td>${doc.data().trabajador}</td>
                <td> <span class="badge badge-success">${doc.data().estado}</span></td>

                <td class="project-actions text-center">
                    <a class="btn btn-info btn-md text-white" data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt" ></i>Editar</a>
                    <a class="btn btn-danger btn-md text-white" data-toggle="modal" data-target="#modal-delete" onclick="addIdModalEliminar('${id}')"><i class="fas fa-trash"></i>Eliminar</a>
                </td>
                </tr>`
            }

        })
    });
}