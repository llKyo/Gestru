
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
            alert("Actividad Agregada Correctamente");
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
        <td><button class="btn btn-danger" onclick=eliminar('${id}')>Eliminar</button></td>
        <td><button class="btn btn-warning" > Editar</button></td>
        </tr>`
    });
});

//Borrar Acitivdad
function eliminar(id) {
    db.collection("actividades").doc(id).delete().then(function () {
        console.log("Documento borrado Correctamente(actividad)");
    }).catch(function (error) {
        console.error("Error elimiando el objeto :", error);
    });
}

