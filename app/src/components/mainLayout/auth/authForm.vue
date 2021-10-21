<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="d-flex flex-column form"
    >
        <h2 class="mb-4">Войти</h2>
        <v-text-field
            :rules="[
                required(authData.email),
                email(authData.email),
            ]"
            v-model="authData.email"
            label="E-mail"
            filled
            rounded
            dense
        >
            <template v-slot:append>
                <v-tooltip color='secondary' bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                    </template>
                    <div>
                        <p class="ma-0">Телефон в форме: +7 000 000 00 00</p>
                        <p class="ma-0">Формат e-mail: name@example.ru</p>
                    </div>
                </v-tooltip>
            </template>
        </v-text-field>

        <v-text-field
            :rules="[required(authData.password)]"
            v-model="authData.password"
            v-if="modeAuth == 'password'"
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Пароль"
            filled
            rounded
            dense
            counter
        >
        </v-text-field>

        <v-checkbox class='ma-0' v-model="rememberMe" label="Запомнить меня" color="primary"/>

        <v-btn @click="validate" x-large class="d-flex primary mt-3">
            <p class="btn__text ma-0">Войти</p>
        </v-btn>
    </v-form>
</template>

<script>

import {required,email} from '@/js/rulesValidate.js'

export default {
      data(){
        return{
            rememberMe:false,
            valid:true,
            authData:{
                email:null,
                password:null,
            },
            showPassword:false,
            modeAuth:'password',
        }
    },

    methods:{
        required,email,
        async authEmailAndPassword(email,password){
            try{
                await this.$store.dispatch("auth/loginEmailAndPassword",{email,password});
                this.$emit('successAuth')
                this.$store.dispatch("main/setNotification",{
                    message:'Вход успешно выполнен',
                    color:'accent'
                })
            }
            catch(e){
                this.$store.dispatch("busError/setError",e) 
                throw e
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
};
</script>

<style lang="scss" scoped>
        .form{
        position: relative;
    }
</style>
