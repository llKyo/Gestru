/* firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        // User is not signed in.
        location.href = 'index.php';
        alert("no está autenticado");


    }
}); */
let nombre = document.querySelector("#nombreTxt");
let correo = document.querySelector("#correoTxt");
let rut = document.querySelector("#rutTxt");
let contrasena = document.querySelector("#contrasenaTxt");
let contacto = document.querySelector("#contactoTxt");
let tipoUsuario = document.querySelector("#tipoSelect")

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

function registrarCliente() {


    if (!Fn.validaRut(rut.value.trim())) {
        alert("Verifique Rut");
        return false;
    }



    if (nombre.value.length >= 35) {
        alert("Sólo se permite de 35 letras para el nombre")
        return false;
    }
    if (nombre.value.trim() == "") {
        alert("debe ingresar Nombre");
        return false;
    }




    expresion = /\w+@\w+\.+[a-z]/;
    if (!expresion.test(correo.value.trim())) {
        alert("Debe ingresar un correo válido");
        return false;
    }
    if (contrasena.value.trim().length == 0) {
        alert("Debe ingresar un numero de contraseña")
        return false;
    }
    if (contacto.value.trim().length != 8) {
        alert("Ingrese un contacto válido");
        return false;
    }
    console.log("Pasó validacion")
    auth.createUserWithEmailAndPassword(correo.value.trim(), contrasena.value.trim())
        .then(userCredential => {
            console.log("Registro Correcto!!,  db.collection 'CLIENTES' add");
        }).then(function() {
            db.collection("clientes").add({
                    nombre: nombre.value,
                    rut: rut.value,
                    correo: correo.value,
                    contacto: contacto.value,
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    alert("Se ha Registrado correctamente como Cliente");
                    location.href = 'login.php';
                    document.getElementById('nombreTxt').value = '';
                    document.getElementById('rutTxt').value = '';
                    document.getElementById('correoTxt').value = '';
                    document.getElementById('contrasenaTxt').value = '';
                    document.getElementById('contactoTxt').value = '';
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                    alert("Ocurrió un Error, Verifique los datos e intente nuevamente")
                });


        })

}