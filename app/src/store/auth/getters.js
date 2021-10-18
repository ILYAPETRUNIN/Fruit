export function getProductsList(state) {
    return new Map(Object.entries({...Object.fromEntries(state.vegetables.entries()),
                                   ...Object.fromEntries(state.fruits.entries()),
                                   ...Object.fromEntries(state.nuts.entries()),
                                   ...Object.fromEntries(state.berries.entries())
                                }))
}

export function getVegetables(state) {
    return state.vegetables
}

export function getFruits(state) {
    return state.fruits
}

export function getBerries(state) {
    return state.berries
}

export function getFavoriteProducts(state){
    return state.favoritesProducts
}

export function getBasket(state){
    let result=[]
    state.basket.forEach((item)=>{
        result.push({
            id:item.id,
            description:getProductsList(state).get(item.id),
            count:item.count
        })
    });
    return result
}

  


