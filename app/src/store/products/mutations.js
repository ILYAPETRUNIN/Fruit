
export function setProducts (state, data) {
    state.productsList=new Map(Object.entries(data)) 
 }