<template>
    <div class='d-flex align-center'>
        <p class='filterBtn__text ma-0 mr-5'>{{text}}</p>

        <div>
            <v-btn class='mr-3' color="primary" elevation="3" icon>
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-btn color="primary" elevation="3" icon>
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        text:{type:String}
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