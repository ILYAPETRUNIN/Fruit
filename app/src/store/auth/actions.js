import {loginFirebaseEmailAndPassword} from '@/backend/firebase/auth.js'

export async function loginEmailAndPassword ({ commit },{email,password}) {
      try{
            console.log(email)
            console.log(password)
            let result=await loginFirebaseEmailAndPassword(email,password)
            console.log(result)
            commit('setProfile',result)
      }
      catch(e){
            console.log(e)
      }
}

