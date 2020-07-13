autenticar();
let idObra;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
let nombre = document.querySelector('#nombreTxt');
let inicio = document.querySelector("#fechaInicioTxt");
let fin = document.querySelector('#fechaTerminoTxt');
let inicioFB = document.querySelector("#inicio-feedback");
let finFB = document.querySelector("#fin-feedback");
let selectTrabajador = document.querySelector("#selectCliente");

function cargarSelectTrabajadores() {
    db.collection("clientes").onSnapshot((querySnapshot) => {
        selectTrabajador.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            selectTrabajador.innerHTML += `
            <option value="${doc.data().correo}" >NOMBRE: "${doc.data().nombre}" RUT: "${doc.data().rut}" </option>
            `
        })

    })
}
cargarSelectTrabajadores();

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
    console.log(hoy);
    inicio.addEventListener('change', () => {
        fin.min = inicio.value;
        fin.value = inicio.value;
    })
}

function agregarObra() {
    /*     const nombre = document.querySelector('#nombreTxt');
        const inicio = document.querySelector('#fechaInicioTxt'); */
    /*  const fin = document.querySelector('#fechaTerminoTxt');
     let inicioFB = document.querySelector("#inicio-feedback");
     let finFB = document.querySelector("#fin-feedback"); */

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
    if (selectTrabajador.value == "") {
        selectTrabajador.classList.add("is-invalid");
        return false;
    }
    // -------------- FIN VALIDACIONES --------------

    db.collection("obras").add({
            nombre: nombre.value,
            fechaInicio: inicio.value,
            fechaTermmino: fin.value,
            clienteAsociado: selectTrabajador.value
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            Toast.fire({
                icon: 'success',
                title: 'Actividad agregada correctamente.'
            });
            document.querySelector('#nombreTxt').value = '';
            document.querySelector('#fechaInicioTxt').value = '';
            document.querySelector('#fechaInicioTxt').value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    //Cerrar Modal
    $('#modal-lg').modal('hide');
}

//Mostrar Obras
const table = document.querySelector('#tableObras');
db.collection("obras").onSnapshot((querySnapshot) => {
    table.innerHTML = ``;
    querySnapshot.forEach((doc) => {
        const id = doc.id;
        table.innerHTML += `
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().fechaInicio}</td>
        <td>${doc.data().fechaTermmino}</td>
        <td>${doc.data().clienteAsociado}</td>
        <td class="project-actions text-center">
        <a class="btn btn-info btn-md text-white" data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt"></i>Editar</a>
        <a class="btn btn-danger text-white btn-md" data-toggle="modal" data-target="#modal-delete" 
        onclick="addIdModalEliminar('${id}')"><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        </tr>`

    })

});
let idEliminar;
const addIdModalEliminar = (id) => idEliminar = id;

// TODO implementar feedback 
let eliminados = "";

const eliminar = () => {
    id = idEliminar;
    db.collection("cronogramas").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().obra);
            if (id == doc.data().obra) {
                eliminados += `Fase ${doc.data().nombre} eliminada. \n`;
                eliminarCronogramas(doc.id);
            }
        })
    });
    db.collection("obras").doc(id).delete().then(function() {
        eliminados += `Obra eliminada.`;
        Toast.fire({
            icon: 'success',
            title: 'Obra eliminada exitosamente',
        });
        //Cerrar Modal
        $('#modal-delete').modal('hide');
        eliminados = "";
    }).catch(function(error) {
        console.error("Error elimiando el objeto :", error);
    });
}

const eliminarCronogramas = (id) => {
    db.collection("actividades").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (id == doc.data().cronograma) {
                eliminados += `Actividad ${doc.data().nombre} eliminada. \n`;
                eliminarActividades(doc.id);
            }
        })
    });
    db.collection("cronogramas").doc(id).delete().then(function() {

    }).catch(function(error) {
        console.error("Error elimiando el objeto :", error);
    });
}

const eliminarActividades = (idActividad) => {
    db.collection("actividades").doc(idActividad).delete().then(function() {

    }).catch(function(error) {
        console.error("Error elimiando el objeto :", error);
    });
}

function actualizarModal(id) {
    idObra = id;

    db.collection("obras").onSnapshot((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            const id = doc.id;
            if (idObra == id) {
                document.querySelector("#nombreEdit").value = doc.data().nombre;
                document.querySelector("#fechaInicioEdit").value = doc.data().fechaInicio;
                document.querySelector("#fechaFinEdit").value = doc.data().fechaTermmino;
            }

        })
    });
}


function editarObra() {

    let id = idObra;
    /*  let nombre = document.querySelector('#nombreEdit');
    let inicio = document.querySelector('#fechaInicioEdit');
    let fin = document.querySelector('#fechaFinEdit');
    let inicioFB = document.querySelector("#inicioEdit-feedback");
    let finFB = document.querySelector("#finEdit-feedback");
 */

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
        db.collection("obras").doc(id).set({
            nombre: nombre.value,
            fechaInicio: inicio.value,
            fechaTermmino: fin.value
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