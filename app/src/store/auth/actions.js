import {loginFirebaseEmailAndPassword,logOutFirebase,createUserFirebase,getUidFirebase} from '@/backend/firebase/auth.js'

export async function loginEmailAndPassword ({ commit },{email,password}) {
      try{
            let result=await loginFirebaseEmailAndPassword(email,password)
            commit('setProfile',result)
      }
      catch(e){
            if(e.message.includes('auth/wrong-password'))         throw new Error('Не верный пароль')
            if(e.message.includes('auth/too-many-requests'))      throw new Error('Много неверных попыток авторизации попробуйте позже')
            throw e
      }
}

export async function logOut(){
      await logOutFirebase()
}

export async function register({dispatch},{email,password}){
      try{
            await createUserFirebase(email,password)
            dispatch('getUid')
      }
      catch(e){
            console.log(e)
            throw e
      }
}

export function getUid(){
      const user= getUidFirebase()
      return user ? user.uid :null
  }

