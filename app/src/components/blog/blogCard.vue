<template>
    <div class='pallete'>
         <v-img cover class='pallete__img' max-height="259" max-width="367" :src='item.url'/>
         <div class='d-flex pallete__dateAndcomments'>
             <div class='d-flex mr-8 align-center'>
                 <v-icon class='mr-2'>mdi-calendar-blank-outline</v-icon>
                 {{item.date}}
             </div>
              <router-link to='/blog' class='pallete__comment d-flex align-center'>
                 <v-icon class='icon mr-2'>mdi-comment-processing-outline</v-icon>
                 {{item.countComments}}
              </router-link>
         </div>
         <h4 class='pallete__header'>{{item.name}}</h4>
         <p class='pallete__text'>
             {{item.text}}
             <router-link class='text-decoration-none ' to='/blog'>Читать подробнее</router-link>
         </p>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .pallete{
        max-width:367px;

        &__dateAndcomments{
            margin:21px 0px;
        }

        &__comment{
            text-decoration: none;
            color:var(--v-secondary-lighten4);
            &:hover{
                color:var(--v-primary-base);
                .icon{color:var(--v-primary-base);}
            }
        }

        &__header{
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
            line-height: 30px;
            text-transform: capitalize;
            margin-bottom:30px;
        }
        &__text{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color:var(--v-secondary-lighten4)
        }

    }
</style>