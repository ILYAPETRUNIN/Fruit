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

export  function pushBlog(name, url,date,countComments,text) {
    const sectionListRef = ref(database, "blog");
    const newdata =push(sectionListRef);
    return  set(newdata, {
      name,
      url,
      date,
      countComments,
      text
    });
}

export  function pushSection(id,name,label) {
  const sectionListRef = ref(database, "section");
  const newdata =push(sectionListRef);
  return  set(newdata, {
    id,
    name,
    label,
  });
}



export function getFiribaseVegetables(){
  return new Promise((resolve, reject) => {
        onValue(
            ref(database, "products/vegetables"), 
            (snapshot) => {
              resolve(snapshot.val())},
            (error) => {reject(error)}
        );
  })
}

export function getFiribaseFruits(){
  return new Promise((resolve, reject) => {
        onValue(
            ref(database, "products/fruits"), 
            (snapshot) => {
              resolve(snapshot.val())},
            (error) => {reject(error)}
        );
  })
}

export function getFiribaseNuts(){
  return new Promise((resolve, reject) => {
        onValue(
            ref(database, "products/nuts"), 
            (snapshot) => {
              resolve(snapshot.val())},
            (error) => {reject(error)}
        );
  })
}

export function getFiribaseBerries(){
  return new Promise((resolve, reject) => {
        onValue(
            ref(database, "products/berries"), 
            (snapshot) => {
              resolve(snapshot.val())},
            (error) => {reject(error)}
        );
  })
}

export async function getAllProducts(){
  let vegetables=await getFiribaseVegetables();
  let fruit=await getFiribaseFruits();
  let nuts =await getFiribaseNuts();
  let berries=await getFiribaseBerries();

  return {...vegetables,...fruit,...nuts,...berries}
}

export function getBlog(){
  return new Promise((resolve, reject) => {
        onValue(
            ref(database, "blog"), 
            (snapshot) => {
              resolve(snapshot.val())},
            (error) => {reject(error)}
        );
  })
}

export function getFirebaseSection(){
  return new Promise((resolve, reject) => {
    onValue(
        ref(database, "section"), 
        (snapshot) => {
          resolve(snapshot.val())},
        (error) => {reject(error)}
    );
})
}



