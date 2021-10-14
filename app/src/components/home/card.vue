<template>
    <div :class='{hoverable:hoverable}' v-ripple class='center card d-flex flex-column justify-center align-center palletFilter text-decoration-none'>
        <div :class='{front:rotate}' class='d-flex flex-column justify-center align-center'>
            <v-img contain class='palletFilter__img' max-height="176" max-width="240" :src='filterItem.url'/>
            <div class='d-flex flex-column align-center'>
                <div v-if='!filterItem.price' class='d-flex justify-center align-center palletFilter__text'>{{filterItem.name}}</div>
                
                <div v-else class='d-flex flex-column align-center palletFilter__text'>
                    <div class='d-flex justify-center align-center palletFilter__text_1'>{{filterItem.name}}</div>
                    <p class='ma-0'>{{filterItem.price+" ₽"}}</p>
                </div>
            </div>
        </div>

        <div v-if='rotate' class='back d-flex flex-column justify-center align-center palletFilter'>
            <h3 class='infoProducts__header'>{{filterItem.name}}</h3>

            <div class='mt-5 ml-5'>
                <p>Самый распространенный сорт овощного перца – Болгарский.</p>
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
        </div>     
    </div>
</template>

<script>


export default {
    components:{
       
    },
    props:{
        filterItem:{
            type:Object
        },
        rotate:{
            type:Boolean,
            default:false
        },
        hoverable:{
            type:Boolean,
            default:false
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
    .palletFilter{
        width:100%;
        padding:20px;
        cursor:pointer;
        transition:1s;
        &__text{
            width:230px;
            background:rgb(255, 255, 255);
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
            line-height: 50px;
            margin-top:11px;
            position:relative;

            &_1{
                font-weight: normal;
                font-size: 20px;
                line-height: 30px;
            }
        }

    }

    .center{
        position:relative;
        width:270px;
        height:300px;
    }
    
    .front,
    .back{
    width:100%;
    height:100%;
    background: #F5F5F5;
    backface-visibility: hidden;
    position: absolute;
    transition: transform .6s linear;
    }

    .front{
    transform: perspective(600px) rotateY(0deg);
    }

    .back{
    transform: perspective(600px) rotateY(180deg);
    background-color: #f1f1f1;
    }

    .card:hover > .front{
    transform: perspective(600px) rotateY(-180deg);
}
    .card:hover > .back{
    transform: perspective(600px) rotateY(0deg);
    }

    .hoverable{
                &:hover{
            background:var(--v-primary-base);
        }
    }
</style>