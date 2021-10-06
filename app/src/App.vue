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
    this.$store.dispatch("blog/getBlogs");
  },

  name: "App",

  components: {
  },
  methods:{
   
  }

};
</script>
