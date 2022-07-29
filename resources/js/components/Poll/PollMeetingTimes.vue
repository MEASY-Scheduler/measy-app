<template>
    <div class="container py-5">
        <h2 class="text-center">Set Up Meeting Time(s)</h2>

        <div class="row border p-5 mt-5"> 
            <div class="col-12 mb-4">
                <label>Main Stakeholders</label>
                <textarea name="" id="" class="form-control" placeholder="Copy and Paste Email address  of the main stakeholder or enter manually  seperated by (;)"></textarea>
            </div>

            <div class="col-12 mb-4">
                <button class="btn btn-primary float-end">Verify Email Address</button>
            </div>

            <div class="col-12 mb-4">
                <label>Other Stakeholders</label>
                <textarea name="" id="" class="form-control" placeholder="Copy and Paste Email address  of the main stakeholder or enter manually  seperated by (;)"></textarea>
            </div>

            <div class="row mb-4">
                <div class="col-12 col-lg-4 mb-3">
                    <label for="" class="mt-1">Meeting date range</label>
                </div>
                <div class="col-12 col-lg-4 mb-3">
                    <label>Start</label>
                    <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="col-12 col-lg-4 mb-3">
                    <label>End</label>
                    <input type="text" class="form-control" placeholder="" />
                </div>
            </div>

            <div class="col-12 mb-4">
                <label>Duration of Meeting</label>
                <select name="" class="form-control">
                    <option>Select</option>
                </select>
            </div>

            <div class="col-12 mb-4">
                <label>Choose  number  of  entries: </label>
                <select name="" class="form-control">
                    <option>Select</option>
                </select>
            </div>

            <div class="row mb-4">
                <div class="col-12 col-lg-4 mb-3">
                    <label for="" class="mt-1">Deadline For Response</label>
                </div>
                <div class="col-12 col-lg-4 mb-3">
                    <label>Date</label>
                    <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="col-12 col-lg-4 mb-3">
                    <label>Time</label>
                    <input type="text" class="form-control" placeholder="" />
                </div>
            </div>

            <div class="col-12 mb-5">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Video Conferencing
                    </label>
                </div>                
            </div>

            <div class="col-12 mb-4 mt-5 text-center">
                <label for="">Add Calender(s)</label>
                <button class="btn btn-primary">Connect to calender</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"poll-meeting-times",
    data(){
        return {
            
           
        }
    },

    created(){
        
    },

    methods: {
        async all_polls(){
            
            let url = BASE_URL + '/api/poll/all';

            await axios.get(url, {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("app_token") //the token is a variable which holds the token
                }
               }).then(({data})=>{
                console.log(data);
            })
        }
    }
}
</script>