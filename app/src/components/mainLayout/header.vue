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

            <Link v-if='getUid==null' @select='auth' text="Войти" icon='mdi-account-outline' color='third'/>
            <v-menu v-else :close-on-content-click='false' offset-y open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                    <Link :on="on" :attrs="attrs" text="Профиль" icon='mdi-account-outline' color='third'/>
                </template>
                <ProfileMenu/>
            </v-menu>
        </div>
    </div>
</template>

<script>
import Link from '@/core/link.vue'
import Contacts from '../contacts.vue'
import SelectLang from '../selectLang.vue'
import ProfileMenu from './auth/profileMenu.vue'
import { mapGetters } from 'vuex';

export default {
    components:{
        Link,
        Contacts,
        SelectLang,
        ProfileMenu
    },

    computed:{
        ...mapGetters("main", ["contacts"]),
        ...mapGetters("auth", ["getUid"])
    },

    methods:{
        auth(){
            this.$emit('auth')
        },
        logout(){
            this.$store.dispatch("auth/logOut");
        }
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