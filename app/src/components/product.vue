<template>
    <div v-ripple class='d-flex align-center product'>
        <v-img contain class='product__img' height='110px' width='110px' max-height="110px" max-width="110px" :src='item.url'></v-img>
        <div class='product__info'>
            <h4 class='font-weight-regular'>{{item.name}}</h4>
            <p class='font-weight-bold'>{{item.price+" ₽"}}</p>
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return{
            
        }
    },

    props:{
        item:{type:Object}
    },


    
}
</script>

<style lang="scss" scoped>
    .product{
        width: 377px;
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