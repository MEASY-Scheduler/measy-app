<template>
    <div class="container py-5">
        <h2 class="text-center">Poll Details</h2>

        <div class="row border rounded border-primary p-5">
            <label>Title: {{ poll_data.title }}</label>
            <label>Description: {{ poll_data.description }}</label>
            <label>Location: {{ poll_data.location }}</label>
            <label>Video Conferencing: Microsoft Teams</label>
            <p>Monday, July 4th 2022, 10:00am-11:00 am, EST </p>
        </div>

        
    </div>
</template>

<script>
export default {
    name:"view-poll",
    data(){
        return {
            param_poll_id: '',
           
            poll_data: {},
        }
    },

    created(){
        this.param_poll_id = this.$route.params.poll_id;

        this.get_poll();
    },

    methods: {
        get_poll(){
            
            let url = BASE_URL + '/api/poll/' + this.param_poll_id;

            axios.get(url, {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("app_token") //the token is a variable which holds the token
                }
               }).then(({data})=>{
                this.poll_data = data.data;

                console.log(this.poll_data);
            })
        }
    }
}
</script>