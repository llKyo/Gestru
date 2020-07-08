autenticar();
let idTrabajador;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
//SCRIPT VALIDADOR DE RUT
const Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function(rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        let tmp = rutCompleto.split('-');
        let digv = tmp[1];
        let rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function(T) {
        let M = 0,
            S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}


mostrarTrabajadores();

function registrarTrabajador() {
    let nombre = document.querySelector("#nombreTxt");
    let rut = document.querySelector("#rutTxt");
    let contacto = document.querySelector("#contactoTxt");
    let email = document.querySelector("#emailTxt");
    let rol = document.querySelector("#rolTxt");
    let rutFB = document.querySelector("#rut-feedback");

    // -------------- VALIDACIONES --------------

    rutFB.innerText = "";
    nombre.classList.remove('is-invalid');
    rut.classList.remove('is-invalid');
    contacto.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    rol.classList.remove('is-invalid');

    let error = false;

    if (nombre.value == "") {
        error = true;
        nombre.classList.add('is-invalid');
    }
    if (rut.value == "") {
        error = true;
        rut.classList.add('is-invalid');
        rutFB.innerText = "Debe ingresar un rut";
    } else if (!Fn.validaRut(rut.value)) {
        error = true;
        rut.classList.add('is-invalid');
        rutFB.innerText = "Debe ingresar un rut válido";
    }
    if (contacto.value == "") {
        error = true;
        contacto.classList.add('is-invalid');
    }
    if (email.value == "") {
        error = true;
        email.classList.add('is-invalid');
    }
    if (rol.value == "") {
        error = true;
        rol.classList.add('is-invalid');
    }

    // -------------- FIN VALIDACIONES --------------

    if (!error) {
        db.collection("trabajadores").add({
                nombre: nombre.value.trim(),
                rut: rut.value.trim(),
                contacto: contacto.value.trim(),
                email: email.value.trim(),
                rol: rol.value.trim()
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                Toast.fire({
                    icon: 'success',
                    title: 'Trabajador registrado correctamente.'
                });
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                Toast.fire({
                    icon: 'error',
                    title: 'Ocurrió un Error, Verifique los datos e intente nuevamente'
                });
            });
        //Cerrar Modal
        $('#modal-lg').modal('hide');
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
        <a class="btn btn-info btn-md text-white"  data-toggle="modal" data-target="#modal-edit" id="modalEdit" onclick=actualizarModal('${id}')><i class="fas fa-pencil-alt"></i>Editar</a>
        <a class="btn btn-danger btn-md" href="#" onclick=eliminar('${id}')><i class="fas fa-trash"></i>Eliminar</a>
        </td>
        </tr>`
        })
    });
}

function eliminar(id) {
    db.collection("trabajadores").doc(id).delete().then(function() {
        Toast.fire({
            icon: 'warning',
            title: 'Trabajador eliminado correctamente.'
        });
    }).catch(function(error) {
        Toast.fire({
            icon: 'error',
            title: 'A ocurrido un error'
        });
        console.error("Error elimiando el objeto :", error);
    });
}

function actualizarModal(id) {
    idTrabajador = id;

    db.collection("trabajadores").onSnapshot((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            const id = doc.id;
            if (idTrabajador == id) {
                document.querySelector("#nombreEdit").value = doc.data().nombre;
                document.querySelector("#rutEdit").value = doc.data().rut;
                document.querySelector("#emailEdit").value = doc.data().email;
                document.querySelector("#contactoEdit").value = doc.data().contacto;
                document.querySelector("#rolEdit").value = doc.data().rol;
            }

        })
    });

}

function actualizarTrabajador() {

    let id = idTrabajador;
    let nombre = document.querySelector('#nombreEdit');
    let rut = document.querySelector('#rutEdit');
    let email = document.querySelector('#emailEdit');
    let contacto = document.querySelector("#contactoEdit");
    let rol = document.querySelector("#rolEdit");
    let rutFB = document.querySelector("#rutEdit-feedback");

    // -------------- VALIDACIONES --------------

    rutFB.innerText = "";
    nombre.classList.remove('is-invalid');
    rut.classList.remove('is-invalid');
    contacto.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    rol.classList.remove('is-invalid');

    let error = false;

    if (nombre.value == "") {
        error = true;
        nombre.classList.add('is-invalid');
    }
    if (rut.value == "") {
        error = true;
        rut.classList.add('is-invalid');
        rutFB.innerText = "Debe ingresar un rut";
    } else if (!Fn.validaRut(rut.value)) {
        error = true;
        rut.classList.add('is-invalid');
        rutFB.innerText = "Debe ingresar un rut válido";
    }
    if (contacto.value == "") {
        error = true;
        contacto.classList.add('is-invalid');
    }
    if (email.value == "") {
        error = true;
        email.classList.add('is-invalid');
    }
    if (rol.value == "") {
        error = true;
        rol.classList.add('is-invalid');
    }

    // -------------- FIN VALIDACIONES --------------
    if (!error) {
        db.collection("trabajadores").doc(id).set({
            nombre: nombre.value,
            rut: rut.value,
            email: email.value,
            contacto: contacto.value,
            rol: rol.value
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