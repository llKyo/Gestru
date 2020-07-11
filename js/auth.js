const auth = firebase.auth();


function autenticar() {
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        console.log("ahora");
        if (!user) {
            // User is not signed in.
            location.href = 'index.php';
            alert("no está autenticado");


        } else {
            // User is  signed in.
            db.collection("clientes").onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().correo == user.email) {

                        if (location.pathname != "/Gestru/clientes.php") {
                            location.href = "clientes.php";
                        }
                    }
                })

            })
        }
    });
}

function iniciarSesion() {
    const correo = document.querySelector('#correoTxt').value;
    const contrasena = document.querySelector('#contrasenaTxt').value;
    auth.signInWithEmailAndPassword(correo, contrasena)
        .then(userCredential => {
            db.collection("clientes").onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (correo == doc.data().correo) {
                        location.href = "clientes.php";

                    } else {
                        location.href = "home.php";

                    }
                })
            })



        }).catch(function(error) {
            console.error("Error adding document: ", error);
            alert("Credenciales no registradas, Verifique Datos")
        });

}

function cerrarSesion() {
    auth.signOut().then(() => {
        alert("Sesión Cerrada");
        location.href = 'index.php';
    })
}