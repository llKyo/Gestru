const auth = firebase.auth();


function iniciarSesion() {
    const correo = document.querySelector('#correoTxt').value;
    const contrasena = document.querySelector('#contrasenaTxt').value;
    auth.signInWithEmailAndPassword(correo, contrasena)
        .then(userCredential => {
            db.collection("clientes").onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().correo == correo) {
                        alert("cliente");
                        location.href = "clientes.php";
                    } else {
                        alert("jefe");
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