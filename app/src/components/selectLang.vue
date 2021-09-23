<template>
  <v-menu v-model='isShow' nudge-bottom='10px' offset-y class='menu'>
        <template v-slot:activator="{ on, attrs }">
            <div class='menu_activator d-flex align-center' v-bind="attrs" v-on="on">
                <v-img
                    max-height="14"
                    max-width="27"
                    :src='`icons/png/${currentLang}.png`'></v-img>
                <p class='menu__text third--text'>{{currentLang}}</p>
                <v-icon :class='isShow ? "rotate180":""' color='third'>mdi-chevron-down</v-icon>
            </div>
        </template>
        
         <v-list   class='list secondary'>
                <v-list-item @click='currentLang=item' v-for="item in items" :key="item" link>
                    <v-img class='list__img' max-height="14" max-width="27" :src='`icons/png/${item}.png`'></v-img>
                    <v-list-item-title class='third--text' v-text="item"></v-list-item-title>
                </v-list-item>
         </v-list>
    </v-menu>
</template>

<script>
export default {
    data(){
        return{
            currentLang:'English',
            items: ['English','Russian'],
            isShow:false
        }
    }
}
</script>

<style>
    .rotate180{
        transform: rotate(180deg);
    }
</style>

<style lang="scss" scoped>
    .menu{
        &_activator{
            width:116px!important;
        }
        
        &__text{
            margin:0px;
            margin-left:9px;
            margin-right:10.5px;
        }
    }
            .list{
            &__img{
                margin-right:9px;
            }
        }
</style>