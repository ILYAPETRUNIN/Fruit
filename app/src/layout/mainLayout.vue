<template>
  <div class='d-flex flex-column mainLayout '>
      <header class='d-flex header secondary align-center justify-center'>
          <Header @auth='isShowAuthDialog=true' class='container-desctop'/>
      </header>

      <div class='d-flex align-center justify-center'>
        <Navigation class='container-desctop'/>
      </div>

      <div class='d-flex align-center justify-center'>
        <NavigationShop @showCallDialog='isShowCallDialog=true' class='container-desctop'/>
      </div>

      <div class='d-flex align-center justify-center'>
            <router-view class='container-desctop'/>
      </div>

      <div absolute class='d-flex secondary align-center justify-center' app>
          <Footer class='footer container-desctop'/>
      </div>

      <CallBtn v-if='!isShowCallDialog' @showCallDialog='isShowCallDialog=true'/>
      <CallDialog v-model='isShowCallDialog'/>
      <AuthDialog v-model='isShowAuthDialog'/>

  </div>
</template>

<script>
import Header from '@/components/mainLayout/header.vue'
import Footer from '@/components/mainLayout/footer.vue'
import Navigation from '@/components/mainLayout/navigation.vue'
import NavigationShop from '@/components/mainLayout/navigationShop.vue'
import CallBtn from '@/components/callBtn.vue'
import CallDialog from '@/components/callDialog.vue'
import AuthDialog from '@/components/authDialog.vue'

export default {
  data(){
    return{
      isShowCallDialog:false,
      isShowAuthDialog:false
    }
  },
  
  components: {
    Header,
    Footer,
    Navigation,
    NavigationShop,
    CallBtn,
    CallDialog,
    AuthDialog
  },

};
</script>

<style lang="scss" scoped>
  .mainLayout{
    .header{
      height: 47px;
    }
    .footer{
      margin-top:62px;
      margin-bottom:127px;
    }
  }
</style>
