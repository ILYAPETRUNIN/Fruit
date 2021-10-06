import {getAllProducts} from '@/backend/firebase/database.js'
import {getURL} from "@/backend/firebase/storage.js";

export async function getProducts ({ commit }) {
      let result=await getAllProducts()

      for(let key in result){                                           //Получаем ссылку на данные в облаке
            result[key].url=await getURL(result[key].url)
      }
      commit('setProducts', result);
}
