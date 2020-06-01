# Gestru

## Requisitos

Para utilizar este proyecto se necesita una cuenta en [Google Firebase](https://firebase.google.com/) y generar un archivo firebaseConfig.js basándose en el firebaseConfig.js.example para completarlo

### firebaseConfig.js.example ⬇
```javascript
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
