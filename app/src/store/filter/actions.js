import {getFirebaseSection} from '@/backend/firebase/database.js'

export async function getSection ({ commit }) {
    let result=await getFirebaseSection()
    commit('setSection', result);
}