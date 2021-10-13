<template>
  <div class='menuFilter d-flex flex-column menuFilter'>
      <v-btn @click='showSection=!showSection' class='btn' color="primary">
          <v-icon class='btn__icon' left>mdi-menu</v-icon>
              <p class='btn__text ma-0'>Все разделы</p>
          <v-icon :class='{rotate180deg:showSection}' right>mdi-chevron-down</v-icon>
      </v-btn>
 
      <v-expand-transition>
          <v-card v-if='showSection'  class='menuFilter__list' outlined>
            <v-list class='ml-2' dense>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <router-link class='text-decoration-none' :to='{name:item.name}' v-for="(item, i) in filterList" :key="i">
                      <v-list-item>
                          <div class='menuFilter__text'>{{item.label}}</div>
                      </v-list-item>
                  </router-link>
                </v-list-item-group>
            </v-list>
          </v-card>
      </v-expand-transition>
      
      
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
      return{
        selectedItem:null,
        showSection:false
      }
    },
      computed:{
        ...mapGetters("filter", ["filterList"])
    }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>

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
        
        max-height:441px;
      }
  }
</style>