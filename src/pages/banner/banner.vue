<template>
<div>
    <button @click="show">显示子组件</button>
  <v-index :info ='info' :list='list'></v-index>
    
</div>
</template>
<script>
import vIndex from './index'
export default {
components:{
    vIndex
 },
data () {
 return {
     info:{
         isShow:false
     },
     list:[
         {
             id:1,
             name:'张三',
             age:18
         },
          {
             id:2,
             name:'李四',
             age:20
         },
          {
             id:3,
             name:'王五',
             age:23
         }
     ]

 }
},
methods:{
    show(){
        this.info.isShow=!this.info.isShow
    }
},
mounted(){
}
}
</script>
<style scoped>
</style>