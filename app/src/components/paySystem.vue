<template>
    <div class='d-flex paySystem third--text'>
        <v-img class='paySystem__item' max-height="25" max-width="43" src='icons/png/paySystem/visa.png'></v-img>
        <v-img class='paySystem__item' max-height="25" max-width="43" src='icons/png/paySystem/masterCard.png'></v-img>
        <v-img class='paySystem__item' max-height="25" max-width="43" src='icons/png/paySystem/maestro.png'></v-img>
        <v-img class='paySystem__item' max-height="25" max-width="43" src='icons/png/paySystem/cirrus.png'></v-img>
        <v-img class='paySystem__item' max-height="25" max-width="43" src='icons/png/paySystem/americanExpress.png'></v-img>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .paySystem{
        &__item{
            margin-top:100px;
            &:not(:last-child){
                margin-right:10px;
            }
        }
    }
</style>