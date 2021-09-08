<template>
<div class='d-flex flex-column'>
    <div class='navigation d-flex justify-space-between align-center'>
        <v-col class='pa-0' cols='3'><Logo/></v-col>
        <v-col class='pa-0' cols='7'><Menu  :links='pages'/></v-col>
        <v-col class='pa-0' cols='3'><ShopBtns /></v-col>
    </div>
</div>
</template>

<script>
import Logo from '../logo.vue'
import Menu from '../menu.vue'
import ShopBtns from '../shopBtns.vue'

import { mapGetters } from 'vuex';

export default {
    components:{
        Logo,
        Menu,
        ShopBtns,
        
    },
        computed:{
        ...mapGetters("main", ["pages"])
    }
}
</script>

<style lang="scss" scoped>
    .navigation{
        margin-top:21px;
    }
    .department{
        
    }
</style>