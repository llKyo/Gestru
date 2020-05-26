

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let nombre;

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
    }
    else if ($('#contactoTxt').val().length == 0) {
        alert("Debe ingresar un numero de contacto");
        return false;
    }
    const tipo = document.getElementById('tipoSelect').value;


    db.collection("usuarios").add({
        nombre: nombre,
        rut: rut,
        contrasena: contrasena,
        correo: correo,
        contacto: contacto,
        tipo: tipo
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            alert("Agregado Correctamente");
            document.getElementById('nombreTxt').value = '';
            document.getElementById('rutTxt').value = '';
            document.getElementById('correoTxt').value = '';
            document.getElementById('contrasenaTxt').value = '';
            document.getElementById('contactoTxt').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
            alert("Ocurrió un Error, Verifique los datos e intente nuevamente")
        });




}