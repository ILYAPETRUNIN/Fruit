<template>
    <div class='home'>

        <div class='d-flex justify-space-between home__filter flex-wrap'>
              <Card v-for='item in palletFilter' :key='item.name' :filterItem='item'/>
        </div>

        <div class='d-flex justify-space-between home__favorite'>
            <Favorite  v-for='item in favoriteProducts' :key='item.name' :item='item'/>
        </div>

        <SectionProducts/>

        <div class='featuredProduct'>
              <AppHeader text='Рекомендуемые товары'/>

              <div class='featuredProduct__list d-flex home__filter flex-wrap'>
                  <Card class='featuredProduct__list_item' v-for='item in getFeatured' :key='item[0]' :filterItem='item[1]'/>
              </div>
        </div>

        <div class='blog'>
              <AppHeader text='Интересные статьи'/>
              <div class='blog__list d-flex  flex-wrap justify-space-between'>
                  <BlogCard v-for='item in Array.from(getBlogs)' :key='item[0]' :item='item[1]'/>
              </div>
        </div>
    </div>
</template>

<script>
const palletFilter=[
  {id:0,value:'freshFruit',name:'Свежие фрукты',url:require('@/assets/img/filter/freshfruit.png')},
  {id:1,value:'driedFruit',name:'Сухофрукты, орехи',url:require('@/assets/img/filter/driedfruit.png')},
  {id:2,value:'vegetables',name:'Овощи',url:require('@/assets/img/filter/vegetables.png')},
  {id:3,value:'drinkFruit',name:'Напитки',url:require('@/assets/img/filter/drinkfruits.png')},
]

const favoriteProducts=[
  {id:0,name:'summerFruits',label:'Летние фрукты',description:'100% Всё из натуральных фруктов',url:require('@/assets/img/favorite/favorite1.png')},
  {id:1,name:'drinks',label:'Соки и смузи',description:'100% Всё из натуральных фруктов',url:require('@/assets/img/favorite/favorite2.png')},
]




import Card from '@/components/home/card.vue'
import Favorite from '@/components/home/favorite.vue'
import BlogCard from '@/components/blog/blogCard.vue'
import SectionProducts from '@/components/home/section/sectionProducts.vue'
import { mapGetters } from "vuex";


export default {


  data(){
    return{
        palletFilter,
        favoriteProducts,
        showProducts:9,
        showFeatured:8,
        filterData:[]
    }
  },


  components:{
      Card,
      Favorite,
      BlogCard,
      SectionProducts
  },

  computed:{

    getFeatured(){
      if(this.getProductsList)return Array.from(this.getProductsList).slice(8,this.showFeatured+7);
      else return []    
    },

    ...mapGetters("products", ["getProductsList"]),
    ...mapGetters("blog", ["getBlogs"]),
    
    
    
  },

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
    margin-bottom:137px;
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
