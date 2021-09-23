<template>
    <div class='d-flex flex-column navigationShop'>

        <div class='d-flex   justify-space-between'>
            <div class='pa-0'><MenuFilter/></div>

            <div class='d-flex navigationShop__shop flex-column'>
                <div class='d-flex justify-space-between' :style='{height:"50px"}'>
                    <div class='navigationShop__findAndFilter pa-0'><FindAndFilter/></div>

                    <div class='d-flex  align-start'>
                        <v-btn class='navigationShop__call mr-5' icon><v-icon>mdi-phone-in-talk-outline</v-icon></v-btn>
                        <div class='d-flex flex-column '>
                            <a class='navigationShop__number' href="#">8 (800)-777-35-35</a>
                            <p class='navigationShop__operMode ma-0'>Режим работы: 24/7</p>
                        </div>
                    </div>
                </div>

                <div class='d-flex justify-center align-center news'>
                    <div class='news__info'>
                        <h4 class='primary--text'>Fruit & Vegetables</h4>
                        <h2 class='news__header mt-2'>Овощи 100% Органические</h2>
                        <p  class='news__text mt-5 mb-10' >Доступны бесплатный самовывоз и доставка</p>
                        <v-btn class='news__btn' color='primary'>КУПИТЬ СЕЙЧАС</v-btn>
                    </div>

                    <v-img class='news__img' src='@/assets/img/news/news1.png'></v-img>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import MenuFilter from '../menuFilter.vue'
import FindAndFilter from '../findAndFilter.vue'
export default {

    components:{
        MenuFilter,
        FindAndFilter
    }

}
</script>

<style lang="scss" scoped>
    .navigationShop{
        margin-top:30px;
        &__shop{
            width:100%;
            margin-left:20px;
        }

        .news{
            background:#F5F5F5!important;
            margin-top:20px;
            width:100%;
            height:100%;
            &__img{
                max-width:400px; 
            }
            &__info{
                max-width:300px;  
            }
            &__header{
                font-weight: 900;
                font-size: 40px;
                line-height: 50px;
            }
            &__text{
                color:var(--v-secondary-lighten4);
            }
            &__btn{
                width:141px!important;
                min-height: 51px!important;
            }
        }

        &__call{
            background-color:#F5F5F5;
        }
        &__number{
            font-weight: 900;
            text-decoration: none;
            color:var(--v-secondary-base);
            transition:0.25s;
            &:hover{
                color:var(--v-primary-base);
            }
        }
        &__operMode{
            font-size:12px;
            color:var(--v-secondary-lighten4);
        }
        &__findAndFilter{
            width:70%;
        }
    }
</style>