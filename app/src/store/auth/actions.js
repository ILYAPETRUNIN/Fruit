import {loginFirebaseEmailAndPassword,logOutFirebase,createUserFirebase,getUidFirebase} from '@/backend/firebase/auth.js'

export async function loginEmailAndPassword ({dispatch},{email,password}) {
      try{
            await loginFirebaseEmailAndPassword(email,password)
            dispatch('getUid')
      }
      catch(e){
            if(e.message.includes('auth/wrong-password'))         throw new Error('Не верный пароль')
            if(e.message.includes('auth/too-many-requests'))      throw new Error('Много неверных попыток авторизации попробуйте позже')
            throw e
      }
}

export async function logOut({dispatch}){
      try{
            await logOutFirebase()
            dispatch('getUid')
      }
      catch(e){
            console.log(e)
            throw e
      }
}

export async function register({dispatch},{email,password}){
      try{
            await createUserFirebase(email,password)
            dispatch('getUid')
      }
      catch(e){
            if(e.message.includes('auth/email-already-in-use')) throw new Error('Пользователь с данным адресом уже существует')
            throw e
      }
}

export function getUid({ commit }){
      let user= getUidFirebase()
      user=user ? user.uid :null
      commit('setUserUid',user)
      return user
}

