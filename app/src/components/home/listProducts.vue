<template>
  <div class='listProducts d-flex flex-wrap pa-0'>
        <Product class='justify-center justify-sm-start col-md-4 col-sm-6 col-xs-12 pa-0 listProducts__item' v-for='product in productsList' :key='product.id' :item='product'/>
  </div>
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
}
</script>

<style lang="scss" scoped>
  .listProducts{
    &__item{
      margin-bottom:20px;
    }
  }
</style>