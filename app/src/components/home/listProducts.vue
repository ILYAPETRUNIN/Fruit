<template>
  <v-carousel height='400px' hide-delimiters  class='listProducts d-flex flex-wrap pa-0'>
      <v-carousel-item v-for='(item,index) in getGroupByNine' :key='index'>
          <div class='d-flex flex-wrap' >
              <Product @clickLikes='pushInFavorites(product)' class='justify-center justify-sm-start col-md-4 col-sm-6 col-xs-12 pa-0 listProducts__item' v-for='product in item' :key='product[1].id' :item='product[1]'/>
          </div>
      </v-carousel-item>
  </v-carousel>
</template>

<script>
import Product from '../product.vue'

export default {
  components:{
      Product
  },

  props:{
    productsList:{type:Array}
  },
  computed:{
    getGroupByNine(){
        let result=[];
        for(let i=0;i<this.productsList.length;i++){
          let subResult=[];
          
          for(let j=0;j<9;j++){
            subResult.push(this.productsList[i])
            if(i<this.productsList.length-1)i++;
            else break;
          }

          result.push(subResult);
        }
        return result
    }   
  },
  methods:{
    pushInFavorites(products){
        this.$store.dispatch("products/pushInFavorites",products);
    }
  }

  // watch: {
  //   // эта функция запускается при любом изменении вопроса
  //   productsList: function () {
  //     console.log(this.getGroupByNine())
  //   }
  // },

  
}
</script>

<style>
    .flip-list-move {
      transition: transform 1s;
    }
</style>

<style lang="scss" scoped>
  .listProducts{
    &__item{
      margin-bottom:20px;
    }
  }
</style>