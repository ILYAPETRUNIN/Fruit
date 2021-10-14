<template>
  <div class='d-flex shopBtns align-center'>

      <v-menu :close-on-content-click='false' offset-y open-on-hover>
             <template v-slot:activator="{ on, attrs }">
                 <ButtonBadge :on="on" :attrs="attrs" icon='mdi-shopping-outline' :content='getBasket.length'/>
             </template>

            <div class='d-flex flex-column align-start pa-5 basket third'>
                <h4 class='ma-0 mr-3 '>
                    КОРЗИНА
                    <v-icon class='primary--text'>mdi-cart-arrow-right</v-icon>
                </h4>
                <div class='d-flex align-center' v-for='product in getBasket' :key='product[0]'>
                    <div class='d-flex  align-center basket__imgName'>
                        <v-img contain  height='50px' width='50px' :src='product[1].url'></v-img>
                        <p class='ma-0 ml-3 basket__nameProduct'>{{product[1].name}}</p>
                    </div>

                    <div class='d-flex align-center ml-4'>
                        <v-btn icon><v-icon class='primary--text'>mdi-arrow-left-drop-circle</v-icon></v-btn>
                        <p class='ma-0 ml-1 mr-1'>0</p>
                        <v-btn icon><v-icon class='primary--text'>mdi-arrow-right-drop-circle</v-icon></v-btn>
                    </div>
                    <p class='ma-0 ml-1 mr-1'>{{product[1].price}} ₽</p>
                    <v-btn @click='popProduct(product[0])' icon><v-icon class='error--text'>mdi-close-circle</v-icon></v-btn>
                </div>  
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
                    sum+=Number(element[1].price)
                });
            }

            return sum
        }
    },
    methods:{
            popProduct(idProduct){
                this.$store.dispatch("products/popInBasket",idProduct);
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
    }
</style>