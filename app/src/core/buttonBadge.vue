<template>
        <v-btn v-on='on' v-bind='attrs' icon >
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
        content:{type:Number},
        on:{default:null},
        attrs:{default:null}

    }

}
</script>

<style>

</style>