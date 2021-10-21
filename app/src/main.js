import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";

import usePlugins from './boot/plugins.js'
import useComponents from './boot/components.js'

import './css/main.scss';

import vuetify from "./plugins/vuetify.js";

import {auth} from "./backend/firebase/auth.js";
import {onAuthStateChanged} from "firebase/auth";

 usePlugins()
 useComponents()

Vue.config.productionTip = false;

let app

onAuthStateChanged(auth,(user)=>{
  if (user) {
    store.dispatch("auth/getUid")
  } 
  else {
    store.dispatch("auth/getUid")
  }
  
  if(!app){
    app=new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
  
})

