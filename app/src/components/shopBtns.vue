<template>
  <div class='d-flex shopBtns align-center'>

      <v-menu :close-on-content-click='false' offset-y open-on-hover>
             <template v-slot:activator="{ on, attrs }">
                 <ButtonBadge :on="on" :attrs="attrs" icon='mdi-shopping-outline' :content='getBasket.length'/>
             </template>

            <div class='d-flex flex-column align-center pa-5 basket third'>
                <h2 class='ma-0 mb-5 '>КОРЗИНА</h2>

                <div class='d-flex flex-column' v-if='getBasket.length!=0'>
                    <div class='d-flex align-center justify-space-between' v-for='product in getBasket' :key='product.id'>
                        <div class='d-flex  align-center basket__imgName'>
                            <v-img contain max-height='50px' max-width='50px'  height='50px' width='50px' :src='product.description.url'></v-img>
                            <p class='ma-0 ml-3 basket__nameProduct'>{{product.description.name}}</p>
                        </div>

                        <div class='d-flex justify-space-between align-center ml-4 basket__count'>
                            <v-btn @click='decCountBasket(product.id)' icon><v-icon class='primary--text'>mdi-arrow-left-drop-circle</v-icon></v-btn>
                            <p class='ma-0 ml-0 mr-0'>{{product.count}}</p>
                            <v-btn @click='incCountBasket(product.id)' icon><v-icon class='primary--text'>mdi-arrow-right-drop-circle</v-icon></v-btn>
                        </div>

                        <p class='ma-0 ml-7 mr-1'>{{product.description.price*product.count}} ₽</p>
                        <v-btn @click='popProduct(product.id)' icon><v-icon class='error--text'>mdi-close-circle</v-icon></v-btn>
                    </div>

                    <v-btn class='d-flex primary mt-3'>
                        <p class='btn__text ma-0'>Оформить</p>
                        <v-icon right>mdi-cart-arrow-right</v-icon>
                    </v-btn>
                </div>
                
                 <p v-else class='align-self-center mt-5 error--text'>Пусто</p>

                 
                  
             </div>  
      </v-menu>
      
      <ButtonBadge  icon='mdi-heart-outline' :content='getFavoriteProducts.length'/> 
      <div class='d-flex ml-2'>
          <p class='shopBtns__sum ma-0'>Сумма заказа:&nbsp;</p>
          <p class='ma-0'>{{getCommonPrice}} ₽</p>
      </div>
  </div>
</template>

<script>
import ButtonBadge from '../core/buttonBadge.vue'
import { mapGetters } from "vuex";

export default {
    data(){
        return{

        }
    },
    components:{
        ButtonBadge
    },

    computed:{
        ...mapGetters("products", ["getFavoriteProducts","getBasket"]),
        getCommonPrice(){
            let sum=0;
            if(this.getBasket){
                this.getBasket.forEach(element => {
                    sum+=Number(element.description.price*element.count)
                });
            }

            return sum
        }
    },
    methods:{
            popProduct(idProduct){
                this.$store.dispatch("products/popInBasket",idProduct);
            },
            incCountBasket(idProduct){
                this.$store.dispatch("products/incCountBasket",idProduct);
            },
            decCountBasket(idProduct){
                this.$store.dispatch("products/decCountBasket",idProduct);
            }
            
    }
}
</script>

<style lang="scss">
        .shopBtns{
            .v-badge__badge{
                min-width: 14px!important;
                width:14px !important;
                height:14px!important;
                padding:0px!important;
                font-size: 10px!important;
                line-height: 13px !important;
            }
    }
</style>>




<style lang="scss" scoped>
    .shopBtns{
        &__sum{
            color:var(--v-secondary-lighten4);
        }
    }
    .basket{
        &__nameProduct{
            font-size:14px;
        }
        &__imgName{
            width:150px;
        }
        &__count{
            width:80px;
        }
    }
</style>