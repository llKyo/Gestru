let idActividad;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
//cargar selects 


//AGREGAR Actividad
function agregarActividad() {
    const nombre = document.querySelector('#nombreTxt').value;
    if ($('#nombreTxt').val().length == 0) {
        alert('Debe ingresar su nombre y apellido');
        return false;
    }
    const inicio = document.querySelector('#inicioTxt').value;
    const fin = document.querySelector('#finTxt').value;
    const cronograma = document.querySelector('#cronogramaSelect').value;
    const trabajador = document.querySelector("#trabajadorSelect").value;


    db.collection("actividades").add({
        nombre: nombre,
        fechaInicio: inicio,
        fechaTermmino: fin,
        cronograma: cronograma,
        trabajador: trabajador
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            Toast.fire({
                icon: 'success',
                title: 'Actividad agregada correctamente'
            });
            document.querySelector('#nombreTxt').value = '';
            document.querySelector('#inicioTxt').value = '';
            document.querySelector('#finTxt').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
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
        <td>${doc.data().cronograma}</td>
        <td>${doc.data().trabajador}</td>
        <td class="project-actions text-center">
        <a class="btn btn-info btn-md" data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt" ></i>Editar</a>
        <a class="btn btn-danger btn-md" href="#" onclick=eliminar('${id}')><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        </tr>`
    });
});

//Borrar Acitivdad
function eliminar(id) {
    db.collection("actividades").doc(id).delete().then(function () {
        Toast.fire({
            icon: 'warning',
            title: 'Documento borrado correctamente.'
        });
        console.log("Documento borrado Correctamente.");
    }).catch(function (error) {
        console.error("Error elimiando el objeto :", error);
    });
}

function cargarSelect(){
    let select = document.querySelector("#cronogramaSelect");
    db.collection("cronogramas").onSnapshot((querySnapshot) => {
        select.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            select.innerHTML += `
            <option>${doc.data().nombre}</option>
            `
        })

    });
}

function actualizarModal(id){
    idActividad = id;
 
    db.collection("actividades").onSnapshot((querySnapshot) => {
    
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            if (idActividad == id){
                document.querySelector("#nombreEdit").value = doc.data().nombre;
                document.querySelector("#inicioEdit").value = doc.data().fechaInicio;
                document.querySelector("#finEdit").value = doc.data().fechaTermmino;
            }
    
        })
    });

    let select = document.querySelector("#cronogramaSelectEdit");
    db.collection("cronogramas").onSnapshot((querySnapshot) => {
        select.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            select.innerHTML += `
            <option>${doc.data().nombre}</option>
            `
        })

    });
}

function actualizarActividad(){

    let id = idActividad;
    let nombre = document.querySelector('#nombreEdit').value;
    let fechaInicio = document.querySelector('#inicioEdit').value;
    let fechaFin = document.querySelector('#finEdit').value;
    let fase = document.querySelector("#cronogramaSelectEdit").value;
    let trabajador = document.querySelector("#trabajadorSelectEdit").value;

    let flag = true;

    if (nombre.trim("")== ""){
        flag = false;
        Toast.fire({
            icon: 'warning',
            title: 'Ingrese nombre de la fase.'
        });
    }

    if (flag){
        db.collection("actividades").doc(id).set({
            nombre: nombre,
            fechaInicio: fechaInicio,
            fechaTermmino: fechaFin,
            cronograma: fase,
            trabajador: trabajador
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

