<template>
  <div @click='showCallDialog' type="button" class="callback-bt">
    <div class="text-call">
        <v-icon class="fa fa-phone">mdi-phone</v-icon>
        <span>Заказать<br>звонок</span>
    </div>
</div>
</template>

<script>
export default {
    methods:{
        showCallDialog(){
            this.$emit('showCallDialog')
        }
    }
}
</script>

<style lang="scss" scoped>
    /*кнопка звонка*/

.callback-bt {
        background:var(--v-primary-base);
        border:2px solid var(--v-primary-base);
        border-radius:50%;
        box-shadow:0 8px 10px rgba(145, 253, 56,0.3);
        cursor:pointer;
        height:68px;
        text-align:center;
        width:68px;
        position: fixed;
        right: 5%;
        bottom: 10%;
        z-index:99;
        transition:.3s;
        -webkit-animation:hoverWave linear 1s infinite;
        animation:hoverWave linear 1s infinite;
}

.callback-bt .text-call{
        height:68px;
        width:68px;        
        border-radius:50%;
        position:relative;
        overflow:hidden;
}

.callback-bt .text-call span {
    text-align: center;
    color:var(--v-primary-base);
    opacity: 0;
    font-size: 0;
        position:absolute;
        right: 4px;
        top: 22px;
    line-height: 14px;
        font-weight: 600;
    text-transform: uppercase;
    transition: opacity .3s linear;
    font-family: 'montserrat', Arial, Helvetica, sans-serif;
}

.callback-bt .text-call:hover span {
    opacity: 1;
        font-size: 11px;
}
.callback-bt:hover i {
    display:none;
}

.callback-bt:hover {
        z-index:1;
        background:#fff;
        color:transparent;
        transition:.3s;
}
.callback-bt:hover i {
        color:var(--v-primary-base);
        font-size:40px;
        transition:.3s;
}
.callback-bt i {
        color:#fff;
        font-size:34px;
        transition:.3s;
        line-height: 66px;transition: .5s ease-in-out;
}

.callback-bt i  {
    animation: 1200ms ease 0s normal none 1 running shake;
        animation-iteration-count: infinite;
        -webkit-animation: 1200ms ease 0s normal none 1 running shake;
        -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes hoverWave {
        0% {
        box-shadow:0 8px 10px rgba(145, 253, 56, 0.3),0 0 0 0 rgba(145, 253, 56,0.2),0 0 0 0 rgba(145, 253, 56,0.2)
}
40% {
        box-shadow:0 8px 10px rgba(145, 253, 56,0.3),0 0 0 15px rgba(145, 253, 56,0.2),0 0 0 0 rgba(145, 253, 56,0.2)
}
80% {
        box-shadow:0 8px 10px rgba(145, 253, 56,0.3),0 0 0 30px rgba(145, 253, 56,0),0 0 0 26.7px rgba(145, 253, 56,0.067)
}
100% {
        box-shadow:0 8px 10px rgba(145, 253, 56,0.3),0 0 0 30px rgba(145, 253, 56,0),0 0 0 40px rgba(145, 253, 56,0.0)
}
}@keyframes hoverWave {
        0% {
        box-shadow:0 8px 10px rgba(145, 253, 56,0.3),0 0 0 0 rgba(145, 253, 56,0.2),0 0 0 0 rgba(145, 253, 56,0.2)
}
40% {
        box-shadow:0 8px 10px rgba(145, 253, 56,0.3),0 0 0 15px rgba(145, 253, 56,0.2),0 0 0 0 rgba(145, 253, 56,0.2)
}
80% {
        box-shadow:0 8px 10px rgba(145, 253, 56,0.3),0 0 0 30px rgba(145, 253, 56,0),0 0 0 26.7px rgba(145, 253, 56,0.067)
}
100% {
        box-shadow:0 8px 10px rgba(145, 253, 56,0.3),0 0 0 30px rgba(145, 253, 56,0),0 0 0 40px rgba(145, 253, 56,0.0)
}
}

/* animations icon */

@keyframes shake {
0% {
    transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
}
10% {
    transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        -webkit-transform: rotateZ(-30deg);
}
20% {
    transform: rotateZ(15deg);
        -ms-transform: rotateZ(15deg);
        -webkit-transform: rotateZ(15deg);
}
30% {
    transform: rotateZ(-10deg);
        -ms-transform: rotateZ(-10deg);
        -webkit-transform: rotateZ(-10deg);
}
40% {
    transform: rotateZ(7.5deg);
        -ms-transform: rotateZ(7.5deg);
        -webkit-transform: rotateZ(7.5deg);
}
50% {
    transform: rotateZ(-6deg);
        -ms-transform: rotateZ(-6deg);
        -webkit-transform: rotateZ(-6deg);
}
60% {
    transform: rotateZ(5deg);
        -ms-transform: rotateZ(5deg);
        -webkit-transform: rotateZ(5deg);
}
70% {
    transform: rotateZ(-4.28571deg);
        -ms-transform: rotateZ(-4.28571deg);
        -webkit-transform: rotateZ(-4.28571deg);
}
80% {
    transform: rotateZ(3.75deg);
        -ms-transform: rotateZ(3.75deg);
        -webkit-transform: rotateZ(3.75deg);
}
90% {
    transform: rotateZ(-3.33333deg);
        -ms-transform: rotateZ(-3.33333deg);
        -webkit-transform: rotateZ(-3.33333deg);
}
100% {
    transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
}
}

@-webkit-keyframes shake {
0% {
    transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
}
10% {
    transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        -webkit-transform: rotateZ(-30deg);
}
20% {
    transform: rotateZ(15deg);
        -ms-transform: rotateZ(15deg);
        -webkit-transform: rotateZ(15deg);
}
30% {
    transform: rotateZ(-10deg);
        -ms-transform: rotateZ(-10deg);
        -webkit-transform: rotateZ(-10deg);
}
40% {
    transform: rotateZ(7.5deg);
        -ms-transform: rotateZ(7.5deg);
        -webkit-transform: rotateZ(7.5deg);
}
50% {
    transform: rotateZ(-6deg);
        -ms-transform: rotateZ(-6deg);
        -webkit-transform: rotateZ(-6deg);
}
60% {
    transform: rotateZ(5deg);
        -ms-transform: rotateZ(5deg);
        -webkit-transform: rotateZ(5deg);
}
70% {
    transform: rotateZ(-4.28571deg);
        -ms-transform: rotateZ(-4.28571deg);
        -webkit-transform: rotateZ(-4.28571deg);
}
80% {
    transform: rotateZ(3.75deg);
        -ms-transform: rotateZ(3.75deg);
        -webkit-transform: rotateZ(3.75deg);
}
90% {
    transform: rotateZ(-3.33333deg);
        -ms-transform: rotateZ(-3.33333deg);
        -webkit-transform: rotateZ(-3.33333deg);
}
100% {
    transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
}
}
/* конец кнопки звонка */
</style>