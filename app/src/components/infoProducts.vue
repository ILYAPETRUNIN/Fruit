<template>
  <div class='d-flex infoProducts third pa-5'>
      <div  class='d-flex flex-column align-center'>
            <h3 class='infoProducts__header'>{{item.name}}</h3>
            <v-img class='infoProducts__img' height='200px' width='200px' contain :src='item.url'/>
      </div>

      <div class='mt-15 ml-5'>
          <p>Самый распространенный сорт овощного перца – Болгарский. В незрелом состоянии его используют для фарширования, маринования и консервирования, а зрелые плоды желтого, оранжевого, красного или фиолетового цвета находят применение как в сыром, так и в приготовленном виде.</p>
          <p><span class='font-weight-bold'>Страна: </span>Болгария</p>
          <p>
              <span class='font-weight-bold'>Пищевая ценность: </span>
              белки {{'50 г'}},
              жиры {{'100 г'}},
              углеводы {{'20 г'}},
          </p>
          <p><span class='font-weight-bold'>Витамины: </span>A,B,C,D</p>
          <p><span class='font-weight-bold'>Калорийность: </span>26,6 ккал</p>
      </div>

      <v-btn @click='clickClose' class='primary--text' icon>
            <v-icon x-large>mdi-close-outline</v-icon> 
      </v-btn>
  </div>
</template>

<script>
export default {
    props:{
        item:Object,
    },
    methods:{
        clickClose(){
            this.$emit('clickClose')
        }
    }
}
</script>

<style lang="scss" scoped>
    .infoProducts{
        &__header{
            text-transform:uppercase;
            font-size: 24px;
        }
        &__img{
            
        }
    }
</style>