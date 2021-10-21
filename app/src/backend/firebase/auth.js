import {firebaseApp} from './index.js'

import { getAuth,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword} from "firebase/auth";


export let auth = getAuth(firebaseApp);

export function loginFirebaseEmailAndPassword(email,password){
    return signInWithEmailAndPassword(auth, email, password)
}

export function logOutFirebase(){
    return signOut(auth)
}

export function createUserFirebase(email,password){
    return createUserWithEmailAndPassword(auth,email, password)
}

export function getUidFirebase(){
    return auth.currentUser
}

