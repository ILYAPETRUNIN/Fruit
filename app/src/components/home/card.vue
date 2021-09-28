<template>
    <div v-ripple class='d-flex flex-column justify-center align-center palletFilter'>
        <v-img cover class='palletFilter__img' max-height="176" max-width="240" :src='filterItem.url'/>
        <div class='d-flex flex-column align-center'>
            <div v-if='!filterItem.price' class='d-flex justify-center align-center palletFilter__text'>{{filterItem.name}}</div>
            
            <div v-else class='d-flex flex-column align-center palletFilter__text'>
                <div class='d-flex justify-center align-center palletFilter__text_1'>{{filterItem.name}}</div>
                <p class='ma-0'>{{filterItem.price+" ₽"}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        filterItem:{
            type:Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .palletFilter{
        width:270px;
        background: #F5F5F5;
        padding:20px;
        cursor:pointer;
        transition:1s;
        &:hover{
            background:var(--v-primary-base);
        }
        &__text{
            width:230px;
            background:rgb(255, 255, 255);
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
            line-height: 50px;
            margin-top:11px;
            position:relative;

            &_1{
                font-weight: normal;
                font-size: 20px;
                line-height: 30px;
            }
        }

    }
</style>