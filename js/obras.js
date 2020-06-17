let idObra;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

function agregarObra() {

    const nombre = document.querySelector('#nombreTxt').value;
    if ($('#nombreTxt').val().length == 0) {
        alert('Debe ingresar un nombre a la obra');
        return false;
    }
    const inicio = document.querySelector('#fechaInicioTxt').value;
    const fin = document.querySelector('#fechaInicioTxt').value;

    db.collection("obras").add({
        nombre: nombre,
        fechaInicio: inicio,
        fechaTermmino: fin,
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            Toast.fire({
                icon: 'success',
                title: 'Actividad agregada correctamente.'
            });
            document.querySelector('#nombreTxt').value = '';
            document.querySelector('#fechaInicioTxt').value = '';
            document.querySelector('#fechaInicioTxt').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
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
        <td class="project-actions text-center">
        <a class="btn btn-info btn-md" data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt"></i>Editar</a>
        <a class="btn btn-danger btn-md" href="#" onclick=eliminar('${id}')><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        </tr>`

    })

});

function eliminar(id) {
    db.collection("obras").doc(id).delete().then(function () {
        Toast.fire({
            icon: 'warning',
            title: 'Documento borrado correctgmente(actividad)'
        });
    }).catch(function (error) {
        console.error("Error elimiando el objeto :", error);
    });
}



function actualizarModal(id){
    idObra = id;
 
    db.collection("obras").onSnapshot((querySnapshot) => {
    
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            if (id == id){
                document.querySelector("#nombreEdit").value = doc.data().nombre;
                document.querySelector("#fechaInicioEdit").value = doc.data().fechaInicio;
                document.querySelector("#fechaFinEdit").value = doc.data().fechaTermmino;
            }
    
        })
    });
}


function editarObra(){

    let id = idObra;
    let nombre = document.querySelector('#nombreEdit').value;
    let fechaInicio = document.querySelector('#fechaInicioEdit').value;
    let fechaFin = document.querySelector('#fechaFinEdit').value;

    let flag = true;

    if (nombre.trim("")== ""){
        flag = false;
        Toast.fire({
            icon: 'warning',
            title: 'Ingrese nombre de la obra.'
        });
    }

    if (flag){
        db.collection("obras").doc(id).set({
            nombre: nombre,
            fechaInicio: fechaInicio,
            fechaTermmino: fechaFin
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
    



