<template>
    <div class="container py-5">
        <h2 class="text-center">Account Settings </h2>

        <div class="row border p-5 mt-5 text-center"> 

            
            <div class="col-12 col-md-4 mb-3 ">
                <img class="mb-3" :src="asset('frontassets/assets/img/profile.png')" alt="Profile" width="200px" />
                <h3>Profile</h3>
                <label>Manage Profile</label>
            </div>
            
            <div class="col-12 col-md-4 mb-3 ">
                <img class="mb-3" :src="asset('frontassets/assets/img/calenders.png')" alt="Profile" width="150px" />
                <h3>Connect Calenders </h3>
                <label>Connect and change Calender </label>
            </div>
            
            <div class="col-12 col-md-4 mb-3 ">
                <img class="mb-3" :src="asset('frontassets/assets/img/notifications.png')" alt="Profile" width="150px" />
                <h3>Notifications</h3>
                <label>Modify Notification settings </label>
            </div>
            
            <div class="col-12 col-md-4 mb-3 ">
                <img class="mb-3" :src="asset('frontassets/assets/img/videocon.png')" alt="Profile" width="150px" />
                <h3>Video Conferencing</h3>
                <label>Manage Video Conferencing Settings  </label>
            </div>
            
            

          

        </div>
    </div>
</template>

<script>
export default {
    name:"account-settings",
    data(){
        return {
            
           
        }
    },

    created(){
        
    },

    methods: {
        asset(path){
            return `${BASE_URL}/${path}`;
        }
    }
}
</script>