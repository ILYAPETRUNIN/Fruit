<template>
    <div class='home'>

        <div class='d-flex justify-space-between home__filter flex-wrap'>
              <PalletFilter v-for='item in palletFilter' :key='item.name' :filterItem='item'/>
        </div>

        <div class='d-flex justify-space-between home__favorite'>
            <Favorite  v-for='item in favoriteProducts' :key='item.name' :item='item'/>
        </div>

        <div class='listProduct'>
            <div class='listProduct__filter d-flex justify-space-between mb-10 mt'>
                <FilterBtn text='Посление продукты'/>
                <FilterBtn text='Популярные продукты'/>
                <FilterBtn text='Обзор продуктов'/>
            </div>
            <ListProduct :productsList='productsList'/>
        </div>

        <div class='featuredProduct'>
              <AppHeader text='Рекомендуемые товары'/>
        </div>
    </div>
</template>

<script>
const palletFilter=[
  {id:0,name:'freshFruit',label:'Свежие фрукты',url:require('@/assets/img/filter/freshfruit.png')},
  {id:1,name:'driedFruit',label:'Сухофрукты, орехи',url:require('@/assets/img/filter/driedfruit.png')},
  {id:2,name:'vegetables',label:'Овощи',url:require('@/assets/img/filter/vegetables.png')},
  {id:3,name:'drinkFruit',label:'Напитки',url:require('@/assets/img/filter/drinkfruits.png')},
]

const favoriteProducts=[
  {id:0,name:'summerFruits',label:'Летние фрукты',description:'100% Всё из натуральных фруктов',url:require('@/assets/img/favorite/favorite1.png')},
  {id:1,name:'drinks',label:'Соки и смузи',description:'100% Всё из натуральных фруктов',url:require('@/assets/img/favorite/favorite2.png')},
]

const productsList=[
  {id:0,name:'Цветная капуста',url:'img/products/cauliflower.png',price:'30.00'},
  {id:1,name:'Голубика',url:'img/products/blueberry.png',price:'30.00'},
  {id:2,name:'Лесной орех',url:'img/products/hazelnuts.png',price:'30.00'},
  {id:3,name:'Груша',url:'img/products/organicQuince.png',price:'30.00'},
  {id:4,name:'Зеленый перец',url:'img/products/capsicumGreen.png',price:'30.00'},
  {id:5,name:'Зеленое яблоко',url:'img/products/greenApple.png',price:'30.00'},
  {id:6,name:'Гибридные томаты',url:'img/products/tomatoHybrid.png',price:'30.00'},
  {id:7,name:'Малина',url:'img/products/freshRaspberry.png',price:'30.00'},
]


import PalletFilter from '@/components/home/palletFilter.vue'
import Favorite from '@/components/home/favorite.vue'
import ListProduct from '@/components/home/listProducts.vue'
import FilterBtn from '@/components/home/filterBtn.vue'

export default {
  data(){
    return{
        palletFilter,
        favoriteProducts,
        productsList
    }
  },
  components:{
      PalletFilter,
      Favorite,
      ListProduct,
      FilterBtn
  }
};
</script>

<style lang="scss">
  .v-main__wrap{
    display:flex;
    justify-content: center;
  }
</style>

<style lang="scss" scoped>
  .home{
    &__filter{
      margin-top:20px;
    }
    &__favorite{
      margin-top:100px;
    }
  }
  .listProduct{
    margin-top:72px;
  }
</style>
