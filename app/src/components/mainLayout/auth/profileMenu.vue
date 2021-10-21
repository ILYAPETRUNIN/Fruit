<template>
     <div class='d-flex flex-column align-center third pa-2'>
        <v-avatar size="80" color='grey'>
            <img v-if='profile.url' :src="profile.url">
            <p class='ma-0'>Нет фото</p>
        </v-avatar>
        <p class='ma-0 mt-2'>{{getName}}</p>

        <div class='bonus mt-5 mb-5 d-flex relative'>
            <div class='ma-0 font-weight-bold primary--text'>{{(!profile.bonus) ? 0 : profile.bonus}} бонусов</div>
            <v-tooltip class='tooltip ' color='third' bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs"  v-on="on" class='absolute'>mdi-alert-circle-outline</v-icon>
                </template>
                <div class='tooltip__slot elevation-5 pa-5 secondary--text d-flex flex-column align-center'>
                     <p>Данные бонусы вы можете потратить при оформлении покупки.</p>
                     <h3>1 бонус=1 руб.</h3>
                </div>
               
            </v-tooltip>

        </div>
        
        <v-btn color="secondary" text>История заказов
            <v-icon>mdi-history</v-icon>
        </v-btn>
        <v-btn @click='logout' color="secondary" text>Выйти
             <v-icon>mdi-logout</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    props:{
        profile:{type:Object,default:new Object()}
    },
    methods:{
          logout(){
              this.$store.dispatch("auth/logOut");
          }
    },
    computed:{
        getName(){
            let result;
            if(this.profile.firstName) result=this.profile.firstName
            else if(this.profile.lastName) result+=` ${this.profile.lastName}`
            else result='Нет информации'

            return result
        }
    }
}
</script>

<style lang="scss" scoped>
    .tooltip{
        
        &__slot{
            width:200px;
            text-align:center;
        }
    }
</style>