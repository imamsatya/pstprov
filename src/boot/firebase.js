// import something here
import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)
// "async" is optional
export default ({
  Vue
}) => {
  // something to do
  const firebaseConfig = {
    apiKey: 'AIzaSyC9wSh5stMg8qLZfEx3MLD5bN9z3T1VYSw',
    authDomain: 'pstsulteng.firebaseapp.com',
    databaseURL: 'https://pstsulteng.firebaseio.com',
    projectId: 'pstsulteng',
    storageBucket: 'pstsulteng.appspot.com',
    messagingSenderId: '648892125110',
    appId: '1:648892125110:web:8a008af73e748b5760bb17',
    measurementId: 'G-GNR8FCZ0YX'

  }

  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
  // var db = firebase.firestore()
  Vue.prototype.$firebase = firebase
}
