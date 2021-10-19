import {firebaseApp} from './index.js'

import { getAuth,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,RecaptchaVerifier} from "firebase/auth";


export let auth = getAuth(firebaseApp);

export function createRecapchaVerifier(id){
    console.log(id)
    window.recaptchaVerifier = new RecaptchaVerifier(id, {}, auth);
}

export function loginFirebaseEmailAndPassword(email,password){
    return signInWithEmailAndPassword(auth, email, password)
}

export function logOutFirebase(auth){
    return signOut(auth)
}

export function createUserFirebase(email,password){
    return createUserWithEmailAndPassword(auth,email, password)
}

export function getUidFirebase(){
    return auth.currentUser
}

