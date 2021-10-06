<template>
    <div @click='filter' class='d-flex align-center'>
        <p class='filterBtn__text ma-0 mr-5'>{{text}}</p>

        <div>
            <v-btn @click='reverse=!reverse' class='mr-3' color="primary" elevation="3" icon>
                <v-icon class='filterBtn__icon' :class='{rotate180deg:reverse}' key='basic'>mdi-sort-variant</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            reverse:false
        }
    },
    props:{
        text:{type:String}
    },
    methods:{
        filter(){
            this.$emit('filter',this.reverse ? "left" :"right");
        }
    }

}
</script>
<style>
    .rotate180deg{
        transform:rotateX(180deg);
    }
</style>

<style lang="scss" scoped>
    .filterBtn{
        &__text{
            font-size: 18px;
        }
        &__icon{
            transition:transform 0.5s;
        }

    }
</style>