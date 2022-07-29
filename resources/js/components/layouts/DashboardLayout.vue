<template>
    <div class="container">
        <div class="col-12 my-4">
            <label class="me-5"><a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a></label>
            <label class="me-5"> <router-link :to="{name:'dashboard'}">All Polls</router-link></label>
            <label class="me-5"> <router-link :to="{name:'poll.create'}">Create Poll</router-link></label>
            <label class="me-5"> <router-link :to="{name:'conference-settings'}">Conference Settings</router-link></label>
            <label class="me-5"> <router-link :to="{name:'account-settings'}">Account Settings</router-link></label>
            <label class="me-5"> <router-link :to="{name:'notification-settings'}">Nofitication Settings</router-link></label>
            <!-- <label class="me-5"> <router-link :to="{name:'poll.meeting-times'}">Poll Meeting TImes</router-link></label> -->
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

            await axios.get(url, {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("app_token") //the token is a variable which holds the token
                }
               }).then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
}
</script>