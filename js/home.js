/* const user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    console.log(user.email);
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
                    location.href = 'home.php'; //Remplazr href
                }
            })

        })
    }
}); */