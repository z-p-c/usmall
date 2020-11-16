

import {reqUserList,reqUserCount} from '../../util/request'

const state={
    list:[], 
    total:0,
    size:2,
    page:1,
}   
const mutations={
    changeList(state,arr){
        state.list=arr
    },
    changeTatal(state,num){
        state.total = num
    },
    changePage(state,page){
        state.page = page
    }   
}
const actions={
    requestUserList(context){
        reqUserList({
            size:context.state.size,
            page:context.state.page
        }).then(res=>{
            context.commit('changeList',res.data.list)
        })        
    },
    requestUserCount(context,res){
        reqUserCount().then(res=>{
            context.commit('changeTatal',res.data.list[0].total)
        })
    },
    getCurrentPage(context,page){
        context.commit('changePage',page)
        context.dispatch('requestUserList')
    }
}
const getters={
    list(state){
        return state.list
    },
    total(state){
        return state.total
    },
    page(state){
        return state.page
    }
}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true 
}
