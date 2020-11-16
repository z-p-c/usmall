

const state={
    list: sessionStorage.getItem('list')?JSON.parse(sessionStorage.getItem('list')):{} //登录请求回来到数据
}   

const mutations={
    changeList(state,obj){
        state.list=obj
        sessionStorage.setItem('list',JSON.stringify(obj))
    }
}

const actions={
    requsetUserLogin(context,obj){
           context.commit('changeList',obj)   
    }
}
const getters={
    list(state){
        return state.list
    }
}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true 
}