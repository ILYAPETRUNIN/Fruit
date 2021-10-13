import {getAllProducts,getFiribaseVegetables,getFiribaseFruits,getFiribaseNuts,getFiribaseBerries} from '@/backend/firebase/database.js'
import {getURL} from "@/backend/firebase/storage.js";

async function setURL(array){
      for(let key in array){                                           //Получаем ссылку на данные в облаке
            array[key].url=await getURL(array[key].url)
      }
}

export async function getProducts ({ commit }) {
      let result=await getAllProducts()
      await setURL(result)
      commit('setProducts', result);
}

export async function getVegetables ({ commit }) {
      let result=await getFiribaseVegetables()
      await setURL(result)
      commit('setVegetables', result);
}

export async function getFruits ({ commit }) {
      let result=await getFiribaseFruits()
      await setURL(result)
      commit('setFruits', result);
}

export async function getNuts ({ commit }) {
      let result=await getFiribaseNuts()
      await setURL(result)
      commit('setNuts', result);
}

export async function getBerries ({ commit }) {
      let result=await getFiribaseBerries()
      await setURL(result)
      commit('setBerries', result);
}

export function pushInFavorites({commit},product){
      commit('setFavorites', product);
}



