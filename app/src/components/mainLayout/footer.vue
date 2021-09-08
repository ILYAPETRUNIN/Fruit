<template>
  <v-container class='d-flex flex-column footer justify-space-between pa-0'>
      <v-row>
          <v-col cols='3' class='pa-0'>
              <Logo class='footer__logo' color='third'/>
              <div>
                  <p class='third--text'>Адресс: <a href='#' class='link text-decoration-none'>г.Уфа ул.Проспект Октября 79</a></p>
                  <p class='third--text'>Телефон: <a href='#' class='link text-decoration-none'>8(800)-555-3535</a></p>
                  <p class='third--text'>Email: <a href='#' class='link text-decoration-none'>hello@colorlib.com</a></p>
              </div>
          </v-col>

          <v-col cols='9' class='menu d-flex flex-column'>
                    <h3 class='menu__head third--text'>ПОЛЕЗНЫЕ ССЫЛКИ</h3>
                
                  <div class='d-flex justify-space-between'>

                      <div class='menu__section d-flex flex-column'>
                          <router-link class='menu__link link text-decoration-none' v-for='link in footerLinks' :key='link.name' :to='link.url'>{{link.name}}</router-link> 
                      </div>

                      <div class='menu__section d-flex flex-column'>
                          <router-link class='menu__link link text-decoration-none' v-for='link in footerLinks1' :key='link.name' :to='link.url'>{{link.name}}</router-link>
                      </div> 

                      <v-col class='pa-0' cols='5'>
                        <SignUp/>
                        <PaySystem/>
                      </v-col>
                  </div>
          </v-col>
      </v-row>

      <v-row class='ma-0 pa-0'>
        <v-col class='third--text ma-0 pa-0'>Copyright ©2021 Все права защищены</v-col>
      </v-row>

  </v-container>
</template>

<script>
import Logo from '../logo.vue'
import SignUp from '../signUp.vue'
import PaySystem from '../paySystem.vue'
import { mapGetters } from 'vuex';

export default {
  components:{
     Logo,
     SignUp,
     PaySystem
  },
      computed:{
        ...mapGetters("main", ["footerLinks","footerLinks1"])
    }
}
</script>

<style lang="scss" scoped>
  .footer{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    &__logo{
      margin-bottom:20px;
    }

    .menu{
      font-size:14px;
      padding:0px;
      padding-left:40px;
      &__head{
        margin-bottom:10px;
      }

      &__link{
        margin:3px 0px;
      }

    }
  }

     .link{
      color:var(--v-third-base);
      transition:0.25s;
      &:hover{
        color:var(--v-primary-base);
      }
    }
</style>