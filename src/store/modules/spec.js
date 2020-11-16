

import { reqSpecList } from '../../util/request'


const state = {
    list: []  
}

const mutations = {
    changeList(state, arr) {
        state.list = arr
    }
}

const actions = {
    requsetSpecList(context) {
        reqSpecList({
            page: 1,
            size: 10
        }).then(res => {
            let arr = res.data.list;
            arr.forEach(item => {
              item.attrs = JSON.parse(item.attrs)
            })
            context.commit('changeList', arr)
        
        })
    }
}

const getters = {
    list(state) {
        return state.list
    }
}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}