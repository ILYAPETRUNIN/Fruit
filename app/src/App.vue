<template>
  <v-app>
      <router-view/>
      <v-snackbar v-model="notification.isShow" :color='notification.color'>{{notification.message}}</v-snackbar>
  </v-app>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  data(){
    return{
      notification:{
        isShow:false,
        message:null,
        color:null
      }
    }
  },

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
    
  },
  computed:{
    ...mapGetters("main", ["getNotification"]),
    ...mapGetters("busError", ["getError"]),
  },
  watch:{
    getNotification:function(val){
        this.notification.isShow=true
        this.notification.message=val.message
        this.notification.color=val.color
    },
    getError:function(val){
                this.$store.dispatch("main/setNotification",{
                    message:val.message,
                    color:'error'
                })
    }

  }

};
</script>
