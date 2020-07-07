let nombre = document.querySelector("#nombreTxt");
const correo = document.querySelector("#correoTxt");
let rut = document.querySelector("#rutTxt");
const contrasena = document.querySelector("#contrasenaTxt");
let contacto = document.querySelector("#contactoTxt");
let tipoUsuario = document.querySelector("#tipoSelect")

console.log("aa");

function registrarCliente() {

    if (nombre.value.length >= 35) {
        alert("Sólo se permite de 35 letras para el nombre")
        return false;
    }
    if (nombre.value.trim() == "") {
        alert("debe ingresar Nombre");
        return false;
    }

    let rut = document.querySelector("#rutTxt").value.trim();
    let valor = rut.replace('.', '');
    // Despejar Guión
    valor = valor.replace('-', '');
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();
    // Formatear RUN
    rut = cuerpo + '-' + dv
        // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {

        alert("Rut incompleto");
        return false;
    }
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    // Para cada dígito del Cuerpo
    for (i = 1; i <= cuerpo.length; i++) {
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        // Sumar al Contador General
        suma = suma + index;
        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
    }
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    // Casos Especiales (0 y K)
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) { alert("Rut invalido"); return false; }
    // Si todo sale bien, eliminar errores (decretar que es válido)
    const rutValidado = rut;


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
    auth.createUserWithEmailAndPassword(correo, contrasena)
        .then(userCredential => {
            console.log("Registro Correcto!!,  db.collection 'usuarios' add");
            alert("Se registró en tabla USERS")
        }).then(function() {
            db.collection("clientes").add({
                    nombre: nombre.value,
                    rut: rut.value,
                    correo: correo.value,
                    contacto: contacto.value,
                    tipo: tipo.value
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    alert("Agregado Correctamente a usuarios");
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

function registrarUsuario() {
    /*    const nombre = document.getElementById('nombreTxt').value;
       if (nombre.length >= 35) 
       {
           alert("Sólo se permite de 35 letras para el nombre")
           return false;
       }
       
       else if (/^\s+$/.test(nombre)) 
       {
           return true;    
       }
       
       
       else if($('#nombreTxt').val().length == 0){
         alert('Debe ingresar su nombre y apellido');
          return false;
       } */

    if (document.querySelector("#nombreTxt").value.trim() == "") {
        alert("debe ingresar Nombre");
        return false;
    } else {
        nombre = document.getElementById('nombreTxt').value.trim();
    }


    const rut = document.getElementById('rutTxt').value;

    /* 
        const correo = document.getElementById('correoTxt').value;
        expresion = /\w+@\w+\.+[a-z]/;
    
             if(!expresion.test(correo)){
                alert("El correo no es valido");
                return false;
    
        } */

    expresion = /\w+@\w+\.+[a-z]/;
    if (!expresion.test(document.querySelector("#correoTxt").value.trim())) {
        alert("Debe ingresar un correo válido");
        return false;
    } else {
        correo = document.querySelector("#correoTxt").value.trim();
    }



    const contrasena = document.getElementById('contrasenaTxt').value;
    if ($('#contrasenaTxt').val().length == 0) {
        alert("Debe ingresar un numero de contraseña")
        return false;
    }
    const contacto = document.getElementById('contactoTxt').value;
    if (contacto.length > 9) {
        alert("Maximo 9 numeros")
        return false;
    } else if ($('#contactoTxt').val().length == 0) {
        alert("Debe ingresar un numero de contacto");
        return false;
    }
    const tipo = document.getElementById('tipoSelect').value;


    auth.createUserWithEmailAndPassword(correo, contrasena)
        .then(userCredential => {
            console.log("Registro Correcto!!,  db.collection 'usuarios' add");
            alert("Se registró en tabla USERS")
        }).then(function() {
            db.collection("clientes").add({
                    nombre: nombre,
                    rut: rut,
                    correo: correo,
                    contacto: contacto,
                    tipo: tipo
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    alert("Agregado Correctamente a usuarios");
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