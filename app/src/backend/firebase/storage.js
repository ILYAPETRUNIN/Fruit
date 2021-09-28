import {firebaseApp} from './index.js'
import { getStorage,getDownloadURL,ref } from "firebase/storage";

const storage = getStorage(firebaseApp);

export async function getURL(path){
   const url=await getDownloadURL(ref(storage, path))
   return url
}
