<template>
    <div class="container">
        <div class="row">
            <div class="col-12">

                        <div class="table-responsive">
                            <table class="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Name</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody v-if="polls">
                                    <tr v-for="(poll,index) in polls.data" :key="index">
                                        <td>{{ poll.title }}</td>
                                        <td>{{ poll.location }}</td>
                                        <td>{{ poll.meeting_start_range }}</td>
                                        <td>{{ poll.meeting_end_range }}</td>
                                        <td>
                                            
                                            <router-link class="btn btn-primary btn-sm" :to="{name:'poll.view', params: {poll_id: poll.id}}">View {{ poll.id }}</router-link>
                                            <button class="btn btn-info btn-sm" @click="editPoll(poll.id)">Edit</button>
                                            <button class="btn btn-danger btn-sm" @click="deletePoll(poll.id)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td align="center" colspan="3">No record found.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination align="center" :data="polls" @pagination-change-page="fetch_polls"></pagination>


                
            </div>
        </div>
    </div>
</template>

<script>

import pagination from 'laravel-vue-pagination'


export default {
    name:"dashboard",
    components:{
            pagination
        },
    data(){
        return {
            user:this.$store.state.auth.user,
            polls:{
                    type:Object,
                    default:null
                }
        }
    },

    created(){
        this.all_polls();
    },

    mounted(){
        this.fetch_polls()
    },

    methods: {
        async all_polls(){
            
            let url = BASE_URL + '/api/poll/all';

            await axios.get(url, {headers: {
                  Authorization: "Bearer " + localStorage.getItem("app_token") //the token is a variable which holds the token
                }
               }).then(({data})=>{
                console.log(data);
            })
        },

        async fetch_polls(page=1){
                let url = BASE_URL + '/api/poll/all?page=' + page;
                await axios.get(url, {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("app_token") //the token is a variable which holds the token
                }
               }).then(({data})=>{
                    this.polls = data
                }).catch(({ response })=>{
                    console.error(response)
                })
            }
    }
}
</script>