<template>
  <v-form ref="form" v-model="valid" lazy-validation class="d-flex flex-column form">
        <h2 class="mb-4">Регистрация</h2>
        <div class='d-flex'>
             <v-text-field :rules="[required(regData.firstName)]" v-model="regData.firstName" label="Имя" filled rounded dense/>
             <v-text-field :rules="[required(regData.lastName)]" v-model="regData.lastName" label="Фамилия" filled rounded dense/>
        </div>
        <v-text-field :rules="[required(regData.email),email(regData.email)]" v-model="regData.email" label="E-mail" filled rounded dense>
            <template v-slot:append>
                <v-tooltip color='secondary' bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                    </template>
                    <div class="pa-0">
                        <p class="ma-0">Формат e-mail: name@example.ru</p>
                    </div>
                </v-tooltip>
            </template>
        </v-text-field>

        <v-text-field :rules="[required(regData.password)]"  v-model="regData.password"
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Придумайте пароль"
            filled
            rounded
            dense
            counter
        />
        
        <v-text-field :rules="[required(regData.passwordDuplicate),equalsPassword(regData.password,regData.passwordDuplicate)]" v-model="regData.passwordDuplicate"
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Повторите пароль"
            filled
            rounded
            dense
            counter
        />

        <div class='d-flex align-center'>
            <v-checkbox v-model="personAgree" label="Я согласен c" color="primary"/>
            <a class='link pa-0 mb-1 ml-1' href='#' @click.prevent='showPolicyPrivate'>политикой конфиденциальности</a>
        </div>

        <v-btn :disabled='!personAgree' @click="validate" x-large class="d-flex primary mt-3">
            <p class="btn__text ma-0">Создать аккаунт</p>
        </v-btn>
    </v-form>
</template>

<script>
import {required,email,equalsPassword} from '@/js/rulesValidate.js'

export default {
      data(){
        return{
            required,email,equalsPassword,
            personAgree:false,
            valid:true,
            regData:{
                firstName:null,
                lastName:null,
                email:null,
                password:null,
                passwordDuplicate:null
            },
            showPassword:false,
        }
    },

    methods:{
        
        async regEmailAndPassword({firstName,lastName,email,password,passwordDuplicate}){
            try{
                console.log(firstName,lastName,passwordDuplicate)
                await this.$store.dispatch("auth/register",{email,password});
                this.$emit('successReg')
                this.$store.dispatch("main/setNotification",{
                    message:'Пользователь зарегистирован',
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
                await this.regEmailAndPassword(this.regData)
            }
        },
        showPolicyPrivate(){
            this.$emit('showPolicyPrivate')
        }
    }
}
</script>

<style>

</style>