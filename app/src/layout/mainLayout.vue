<template>
  <div class='mainLayout '>
      <header class='d-flex header secondary align-center justify-center'>
          <Header class='container-desctop'/>
      </header>

      <v-main class='container-desctop'>
          <v-container fluid>
            <router-view/>
          </v-container>
      </v-main>

      <v-footer class='d-flex secondary align-center justify-center' app>
          <Footer class='container-desctop'/>
      </v-footer>

  </div>
</template>

<script>
import Header from '@/components/mainLayout/header.vue'
import Footer from '@/components/mainLayout/footer.vue'
export default {
  components: {
    Header,
    Footer
  },
};
</script>

<style lang="scss" scoped>
  .mainLayout{
    .header{
      height: 47px;
    }
  }
</style>
