autenticar();
cargarSelectObra();

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

function buscarObra() {
    const obra = document.querySelector('#selectObra').value;
    const table = document.querySelector('#tableObra');
    table.innerHTML = '';
    db.collection("obras").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (obra == doc.id) {
                table.innerHTML += `
                <tr>
                    <td>${doc.data().nombre}</td>
                    <td>${doc.data().fechaInicio}</td>
                    <td>${doc.data().fechaTermmino}</td>
                </tr>`
            }

        })
    });
    /*db.collection("obras").where("ID", "==", obra)
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
        });*/

    buscarFase();


}

function buscarFase() {
    const obra = document.querySelector('#selectObra').value;
    const table = document.querySelector('#tableFase');
    table.innerHTML = '';
    db.collection("cronogramas").where("obra", "==", obra)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let completado = 0;
                let act = 0;
                let actividadesRef = db.collection('actividades').where('cronograma', '==', doc.id);
                actividadesRef.get()
                    .then(snapshot => {
                        snapshot.forEach(doc => {
                            act += 1;
                            if (doc.data().estado == "Terminado") {
                                completado += 1;
                            }
                        });
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });

                setTimeout(() => {
                    let progreso;
                    if (act != 0) {
                        progreso = Math.trunc(completado * 100 / act);
                    } else {
                        progreso = 0;
                    }

                    table.innerHTML += `
            <tr>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().fechaInicio}</td>
                <td>${doc.data().fechaTermmino}</td>
                <td>${progreso == 100 ? "Terminado" : "En ejecución"}</td>
                <td></td>
            </tr>`
                }, 500);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}