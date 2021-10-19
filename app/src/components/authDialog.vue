<template>
    <div>
        <v-dialog v-model='inputVal' width='30%'>
            <v-form ref="form" v-model="valid" lazy-validation class='d-flex flex-column form third pa-10'>
                <h2 class='mb-4'>{{(modeAuth=="phone")?"Войти или зарегистрироваться":"Войти"}}</h2>
                <v-text-field 
                    :rules="[rules.required(authData.email),rules.email(authData.email)]"
                    v-model='authData.email' 
                    :label='(modeAuth=="bonus")?"Номер бонусной карты":"E-mail"' 
                    filled rounded dense
                >
                    <template v-slot:append>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                            <v-icon v-on="on">
                                mdi-help-circle-outline
                            </v-icon>
                            </template>
                            <div class='pa-0'>
                                <p class='ma-0'>Телефон в форме:  +7 000 000 00 00</p>
                                <p class='ma-0'>Формат e-mail:  name@example.ru</p>
                            </div>
                        </v-tooltip>
                    </template>
                </v-text-field>
                <v-text-field 
                    :rules="[rules.required(authData.password)]"
                    v-model='authData.password' 
                    v-if='modeAuth=="password" | modeAuth=="bonus"' 
                    @click:append="showPassword= !showPassword" 
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                    :type="showPassword ? 'text' : 'password'"        
                    label="Пароль" 
                    filled rounded dense counter >
                </v-text-field>
                <v-btn @click='validate'  x-large class='d-flex primary mt-3'>
                    <p class='btn__text ma-0'>
                        {{modeAuth=="phone" ?'Получить код':'Войти'}}
                    </p>
                </v-btn>

                <div class='d-flex align-start flex-column mt-5 linkMode'>
                    <div  v-if='modeAuth=="password" | modeAuth=="bonus"' @click='modeAuth="phone"' class='primary--text linkMode__item mb-2'>Вход или регистрация по номеру телефона</div>
                    <div  v-if='modeAuth=="phone" | modeAuth=="bonus"' @click='modeAuth="password"' class='primary--text linkMode__item mb-2'>Вход  по email/логину</div>
                    <div  v-if='modeAuth!="bonus"'  @click='modeAuth="bonus"'  class='primary--text linkMode__item'>Вход по номеру бонусной карты</div>
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

                <div id='recaptcha-container'/>

                <v-btn  absolute @click='inputVal=false' class='close primary--text' icon>
                    <v-icon x-large>mdi-close-outline</v-icon> 
                </v-btn>
            </v-form>
        </v-dialog>
        <v-snackbar :color='snackbar.color' v-model="snackbar.state">{{snackbar.text}}</v-snackbar>
    </div>
</template>

<script>
let rules={
    required:function (name) {return !!name || 'Это поле обязательное'},
    email:function(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result=re.test(String(email).toLowerCase());
        return result || 'Введите корректный email'
    }

}

import {createRecapchaVerifier} from '@/backend/firebase/auth.js'

export default {
    data(){
        return{
            valid:true,
            authData:{
                email:null,
                password:null,
            },
            rules,
            showPassword:false,
            modeAuth:'phone',
            snackbar:{
                state:false,
                text:null,
                color:'accent'
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
        createRecapchaVerifier,

        async authEmailAndPassword(email,password){
            try{
                await this.$store.dispatch("auth/loginEmailAndPassword",{email,password});
                this.snackbar.state=true
                this.snackbar.text='Вход выполнен'
                this.snackbar.color='accent'
                this.inputVal=false
            }
            catch(e){
                 this.snackbar.state=true
                this.snackbar.text=e.message
                this.snackbar.color='error'
            }
        },

        async registerEmailAndPassword(email,password){
            try{
                await this.$store.dispatch("auth/register",{email,password});
                this.snackbar.state=true
                this.snackbar.text='Пользователь успешно зарегистрирован'
                this.snackbar.color='accent'
                this.inputVal=false
            }
            catch(e){
                this.snackbar.state=true
                this.snackbar.text='Данный пользователь уже существует'
                this.snackbar.color='error'
            }
        },

        async validate(){
            if(this.$refs.form.validate()){
                if(this.modeAuth=='password'){
                    await this.authEmailAndPassword(this.authData.email,this.authData.password)
                }
                else if (this.modeAuth=='phone'){
                        this.createRecapchaVerifier('recaptcha-container')
                }
            }
        }
    }

}
</script>

<style lang="scss" scoped>
    .form{
        position: relative;
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