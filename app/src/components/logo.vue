<template>
  <div :class='`${color}--text`' class='d-flex logo align-center'>
      <h3 class='logo__text'>F&V</h3>
      <v-img class='logo__img' max-height="29" max-width="29" src='icons/png/logo/apple.png'></v-img>
      <v-img class='logo__img' max-height="29" max-width="29" src='icons/png/logo/kiwi.png'></v-img>
  </div>
</template>

<script>
export default {
    props:{
        color:{
            type:String
        }
    }
}
</script>

<style lang="scss" scoped>
        .logo{
        &__text{
            font-size:36px;
            font-weight:bold;
            margin-right:10px;
        }
        &__img{
            margin-right:10px;
        }
    }
</style>

