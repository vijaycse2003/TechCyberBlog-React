import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDl_9ExA0ocXJMU8PbTRCt-bn_m-BWecnA",
    authDomain: "techcyber-blog.firebaseapp.com",
    projectId: "techcyber-blog",
    storageBucket: "techcyber-blog.appspot.com",
    messagingSenderId: "512239386504",
    appId: "1:512239386504:web:1f90504c9b0c2f8cd1443d",
    measurementId: "G-XQYZZ9MJ1W"
 };

const app=firebass.initializeApp(firebaseConfig);


export const db=getFirestore();