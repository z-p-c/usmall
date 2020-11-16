<template>
<div>
    <el-button type="primary" @click="willAdd">添加</el-button >
    <v-list @edit='edit($event)'></v-list>
    <v-add :info='info' ref='one'></v-add>
</div>
</template>
<script>
import vList from './components/list'
import vAdd from './components/add'
import vSlot from './components/slot'
export default {
components:{
    vList,
    vAdd,
    vSlot
 },
data () {
 return {
     data:'123',
     info:{
         isShow:false,
         isAdd:true //显示添加按钮
     }
 }
},
methods:{
    // 点击添加出弹出框
    willAdd(){
        this.info.isShow = !this.info.isShow
        this.info.isAdd =  true
    },
    //编辑
    edit(e){
        this.info.isShow = true,
        this.info.isAdd = false
        this.$refs.one.look(e)
    }
},
mounted(){
}
}
</script>
<style scoped>
</style>