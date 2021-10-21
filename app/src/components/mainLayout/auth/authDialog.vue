<template>
    <div>
        <v-dialog  v-model='inputVal' width='30%'>

            <div class='dialog third pa-10'>
                    <AuthForm v-if='form.type=="auth"' @successAuth='inputVal=false'/> 
                    <RegForm  v-else  @successReg='inputVal=false'/>

                    <div class='d-flex align-start flex-column mt-5 linkMode'>
                        <div  v-if='!(form.type=="auth" & form.mode=="password")' @click='showAuthForm("password")' class='primary--text linkMode__item mb-2'>Вход  по email/логину</div>
                        <div  v-if='!(form.type=="reg" & form.mode=="password")' @click='showRegForm("password")' class='primary--text linkMode__item mb-2'>Регистрация</div>
                        <div class='separator mt-3 mb-3'/>
                        <div class='d-flex align-center'>
                            <p class='ma-0 mr-2'>Или войдите с помощью:</p>
                            <v-btn icon> <v-img max-height="29" max-width="29" src='@/assets/img/messagers/vk.svg'></v-img></v-btn>
                            <v-btn icon> <v-img max-height="29" max-width="29" src='@/assets/img/messagers/facebook.svg'></v-img></v-btn>
                            <v-btn icon> <v-img max-height="29" max-width="29" src='@/assets/img/messagers/mail.svg'></v-img></v-btn>
                            <v-btn icon> <v-img max-height="29" max-width="29" src='@/assets/img/messagers/twitter.svg'></v-img></v-btn>
                            <v-btn icon> <v-img max-height="29" max-width="29" src='@/assets/img/messagers/yandex.svg'></v-img></v-btn>
                        </div>
                    </div>
                    
                    <v-btn  absolute @click='inputVal=false' class='close primary--text' icon>
                        <v-icon x-large>mdi-close-outline</v-icon> 
                    </v-btn>
                </div>
        </v-dialog>
    </div>
</template>

<script>

import AuthForm from './authForm.vue'
import RegForm from './regForm.vue'

export default {
    components: {
        AuthForm,
        RegForm 
    },
    data(){
        return{
            form:{
                type:'auth',
                mode:'password',
            }
        }
    },
    props:{
        isShow:{
            type:Boolean,
            default:true,
        },
        value:{default:null},
    },
    computed:{
        inputVal:{
                get(){
                    return this.value
                },
                set(val){
                    this.$emit('input',val)
                }
        },  
    },
    methods:{
        showAuthForm(mode){
            this.form.type ="auth",
            this.form.mode=mode
        },
        showRegForm(mode){
            this.form.type ="reg",
            this.form.mode=mode
        }
    }

}
</script>

<style lang="scss" scoped>
    .dialog{
        position:relative;
    }
    .close{
        top:20px;
        right:20px;
    }
    .linkMode{
        font-size:14px;
        &__item{
            position:relative;
            display: inline-block;
            cursor:pointer;
            &::after{
                content:'';
                position:absolute;
                height:2px;
                width:0%;
                transition:width 0.5s;
                bottom:-3px;
                left:0px;
                background:var(--v-primary-base)
            }
            &:hover{
                &::after{
                    width:100%;
                }
            }
        }
    }
    .separator{
        width:100%;
        height:2px;
        background:rgba(128, 128, 128, 0.157);

    }
</style>