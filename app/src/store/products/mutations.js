
export function setProducts (state, data) {
    state.productsList=new Map(Object.entries(data)) 
 }

 export function setVegetables (state, data) {
    state.vegetables=new Map(Object.entries(data)) 
 }

 export function setFruits (state, data) {
    state.fruits=new Map(Object.entries(data)) 
 }

 export function setNuts (state, data) {
    state.nuts=new Map(Object.entries(data)) 
 }

 export function setBerries (state, data) {
    state.berries=new Map(Object.entries(data)) 
 }

 export function setFavorites(state,data){
   state.favoritesProducts.push(data)
 }

 export function setBasket(state,data){
   state.basket.push(data)
 }

 export function popBasket(state,idProduct){
   state.basket=state.basket.filter((item)=>{return item[0]!=idProduct})
 }