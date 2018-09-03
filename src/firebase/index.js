import firebase from "firebase/app"
import "firebase/database";

const config = {
    apiKey: "AIzaSyAseGiql_BCQN6RUeJzW6Yhy06cDUGh0qk",
    authDomain: "skills-b9de0.firebaseapp.com",
    databaseURL: "https://skills-b9de0.firebaseio.com",
    projectId: "skills-b9de0",
    storageBucket: "skills-b9de0.appspot.com",
    messagingSenderId: "727870177462"
};
firebase.initializeApp(config);
export default firebase.database();