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
            <option>${doc.data().nombre}</option>
            `
        })

    })
}

function limpiarModalAgregar(){
    const nombre      = document.querySelector('#nombreTxt');
    const inicio      = document.querySelector("#inicioTxt");
    const fin         = document.querySelector('#finTxt');

    nombre.classList.remove('is-invalid');
    inicio.classList.remove('is-invalid');
    fin.classList.remove('is-invalid');

    nombre.value = "";
    inicio.value = "";
    fin.value    = "";
}


//AGREGAR CRONOGRAMA
function agregarCronograma() {
    const nombre = document.querySelector('#nombreTxt');
    const inicio = document.querySelector("#inicioTxt");
    const fin    = document.querySelector('#finTxt');
    const estado = document.querySelector("#selectEstado").value;
    const obra   = document.querySelector("#selectObra").value;
    let inicioFB = document.querySelector("#inicio-feedback");
    let finFB    = document.querySelector("#fin-feedback");


    // -------------- VALIDACIONES --------------
    
    inicioFB.innerText = "";
    finFB.innerText = "";
    nombre.classList.remove('is-invalid');
    inicio.classList.remove('is-invalid');
    fin.classList.remove('is-invalid');


    let error = false;

    if (nombre.value.length == 0) {
        nombre.classList.add('is-invalid');
        error = true;
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

    if (inicio.value > fin.value ){
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
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            Toast.fire({
                icon: 'success',
                title: '  Fase agregada correctamente.'
            });
            document.querySelector('#nombreTxt').value = '';
            document.querySelector('#inicioTxt').value = '';
            document.querySelector('#finTxt').value = '';
        })
        .catch(function (error) {
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
        <td>${doc.data().obra}</td>
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
        <a class="btn btn-danger btn-md" href="#" onclick=eliminar('${id}')><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        </tr>`
    });
});

function actualizarModal(id){
    idFase = id;
 
    db.collection("cronogramas").onSnapshot((querySnapshot) => {
    
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            if (idFase == id){
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
            <option>${doc.data().nombre}</option>
            `
        })

    });
}

function editarFase(){

    let id = idFase;
    let nombre = document.querySelector('#nombreEdit').value;
    let fechaInicio = document.querySelector('#inicioEdit').value;
    let fechaFin = document.querySelector('#finEdit').value;
    let estado = document.querySelector("#selectEstadoModal").value;
    let obra = document.querySelector("#selectObraModal").value;

    let flag = true;

    if (nombre.trim("")== ""){
        flag = false;
        Toast.fire({
            icon: 'warning',
            title: 'Ingrese nombre de la fase.'
        });
    }

    if (flag){
        db.collection("cronogramas").doc(id).set({
            nombre: nombre,
            fechaInicio: fechaInicio,
            fechaTermmino: fechaFin,
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
    boton.onclick = function () {
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
        }).then(function () {
            console.log("Documento actualizado");
            boton.innerHTML = 'Agregar';
            alert("Cronograma Actualizado");
            document.querySelector("#nombreTxt").value = "";
            document.querySelector("#inicioTxt").value = "";
            document.querySelector("#finTxt").value = "";

        }).catch(function (error) {
            console.log("no se actualizó correctamente", error);
        })

    }

}
//Borrar Cronograma
function eliminar(id) {
    db.collection("cronogramas").doc(id).delete().then(function () {
        Toast.fire({
            icon: 'warning',
            title: 'Documento borrado correctamente.'
        });
    }).catch(function (error) {
        console.error("Error elimiando el objeto :", error);
    });
}