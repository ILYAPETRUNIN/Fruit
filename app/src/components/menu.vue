<template>
  <div class='menu'>
      <router-link class='menu__link' v-for='link in links' :key='link.name' :to={name:link.name}>{{link.label}}</router-link>
  </div>
</template>

<script>
export default {
    props:{
        links:{type:Array}
    }

}
</script>
<style lang="scss" scoped>
    .menu{
        &__link{
            text-decoration: none;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color:var(--v-secondary-base);
            transition:color 0.25s;
            &:hover{
                color:var(--v-primary-base);
            }
            &:not(:last-child){
                margin-right:35px;
            }
        }
    }
</style>