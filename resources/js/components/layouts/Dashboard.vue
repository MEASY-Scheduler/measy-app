<template>
    <div class="container">
        <div class="col-12">
            <a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a>
            <label> <router-link :to="{name:'dashboard'}">All Polls</router-link></label>
            <label> <router-link :to="{name:'poll.create'}">Create Poll</router-link></label>
            <label> <router-link :to="{name:'poll.meeting-times'}">Poll Meeting TImes</router-link></label>
        </div>
        
            <router-view></router-view>
        
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"dashboard-layout",
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            
            let url = BASE_URL + '/api/auth/logout';

            await axios.get(url).then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
}
</script>