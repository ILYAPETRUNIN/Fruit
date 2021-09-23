<template>
    <div class='d-flex flex-column justify-center align-center palletFilter'>
        <v-img class='palletFilter__img' max-height="176" max-width="240" :src='filterItem.url'/>
        <div class='d-flex justify-center align-center palletFilter__text'>{{filterItem.label}}</div>
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
        height:270px;
        background: #F5F5F5;
        cursor:pointer;
        transition:1s;
        &:hover{
            background:var(--v-primary-base);
        }
        &__text{
            width:230px;
            height:43px;
            background:rgb(255, 255, 255);
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
            line-height: 50px;
            margin-top:11px;
            position:relative;
        }
    }
</style>