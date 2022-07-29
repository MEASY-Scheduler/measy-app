import axios from 'axios'
import router from '../router'

export default {
    namespaced: true,
    state:{
        authenticated:false,
        user:{}
    },
    getters:{
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        }
    },
    mutations:{
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        }
    },
    actions:{
        login({commit}){
            
            return axios.get('/api/user/me', {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("app_token") //the token is a variable which holds the token
                }
               }).then(({data})=>{
                commit('SET_USER', data)
                commit('SET_AUTHENTICATED', true)
                router.push({name:'dashboard'})
            }).catch(({response:{data}})=>{
                commit('SET_USER',{})
                commit('SET_AUTHENTICATED',false)
            })
        },
        logout({commit}){
            localStorage.removeItem("app_token");

            commit('SET_USER',{})
            commit('SET_AUTHENTICATED',false)
        }
    }
}