<template>
    <div class='pageProducts d-flex flex-wrap' >
        <Product @clickProduct='pushInBasket(product)' @clickLikes='pushInFavorites(product)' class='justify-center justify-sm-start col-md-4 col-sm-6 col-xs-12 pa-0' v-for='product in getMapProducts' :key='product[1].id' :item='product[1]'/>
    </div>
</template>

<script>
import Product from '@/components/product.vue'
import { mapGetters } from "vuex";


export default {
    components:{
        Product,
    },

    computed:{
        ...mapGetters("products", ["getVegetables","getFruits","getBerries"]),
        getMapProducts(){
            let result;
            switch(this.$route.name){
                case "vegetables":
                    result=Array.from(this.getVegetables);
                break;

                case "fruits":
                    result=Array.from(this.getFruits);
                break;

                case "berries":
                    result=Array.from(this.getBerries);
                break;              
            }
            return result
        }
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
    .pageProducts{
        margin:50px 0px;
    }
</style>