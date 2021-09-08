<template>
  <v-form class='signUp third--text'>
      <h3>Подпишитесь на нашу рассылку</h3>
      <p>и получайте по электронной почте обновления о наших последних Магазинах и специальных предложениях.</p>
      <div class='d-flex'>
           <v-text-field class='signUp__input' placeholder='Введите ваш email'  flat filled background-color='third'></v-text-field>
           <v-btn max-height='100%' class='signUp__btn' color='primary'>ПОДПИСАТЬСЯ</v-btn>
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