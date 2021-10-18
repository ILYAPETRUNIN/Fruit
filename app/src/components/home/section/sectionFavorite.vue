<template>
    <div class='featuredProduct'>
        <AppHeader text='Рекомендуемые товары'/>

        <div class='featuredProduct__list d-flex home__filter flex-wrap'>
            <Card @select='pushInBasket(item)' rotate class='featuredProduct__list_item' v-for='item in getFeatured' :key='item[0]' :filterItem='item[1]'/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from '@/components/home/card.vue'

export default {
    components:{
        Card
    },
    
    data(){
        return{
            showFeatured:8,
        }
    },

    computed:{

    getFeatured(){
      if(this.getProductsList)return Array.from(this.getProductsList).slice(8,this.showFeatured+7);
      else return []    
    },

    ...mapGetters("products", ["getProductsList"]),   
  },
      methods:{
        pushInFavorites(products){
            this.$store.dispatch("products/pushInFavorites",products);
        },
        pushInBasket(products){
            this.$store.dispatch("products/pushInBasket",products);
        }
    }
}
</script>

<style lang="scss" scoped>
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