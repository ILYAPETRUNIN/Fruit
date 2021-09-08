<template>
  <div class='d-flex shopBtns align-center'>

      <ButtonBadge icon='mdi-heart-outline' content='6'/>
      <ButtonBadge icon='mdi-shopping-outline' content='6'/>
      <div class='d-flex ml-2'>
          <p class='shopBtns__sum ma-0'>Сумма заказа:&nbsp;</p>
          <p class='ma-0'>0 ₽</p>
      </div>
  </div>
</template>

<script>
import ButtonBadge from '../core/buttonBadge.vue'
export default {
    components:{
        ButtonBadge
    }
}
</script>

<style lang="scss">
        .shopBtns{
            .v-badge__badge{
                min-width: 14px!important;
                width:14px !important;
                height:14px!important;
                padding:0px!important;
                font-size: 10px!important;
                line-height: 13px !important;
            }
    }
</style>>




<style lang="scss" scoped>
    .shopBtns{
        &__sum{
            color:var(--v-secondary-lighten4);
        }
    }
</style>