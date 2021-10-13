<template>
    <div class='listProduct'>
            <div class='listProduct__filter d-flex justify-space-between mb-10 mt'>
                <FilterBtn @filter='filterDate' text='Посление продукты'/>
                <FilterBtn @filter='filterPopular' text='Популярные продукты'/>

            </div>
            <ListProduct :productsList='getFiltered'/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListProduct from '@/components/home/listProducts.vue'
import FilterBtn from '@/components/home/filterBtn.vue'

export default {
    created(){
        this.filterData=Array.from(this.getProductsList)
    },

    data(){
        return{
            filterData:[]
        }
    },
    components:{
      ListProduct,
      FilterBtn,
    },
    computed:{
        getFiltered(){
            return this.filterData
        },
        ...mapGetters("products", ["getProductsList"]),
    },

      methods:{
      filterDate(dir){

            
          function filtered(a,b,dir){
                let Date1=new Date(a[1].date);
                let Date2=new Date(b[1].date);
                  
                if (dir=="right"){
                    if(Date1>Date2) return -1;
                    else if(Date1<Date2) return 1;
                }

                else if (dir=="left"){
                    if(Date1>Date2) return 1;
                    else if(Date1<Date2) return -1;
                }

                return 0;
          }


          this.filterData=this.filterData.sort((a,b)=>{ return filtered(a,b,dir)})
          

      },

      filterPopular(dir){        
          function filtered(a,b,dir){
                if (dir=="right"){
                    if(a>b) return -1;
                    else if(a<b) return 1;
                }

                else if (dir=="left"){
                    if(a>b) return 1;
                    else if(a<b) return -1;
                }

                return 0;
          }


          this.filterData=this.filterData.sort((a,b)=>{ return filtered(a[1].orders,b[1].orders,dir)})
          

      }
    },

    watch: {
    // эта функция запускается при любом изменении вопроса
    getProductsList: function (val) {
      this.filterData=Array.from(val)
    }
  },
}
</script>

<style>

</style>