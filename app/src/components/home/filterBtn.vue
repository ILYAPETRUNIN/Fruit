<template>
    <div class='d-flex align-center'>
        <p class='filterBtn__text ma-0 mr-5'>{{text}}</p>

        <div>
            <v-btn @click='left' class='mr-3' color="primary" elevation="3" icon>
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-btn @click='right' color="primary" elevation="3" icon>
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        text:{type:String}
    },
    methods:{
        left(){
            this.$emit('filter',"left")
        },
        right(){
            this.$emit('filter',"right")
        }
    }
}
</script>

<style lang="scss" scoped>
    .filterBtn{
        &__text{
            font-size: 18px;
        }
    }
</style>