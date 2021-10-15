
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
   if(!state.basket.some((item)=>{return item.id==data.id})) state.basket.push(data)
 }

 export function popBasket(state,idProduct){
   state.basket=state.basket.filter((item)=>{return item.id!=idProduct})
 }

 export function incCountBasket(state,idProduct){
   state.basket.find((item)=>{
      return item.id==idProduct
   }).count++

 }

 export function decCountBasket(state,idProduct){
   let find=state.basket.find((item)=>{
      return item.id==idProduct
   })

   if(find.count==1)popBasket(state,idProduct)
   else find.count--
 }