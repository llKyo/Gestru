

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//cargar Selects
function cargarSelectObra() {
    const selectObra = document.querySelector("#selectObra");
    db.collection("obras").onSnapshot((querySnapshot) => {
        selectObra.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            const nombre = doc.nombreObra;
            selectObra.innerHTML += `
            <option>${doc.data().nombre}</option>
            `
        })

    })
}


//AGREGAR CRONOGRAMA
function agregarCronograma() {
    const nombre = document.querySelector('#nombreTxt').value;
    if ($('#nombreTxt').val().length == 0) {
        alert('Debe ingresar su nombre y apellido');
        return false;
    }
    /*  const inicio = document.querySelector('#inicioTxt').value; */
    let fin = document.querySelector('#finTxt').value;
    let inicio = document.querySelector("#inicioTxt").value;


    db.collection("cronogramas").add({
        nombre: nombre,
        fechaInicio: inicio,
        fechaTermmino: fin,
        estado: "creada"
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            alert("Agregado Correctamente");
            document.querySelector('#nombreTxt').value = '';
            document.querySelector('#inicioTxt').value = '';
            document.querySelector('#finTxt').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}
//leer de Cronograma
const table = document.querySelector('#tableCronogramas')
db.collection("cronogramas").onSnapshot((querySnapshot) => {
    table.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const id = doc.id;
        table.innerHTML += `
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().fechaInicio}</td>
        <td>${doc.data().fechaTermmino}</td>
        <td>${doc.data().estado}</td>
        <td><button class="btn btn-danger" onclick=eliminar('${id}')>Eliminar</button></td>
        <td><button class="btn btn-warning" > Editar</button></td>
        </tr>`
    });
});

//Borrar Cronograma
function eliminar(id) {
    db.collection("cronogramas").doc(id).delete().then(function () {
        console.log("Documento borrado Correctamente");

    }).catch(function (error) {
        console.error("Error elimiando el objeto :", error);
    });
}

function agregarActividad() {
    db.collection("actividades").add({
        nombre: document.querySelector("#nombreTxt").value,
        inicio: document.querySelector("#inicioTxt").value,
        fin: document.querySelector("#finTxt").value


    })
}