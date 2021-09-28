<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>

export default {
  mounted() {
    console.log(process.env);

    this.$store.dispatch("products/getProducts");
  },

  name: "App",

  components: {
  },

};
</script>
