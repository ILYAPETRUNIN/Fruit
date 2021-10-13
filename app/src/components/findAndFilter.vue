<template>
  <form class='d-flex form '>
    <v-col class='d-flex pa-0 findAndFilter align-center'>
            <v-menu v-model='isMenu' :close-on-content-click='false' offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" outlined class='findAndFilter__btn'>
                        <p class='btn__text ma-0'>Все категории</p>
                        <v-icon :class='{rotate180deg:isMenu}' right>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>

                <div class='third findAndFilter__menu d-flex flex-column ma-0 pa-0 pa-2 '>
                    <v-checkbox v-for='item in filterList' :key='item.name' :value='item.name' v-model="checkbox" :label="item.label"/>
                </div>
            </v-menu>

            <div class='findAndFilter__separator'/>
            <v-text-field placeholder='Что вы хотите найти?'  class='findAndFilter__input' single-line outlined/>
    </v-col>



    <v-btn :style='{width:"106px"}' elevation="0" color='primary' class='findAndFilter__btn'>
            <p class='btn__text ma-0'>НАЙТИ</p>
    </v-btn>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            checkbox:[],
            isMenu:false
        }
    },
          computed:{
        ...mapGetters("filter", ["filterList"])
    }
}
</script>

<style lang="scss">
    .findAndFilter{
        .v-input{
            &__slot{
                height:50px!important;
                min-height: 50px !important;
                & fieldset{
                    border:none;
                }
            }
            .v-text-field{
                &__slot{
                    height:50px!important;
                    min-height: 50px !important;
                }
            }
        }
        .v-btn{
            border:none;
            &__content{
                text-transform: none!important;
                font-weight: bold;
            }
        }
    }
</style>

<style lang="scss" scoped>
    .form{
        max-width:621px;
    }
    .findAndFilter{
  
        height:50px;
        border:1px solid rgba(42, 42, 42, 0.2);
        transition: all 0.1s;
        padding: 1px!important;

        &:focus-within{
            padding: 0px!important;
            border:2px solid var(--v-primary-base);
        }
        
        &__separator{
            margin:0px 10px;
            border-left: 1px solid rgba(42, 42, 42, 0.2);
            height:14px;
        }

        &__btn{
            height:50px !important;
            border-radius: 0px;
        }
        &__input{
            height:50px !important;
        }
    }
</style>