<template>
    <div class='d-flex header align-center justify-space-between'>
        <div class='d-flex align-center'>
            <Link text='Hello@colorlib.com' icon='mdi-email-outline' color='third'/>
            <div class='header__separator'/>
            <Link text='Free Shipping for all order of $99' color='third'/>
        </div>

        <div class='d-flex align-center'>
            <Contacts class='header__contacts' :items='contacts'/>
            <SelectLang/>
            <div class='header__separator'/>
            <Link text='Login' icon='mdi-account-outline' color='third'/>
        </div>
    </div>
</template>

<script>
import Link from '@/core/link.vue'
import Contacts from '../contacts.vue'
import SelectLang from '../selectLang.vue'
import { mapGetters } from 'vuex';

export default {
    components:{
        Link,
        Contacts,
        SelectLang
    },
    computed:{
        ...mapGetters("main", ["contacts"])
    }

}
</script>

<style lang="scss" scoped>
    .header{
        &__separator{
            margin:0px 20px;
            border-left: 1px solid rgba(255, 255, 255, 0.5);
            height:14px;
        }
        &__contacts{
            margin-right:40px;
        }
    }
</style>