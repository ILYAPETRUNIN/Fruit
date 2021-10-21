import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  
  theme: {
    options: {
      customProperties: true,
  },
    themes: {
        light: {
            primary: '#7FAD39',
            secondary: '#2A2A2A',
            third:'#FFFFFF',
            accent: '#008110',
            error: '#b71c1c',
            
          }
      }
  },

    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
});
