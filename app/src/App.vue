<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>


export default {
  mounted() {
    console.log(process.env);


    //this.$store.dispatch("products/getProducts");
    this.$store.dispatch("filter/getSection");
    this.$store.dispatch("products/getVegetables");
    this.$store.dispatch("products/getFruits");
    this.$store.dispatch("products/getNuts");
    this.$store.dispatch("products/getBerries");
    this.$store.dispatch("blog/getBlogs");
  },

  name: "App",

  components: {
  },
  methods:{
    
  }

};
</script>
