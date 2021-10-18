<template>
    <div @click='select' class='d-flex link align-center'>
        <v-icon class='link__icon' :color='color' v-if='icon'>{{icon}}</v-icon>
        <p :class='`${color}--text`' class='link__text ma-0'>{{text}}</p>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String
        },
        icon:{
            type:String
        },
        color:{type:String},
        dark:{type:Boolean,default:false}
    },
    methods:{
        select(){
            this.$emit('select')
        }
    }
}
</script>

<style lang="scss" scoped>
    .link{
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        cursor:pointer;
        
        &__icon{
            margin-right:8px;  
            transition:0.2s;         
        }

        &__text{
            transition:0.2s;
        }

        &:hover{
            .link__icon,.link__text{
                color:var(--v-primary-base)!important;
            }
        }


    }
</style>