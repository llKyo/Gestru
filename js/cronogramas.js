/* const user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    if (!user) {
        // User is not signed in.
        location.href = 'index.php';
        alert("no está autenticado");


    } else {
        // User is  signed in.
        db.collection("clientes").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().correo == user.email) {
                    location.href = 'clientes.php';
                } else {
                    location.href = 'fases.php'; //Remplazr href
                }
            })

        })
    }
}); */

function cargarSelectObra() {
    const selectObra = document.querySelector("#selectObra");
    db.collection("obras").onSnapshot((querySnapshot) => {
        selectObra.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            const nombre = doc.nombreObra;
            selectObra.innerHTML += `
            <option value="${doc.id}">${doc.data().nombre}</option>
            `
        })

    })
}
const nombre = document.querySelector('#nombreTxt');
const inicio = document.querySelector("#fechaInicioTxt");
const fin = document.querySelector('#fechaTerminoTxt');









//AGREGAR CRONOGRAMA
function agregarCronograma() {

    if (nombre.value.length == 0) {
        alert('Debe ingresar un nombre');
        return false;
    }
    /*  const inicio = document.querySelector('#inicioTxt').value; */

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
    db.collection("cronogramas").add({
            nombre: nombre,
            fechaInicio: inicio,
            fechaTermmino: fin,
            estado: estado,
            obra: obra
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            alert("Cronograma Agregado Correctamente");
            nombre.value = '';
            inicio.value = '';
            fin.value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}
//leer de Cronograma
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
        <td>${doc.data().estado}</td>
        <td>${doc.data().obra}</td>
        <td><button class="btn btn-danger" onclick=eliminar('${id}')>Eliminar</button></td>
        <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().fechaInicio}','${doc.data().fechaTermmino}','${doc.data().estado}','${doc.data().obra}','${select}')">Editar</button></td>
        </tr>`
    });
});

//Editar

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
    boton.onclick = function() {
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
        }).then(function() {
            console.log("Documento actualizado");
            boton.innerHTML = 'Agregar';
            alert("Cronograma Actualizado");
            document.querySelector("#nombreTxt").value = "";
            document.querySelector("#inicioTxt").value = "";
            document.querySelector("#finTxt").value = "";

        }).catch(function(error) {
            console.log("no se actualizó correctamente", error);
        })

    }

}
//Borrar Cronograma
function eliminar(id) {
    db.collection("cronogramas").doc(id).delete().then(function() {
        console.log("Documento borrado Correctamente");

    }).catch(function(error) {
        console.error("Error elimiando el objeto :", error);
    });
}