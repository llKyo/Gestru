/* let flag;

function autenticar() {
    const user = firebase.auth().currentUser;
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
                        flag = true;
                        console.log("iterando");
                        return false; //Remplazr href
                    } else {
                        flag = false;
                    }
                })
                console.log(flag)
                if (flag) {

                } else {
                    location.href = "home.php"
                }
            })
        }
    });
}

autenticar(); */
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
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}