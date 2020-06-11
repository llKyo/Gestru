mostrarTrabajadores();

function registrarTrabajador(){
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
    if (contacto == ""){
        alert("Debe ingresar Contacto del trabajador");
        flag = false;
    }
    if(rol == ""){
        alert("Debe ingresar Rol del trabajador");
        flag = false;
    }
    
    if (flag){
        db.collection("trabajador").add({
            nombre: nombre,
            apellido: apellido,
            contacto: contacto,
            rol: rol
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("Registrado Correctamente");
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                alert("Ocurrió un Error, Verifique los datos e intente nuevamente")
            });
    }

}

function mostrarTrabajadores(){
    const table = document.querySelector('#tableTrabajadores');
    db.collection("trabajador").onSnapshot((querySnapshot) => {
    table.innerHTML =  ``;
    querySnapshot.forEach((doc) => {
        const id = doc.id;
        table.innerHTML +=`
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellido}</td>
        <td>${doc.data().contacto}</td>
        <td>${doc.data().rol}</td>
        <td><button class="btn btn-danger" onclick=eliminar('${id}')>Eliminar</button></td>
        <td><button class="btn btn-warning"> Editar</button></td>
        </tr>`

        })
    });
}

function eliminar(id){
    db.collection("trabajador").doc(id).delete().then(function () {
        alert("Trabajador eliminado correctamente.");
    }).catch(function (error) {
        console.error("Error elimiando el objeto :", error);
    });
}
