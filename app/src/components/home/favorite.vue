<template>
  <div class='d-flex justify-end align-center favorite' :style="{backgroundImage: `url(${item.url})`}">
      <div>
        <h4 class='favorite__name third--text'>{{item.label}}</h4>
        <p class='favorite__description third--text'>{{item.description}}</p>
        <v-btn color='primary'>КУПИТЬ СЕЙЧАС</v-btn>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .favorite{
        width:100%;
        max-width:560px;
        height: 263px;
        padding:66px 23px;
        background-size:cover;
        &__name{
            font-size:28px;
        }
        &__description{
            font-size:18px;
            font-weight: 300;
        }
    }
</style>