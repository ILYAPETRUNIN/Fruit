<template>
    <v-dialog v-model='inputVal' width='30%'>
        <div class='d-flex flex-column form third pa-10'>
            <h2 class='mb-4'>Заказать звонок</h2>
            <p class='mb-5'>Заполните форму и мы свяжемся с вами в ближаёшее время.</p>
            <v-text-field v-model='name' :rules="[rules.required(name)]" label="Имя" placeholder="Введите ваше имя"  filled rounded dense></v-text-field>
            <v-text-field v-model='phone' :rules="[rules.required(phone)]"  v-mask="'+7-(###)-###-##-##'"  label="Номер телефона" placeholder="Введите ваш номер телефона" filled rounded dense></v-text-field>
            <v-btn  x-large class='d-flex primary mt-3'>
                <p class='btn__text ma-0'>Отправить</p>
            </v-btn>

            <v-btn   absolute @click='inputVal=false' class='close primary--text' icon>
                <v-icon x-large>mdi-close-outline</v-icon> 
            </v-btn>
        </div>
    </v-dialog>
</template>

<script>
let rules={
    required:function (name) {return !!name || 'Это поле обязательное'}
}
export default {
    data(){
        return{
            name:null,
            phone:null,
            rules
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
        }
    },

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
</style>