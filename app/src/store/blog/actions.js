import {getBlog} from '@/backend/firebase/database.js'
import {getURL} from "@/backend/firebase/storage.js";

export async function getBlogs ({ commit }) {
      let result=await getBlog()

      for(let key in result){                                           //Получаем ссылку на данные в облаке
            result[key].url=await getURL(result[key].url)
      }
      commit('setBlogs', result);
}

