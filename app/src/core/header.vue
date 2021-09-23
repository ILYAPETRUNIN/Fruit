<template>
    <h3 class='d-flex justify-center align-center flex-column header'>{{text}}</h3>
</template>

<script>
export default {
    props:{
        text:{
            type:String
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        margin-bottom:40px;
        font-style: normal;
        font-weight: 900;
        font-size: 34px;
        line-height: 50px;
        &::after{
            content:'';
            width:80px;
            border-bottom:4px solid var(--v-primary-base);
            margin-top:26px;
        }
    }
</style>