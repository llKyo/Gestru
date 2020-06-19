let idTrabajador;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

mostrarTrabajadores();

function registrarTrabajador() {
    let nombre = document.querySelector("#nombreTxt").value.trim();
    let rut = document.querySelector("#rutTxt").value.trim();
    let contacto = document.querySelector("#contactoTxt").value.trim();
    let email = document.querySelector("#emailTxt").value.trim();
    let rol = document.querySelector("#rolTxt").value.trim();

    let flag = true;
    if (nombre == "") {
        alert("Debe ingresar Nombre del trabajador");
        flag = false;
    }
    if (rut == "") {
        alert("Debe ingresar RUT del trabajador");
        flag = false;
    }
    if (contacto == "") {
        alert("Debe ingresar Contacto del trabajador");
        flag = false;
    }
    if (email == "") {
        alert("Debe ingresar EMAIL del trabajador");
        flag = false;
    }
    if (rol == "") {
        alert("Debe ingresar Rol del trabajador");
        flag = false;
    }

    if (flag) {
        db.collection("trabajadores").add({
            nombre: nombre,
            rut: rut,
            contacto: contacto,
            email: email,
            rol: rol
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                Toast.fire({
                    icon: 'success',
                    title: 'Trabajador registrado correctamente.'
                });
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                Toast.fire({
                    icon: 'error',
                    title: 'Ocurrió un Error, Verifique los datos e intente nuevamente'
                });
            });
    }

}

function mostrarTrabajadores() {
    const table = document.querySelector('#tableTrabajadores');
    db.collection("trabajadores").onSnapshot((querySnapshot) => {
        table.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            table.innerHTML += `
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().rut}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().contacto}</td>
        <td>${doc.data().rol}</td>
        <td class="project-actions text-center">
        <a class="btn btn-info btn-md"  data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt"></i>Editar</a>
        <a class="btn btn-danger btn-md" href="#" onclick=eliminar('${id}')><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        
        </tr>`

        })
    });
}

function eliminar(id) {
    db.collection("trabajadores").doc(id).delete().then(function () {
        Toast.fire({
            icon: 'warning',
            title: 'Trabajador eliminado correctamente.'
        });
    }).catch(function (error) {
        Toast.fire({
            icon: 'error',
            title: 'A ocurrido un error'
        });
        console.error("Error elimiando el objeto :", error);
    });
}

function actualizarModal(id){
    idTrabajador = id;
 
    db.collection("trabajadores").onSnapshot((querySnapshot) => {
    
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            if (idTrabajador == id){
                document.querySelector("#nombreEdit").value = doc.data().nombre;
                document.querySelector("#rutEdit").value = doc.data().rut;
                document.querySelector("#emailEdit").value = doc.data().email;
                document.querySelector("#contactoEdit").value = doc.data().contacto;
                document.querySelector("#rolEdit").value = doc.data().rol;
            }
    
        })
    });

}

function actualizarTrabajador(){

    let id = idTrabajador;
    let nombre = document.querySelector('#nombreEdit').value;
    let rut = document.querySelector('#rutEdit').value;
    let email = document.querySelector('#emailEdit').value;
    let contacto = document.querySelector("#contactoEdit").value;
    let rol = document.querySelector("#rolEdit").value;

    let flag = true;

    if (nombre.trim("")== ""){
        flag = false;
        Toast.fire({
            icon: 'warning',
            title: 'Ingrese nombre del trabajador.'
        });
    }
    if (rut.trim("")== ""){
        flag = false;
        Toast.fire({
            icon: 'warning',
            title: 'Ingrese rut del trabajador.'
        });
    }
    if (email.trim("")== ""){
        flag = false;
        Toast.fire({
            icon: 'warning',
            title: 'Ingrese email del trabajador.'
        });
    }
    if (contacto.trim("")== ""){
        flag = false;
        Toast.fire({
            icon: 'warning',
            title: 'Ingrese contacto del trabajador.'
        });
    }
    if (rol.trim("")== ""){
        flag = false;
        Toast.fire({
            icon: 'warning',
            title: 'Ingrese rol del trabajador.'
        });
    }

    if (flag){
        db.collection("trabajadores").doc(id).set({
            nombre: nombre,
            rut: rut,
            email: email,
            contacto: contacto,
            rol: rol
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