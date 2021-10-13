<template>
  <div class='d-flex flex-column mainLayout '>
      <header class='d-flex header secondary align-center justify-center'>
          <Header class='container-desctop'/>
      </header>

      <div class='d-flex align-center justify-center'>
        <Navigation class='container-desctop'/>
      </div>

      <div class='d-flex align-center justify-center'>
        <NavigationShop class='container-desctop'/>
      </div>

      <div class='d-flex align-center justify-center'>
            <router-view class='container-desctop'/>
      </div>

      <div absolute class='d-flex secondary align-center justify-center' app>
          <Footer class='footer container-desctop'/>
      </div>

  </div>
</template>

<script>
import Header from '@/components/mainLayout/header.vue'
import Footer from '@/components/mainLayout/footer.vue'
import Navigation from '@/components/mainLayout/navigation.vue'
import NavigationShop from '@/components/mainLayout/navigationShop.vue'
export default {
  
  components: {
    Header,
    Footer,
    Navigation,
    NavigationShop
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
