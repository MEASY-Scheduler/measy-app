<template>
    <div class="container py-5">
        <h2 class="text-center">Connect Video Conferencing  Account(s) for  your Meetings </h2>

        <div class="row border p-5 mt-5"> 
            <div class="col-12 mb-4">
                <p>Connect Video  Conferencing  Options  automatically include  a link in  your  invitries  when you are ready  to 
send out invities  after poll conclusion. Note  that is  aplliacable  to in-person meetings    </p>
            </div>

            <div class="col-12 mb-5">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <div class="tools-container tools-zoom">
                            <img class="mb-3 tools-image" :src="asset('frontassets/assets/img/zoom.png')" alt="Tools" />
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <button class="btn btn-primary">Connect your Zoom Account</button>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-5">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <div class="tools-container tools-teams">
                            <img class="mb-3 tools-image" :src="asset('frontassets/assets/img/teams.png')" alt="Tools" />
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <button class="btn btn-primary">Connect your Teams Account</button>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-5">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <div class="tools-container tools-meet">
                            <img class="mb-3 tools-image" :src="asset('frontassets/assets/img/meet.png')" alt="Tools" />
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <button class="btn btn-primary">Connect your Meet Account</button>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-4 mt-5 text-center">
                <button class="btn btn-primary">Save</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"conference-settings",
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