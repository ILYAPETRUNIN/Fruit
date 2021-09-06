module.exports = {
    transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
          additionalData: `
          @import "@/css/variable.scss";
          `
      }
    }
  },
  

};
