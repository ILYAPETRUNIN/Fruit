<template>
    <div v-ripple class='d-flex align-center product'>
        <v-img class='product__img' max-height="110" max-width="110" :src='item.url'></v-img>
        <div class='product__info'>
            <h4 class='font-weight-regular'>{{item.label}}</h4>
            <p class='font-weight-bold'>{{item.price+" ₽"}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{type:Object}
    }
}
</script>

<style lang="scss" scoped>
    .product{
        cursor:pointer;
        border:2px solid rgba(255, 255, 255, 0);
        transition:all 0.3s;
        &:hover{
            background:var(--v-primary-base);
            border:2px solid var(--v-primary-base);
            color:var(--v-third-base);
        }
        &__img{
             background: #F5F5F5;
        }
        &__info{
            margin-left:20px;
        }
    }
</style>