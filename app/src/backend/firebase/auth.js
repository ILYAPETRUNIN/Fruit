import {firebaseApp} from './index.js'

import { getAuth,signInWithEmailAndPassword} from "firebase/auth";



export let auth = getAuth(firebaseApp);

export function loginFirebaseEmailAndPassword(email,password){
    return signInWithEmailAndPassword(auth, email, password)
}

