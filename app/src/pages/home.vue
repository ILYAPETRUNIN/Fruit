<template>
    <div class='home'>

        <div class='d-flex justify-space-between home__filter flex-wrap'>
              <Card v-for='item in palletFilter' :key='item.name' :filterItem='item'/>
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
            <ListProduct :productsList='getProducts'/>
        </div>

        <div class='featuredProduct'>
              <AppHeader text='Рекомендуемые товары'/>

              <div class='featuredProduct__list d-flex home__filter flex-wrap'>
                  <Card class='featuredProduct__list_item' v-for='item in getFeatured' :key='item.name' :filterItem='item'/>
              </div>
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
  {id:0,label:'Цветная капуста',url:'img/products/cauliflower.png',price:'30.00',number:10},
  {id:1,label:'Голубика',url:'img/products/blueberry.png',price:'30.00',number:10},
  {id:2,label:'Лесной орех',url:'img/products/hazelnuts.png',price:'30.00',number:10},
  {id:3,label:'Груша',url:'img/products/organicQuince.png',price:'30.00',number:10},
  {id:4,label:'Зеленый перец',url:'img/products/capsicumGreen.png',price:'30.00',number:10},
  {id:5,label:'Зеленое яблоко',url:'img/products/greenApple.png',price:'30.00',number:10},
  {id:6,label:'Гибридные томаты',url:'img/products/tomatoHybrid.png',price:'30.00',number:10},
  {id:7,label:'Малина',url:'img/products/freshRaspberry.png',price:'30.00',number:10},
  {id:8,label:'Бананы',url:'img/products/bananas.png',price:'30.00',number:10},
  {id:9,label:'Абрикос',url:'img/products/apricot.png',price:'30.00',number:10},
  {id:10,label:'Авокадо',url:'img/products/avocado.png',price:'30.00',number:10},
  {id:11,label:'Красное яблоко',url:'img/products/redApple.png',price:'30.00',number:10},
  {id:12,label:'Инжир',url:'img/products/figs.png',price:'30.00',number:10},
  {id:13,label:'Огурец',url:'img/products/cucumber.png',price:'30.00',number:10},
  {id:13,label:'Брокколи',url:'img/products/rawBroccoli.png',price:'30.00',number:10},
]


import Card from '@/components/home/card.vue'
import Favorite from '@/components/home/favorite.vue'
import ListProduct from '@/components/home/listProducts.vue'
import FilterBtn from '@/components/home/filterBtn.vue'



export default {


  data(){
    return{
        palletFilter,
        favoriteProducts,
        productsList,
        showProducts:9,
        showFeatured:8
    }
  },
  methods:{
   
  },

  components:{
      Card,
      Favorite,
      ListProduct,
      FilterBtn
  },

  computed:{
    getProducts(){
        return this.productsList.slice(0,this.showProducts-1);
    },
    getFeatured(){
        return this.productsList.slice(8,this.showFeatured+7);
    },
    
    
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
  .featuredProduct{
    &__list{

      &_item{
        margin-bottom:20px;
        &:not(:nth-child(4n+4)){
          margin-right:20px;
        }
      }
    }
  }
</style>
