const auth = firebase.auth();


function iniciarSesion() {
    const correo = document.querySelector('#correoTxt').value;
    const contrasena = document.querySelector('#contrasenaTxt').value;
    auth.signInWithEmailAndPassword(correo, contrasena)
        .then(userCredential => {
            alert("Ingreso Correcto");
            location.href = 'home.php';
        }).catch(function (error) {
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
