<template>
  <v-form class='signUp third--text'>
      <h3>Sign Up for Our Newsletter</h3>
      <p>get e-mail updates about our latest Shop and special offers.</p>
      <div class='d-flex'>
           <v-text-field class='signUp__input' placeholder='Enter email address'  flat filled background-color='third'></v-text-field>
           <v-btn max-height='100%' class='signUp__btn' color='primary'>SUBSCRIBE</v-btn>
      </div>
      <Contacts class='header__contacts' :items='contacts'/>
  </v-form>
</template>

<script>
import Contacts from './contacts.vue'
import { mapGetters } from 'vuex';
export default {
    components:{
        Contacts 
    },
        computed:{
        ...mapGetters("main", ["contacts"])
    }
}
</script>

<style lang="scss" scoped>
    .signUp{
        &__input{
            border-radius: 0px;
        }
        &__btn{
            height:56px !important;
            border-radius: 0px;
            }
    }
</style>