
import {getURL} from "@/backend/firebase/storage.js";

export async function setProducts (state, data) {
    
    for(let key in data){
        data[key].url=await getURL(data[key].url)
    }

    console.log(data)
    state.productsList=data 
 }