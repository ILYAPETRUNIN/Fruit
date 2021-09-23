<template>
  <div class='menuFilter d-flex flex-column menuFilter'>
      <v-btn class='btn' color="primary">
        <v-icon class='btn__icon' left>mdi-menu</v-icon>
            <p class='btn__text ma-0'>Все разделы</p>
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
 
      <v-card class='menuFilter__list' outlined>
        <v-list class='mt-5 ml-2' dense>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in filterList" :key="i">
                  <div class='menuFilter__text'>{{item.label}}</div>
              </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-card>
      
      
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
      return{
        selectedItem:null
      }
    },
      computed:{
        ...mapGetters("filter", ["filterList"])
    }
}
</script>

<style lang="scss" scoped>
  .menuFilter{
    width: 270px;
    max-width: 270px;
      .btn{
        height:50px;
        &__text{
          margin-left:13px !important;
          margin-right:35px !important;
        }

      }

      &__text{
        color:var(--v-secondary-lighten4);
        font-size: 18px !important;
        font-weight:300!important;
      }
      &__list{
        margin-top:20px;
        height:441px;
      }
  }
</style>