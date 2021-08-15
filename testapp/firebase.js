import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAiF7wXsuXDwXcUBWodKDTUlqV0vSHQkkQ",
  authDomain: "activate-76231.firebaseapp.com",
  projectId: "activate-76231",
  storageBucket: "activate-76231.appspot.com",
  messagingSenderId: "1052929519076",
  appId: "1:1052929519076:web:7b8772ee148757347dabf1",
  measurementId: "G-CHQ2BS7XMQ"
};

let database;
export const fireBase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    } else {
        firebase.app() // 이미 초기화되었다면, 초기화 된 것을 사용함
    }
    database = firebase.database()
}

export const getFireDB = () => {
    return database.ref('Test');
}

export const fireDB = () => {
    return database;
}