<template>
<div>
    我是子组件
   <div class="box" >
       <table border="1" style="border-collapse: collapse;width:500px;height:200px" v-if="info.isShow">
        <tr>
            <th>ID</th>
           <th>姓名</th>
           <th>年龄</th>
           <th>操作</th>
        </tr>
        <tr align='center' v-for='item in list' :key='item.id'>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td><button @click="del(index)">删除</button></td>
        </tr>
       </table>
   </div>
</div>
</template>
<script>
export default {
    props:['info','list'],
components:{
 },
data () {
 return {
 }
},
methods:{
    del(index){
        this.list.splice(index,1)
    }
},
mounted(){
}
}
</script>
<style scoped>
</style>