import {getProduct} from '@/backend/firebase/database.js'

export async function getProducts ({ commit }) {
      let result=await getProduct()

      commit('setProducts', result);
}