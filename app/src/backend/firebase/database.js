import {firebaseApp} from './index.js'
// import { getDatabase, ref, set } from 'firebase/database'
import { getDatabase, ref, push, set,onValue } from "firebase/database";

const database = getDatabase(firebaseApp);


// export default function writeData(section,userId, name, url, price) {
//     set(ref(database, section+'/' + userId), {
//       name: name,
//       url: url,
//       price : price
//     });
//   }

export  function pushProductsData(name, url, number,price) {
    const sectionListRef = ref(database, "products");
    const newdata =push(sectionListRef);
    return set(newdata, {
      name: name,
      url: url,
      price : price,
      number:number,
    });
  }

export  function pushFavoriteSectionsData(name, url,) {
    const sectionListRef = ref(database, "favoriteSections");
    const newdata =push(sectionListRef);
    return  set(newdata, {
      name: name,
      url: url,
    });
  }

export function getProduct(){
  return new Promise((resolve, reject) => {
        onValue(
            ref(database, "products"), 
            (snapshot) => {
              resolve(snapshot.val())},
            (error) => {reject(error)}
        );
  })
}



