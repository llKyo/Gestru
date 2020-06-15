cargarSelectObra();

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

function buscarObra() {
    const obra = document.querySelector('#selectObra').value;
    const table = document.querySelector('#tableObra');
    table.innerHTML = '';
    db.collection("obras").where("nombre", "==", obra)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                table.innerHTML += `
            <tr>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().fechaInicio}</td>
                <td>${doc.data().fechaTermmino}</td>
            </tr>`
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    buscarFase();


}

function buscarFase() {
    const obra = document.querySelector('#selectObra').value;
    const table = document.querySelector('#tableFase');
    table.innerHTML = '';
    db.collection("cronogramas").where("obra", "==", obra)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                table.innerHTML += `
            <tr>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().fechaInicio}</td>
                <td>${doc.data().fechaTermmino}</td>
                <td>${doc.data().estado}</td>
            </tr>`
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}