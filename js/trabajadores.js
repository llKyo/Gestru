const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

mostrarTrabajadores();

function registrarTrabajador() {
    let nombre = document.querySelector("#nombreTxt").value.trim();
    let apellido = document.querySelector("#apellidoTxt").value.trim();
    let contacto = document.querySelector("#contactoTxt").value.trim();
    let rol = document.querySelector("#rolTxt").value.trim();

    let flag = true;
    if (nombre == "") {
        alert("Debe ingresar Nombre del trabajador");
        flag = false;
    }
    if (apellido == "") {
        alert("Debe ingresar Apellido del trabajador");
        flag = false;
    }
    if (contacto == "") {
        alert("Debe ingresar Contacto del trabajador");
        flag = false;
    }
    if (rol == "") {
        alert("Debe ingresar Rol del trabajador");
        flag = false;
    }

    if (flag) {
        db.collection("trabajador").add({
            nombre: nombre,
            apellido: apellido,
            contacto: contacto,
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
    db.collection("trabajador").onSnapshot((querySnapshot) => {
        table.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            table.innerHTML += `
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellido}</td>
        <td>${doc.data().contacto}</td>
        <td>${doc.data().rol}</td>
        <td class="project-actions text-center">
        <a class="btn btn-info btn-md" href="#"><i class="fas fa-pencil-alt"></i>Editar</a>
        <a class="btn btn-danger btn-md" href="#" onclick=eliminar('${id}')><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        
        </tr>`

        })
    });
}

function eliminar(id) {
    db.collection("trabajador").doc(id).delete().then(function () {
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
