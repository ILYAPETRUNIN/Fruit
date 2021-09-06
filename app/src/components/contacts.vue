<template>
    <div class='contacts '>
        <a class='contacts__link' v-for='contact in items' :key='contact.name' :href="contact.url">
            <v-icon class='contacts__icon'>mdi-{{contact.name}}</v-icon>
        </a>
    </div>
</template>

<script>
export default {
    props:{
        items:{
            type:Array
        }
    }
}
</script>

<style lang="scss" scoped>
    .contacts{
        &__link{
            text-decoration: none;
            &:not(:last-child){
                margin-right:20px;
            }
        }
        &__icon{
            color:var(--v-third-base);
            &:hover{
                color:var(--v-primary-base);
            }
        }
    }
</style>