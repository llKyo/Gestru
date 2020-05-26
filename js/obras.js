

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function agregarObra() {

    const nombre = document.querySelector('#nombreTxt').value;
    if($('#nombreTxt').val().length == 0){
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
            alert("Actividad Agregada Correctamente");
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
    table.innerHTML =  ``;
    querySnapshot.forEach((doc) => {
        const id = doc.id;
        table.innerHTML +=`
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().fechaInicio}</td>
        <td>${doc.data().fechaTermmino}</td>
        <td><button class="btn btn-danger" onclick=eliminar('${id}')>Eliminar</button></td>
        <td><button class="btn btn-warning" > Editar</button></td>
        </tr>`

    })

});

function eliminar(id) {
    db.collection("obras").doc(id).delete().then(function () {
        console.log("Documento borrado Correctamente(actividad)");
    }).catch(function (error) {
        console.error("Error elimiando el objeto :", error);
    });
}