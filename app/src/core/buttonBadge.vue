<template>
        <v-btn icon >
          <div class='d-flex'>
            <v-icon>{{icon}}</v-icon>
            <v-badge class='badge' overlap bordered  :content="content"/>
          </div>
      </v-btn>
</template>

<script>
export default {
    props:{
        icon:{type:String},
        content:{type:Number}
    }

}
</script>

<style>

</style>