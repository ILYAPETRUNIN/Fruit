<template>
    <div>
        <div v-if='!loading' @click='clickProduct' @mouseover='isShowButton=true' @mouseleave='isShowButton=false' v-ripple class='d-flex align-center product'>
            <v-img contain class='product__img' height='110px' width='110px' max-height="110px" max-width="110px" :src='item.url'></v-img>
            <div class='product__info'>
                <h4 class='font-weight-regular'>{{item.name}}</h4>
                <p class='font-weight-bold'>{{item.price+" ₽"}}</p>
            </div>

            <v-slide-x-reverse-transition>
                <div v-if='isShowButton' class='pt-2 pb-2 d-flex flex-column align-center justify-space-between product__buttons third'>
                    
                    <v-tooltip class='third' bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs"  v-on="on" @click.stop='clickLikes' class='red--text' icon>
                                    <v-icon large>mdi-heart-circle</v-icon> 
                                </v-btn>
                            </template>
                            <span>Добавить в избранное</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-on='on' v-bind='attrs' @click='dialog=true' class='gray--text' icon>
                                    <v-icon large>mdi-post</v-icon> 
                                </v-btn>
                            </template>
                            <span>Открыть описание</span>
                    </v-tooltip>

                    <v-dialog v-model="dialog" width="50%" height="50%">
                        <InfoProduct @clickClose='dialog=false' :item='item'/>
                    </v-dialog>
                </div>
            </v-slide-x-reverse-transition>
        </div>

        <div v-else class='d-flex align-center product'>
                    <v-skeleton-loader height='110px' width='110px'  type="image"/>
                    <div class='d-flex  flex-column product__info'>
                        <v-skeleton-loader width='100px'  type="text"/>
                        <v-skeleton-loader width='50px' type="text"/>
                    </div>            
        </div>
    </div>
</template>

<script>

import InfoProduct from '@/components/infoProducts.vue'

export default {
    components:{
        InfoProduct
    },
    data(){
        return{
            isShowButton:false,
            dialog:false
        }
    },

    props:{
        item:{type:Object},
        loading:{type:Boolean,default:false}
    },
    methods:{
        clickLikes(){
            this.$emit('clickLikes')         
        },
        clickProduct(){
            this.$emit('clickProduct') 
        }
    },   
}
</script>

<style lang="scss" scoped>
    .product{
        width: 377px;
        cursor:pointer;
        border:2px solid rgba(255, 255, 255, 0);
        transition:all 0.3s;
        position:relative;

        &:hover{
            background:var(--v-primary-base);
            border:2px solid var(--v-primary-base);
            color:var(--v-third-base);
        }
        &__img{
             background: #F5F5F5;
        }
        &__info{
            margin-left:20px;
        }

        &__buttons{
            right:20px;
            height:103%;
            width: 50px;
            position:absolute;
        }
    }
</style>