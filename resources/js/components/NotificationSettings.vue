<template>
    <div class="container py-2">
        <h2 class="text-center">Notification Settings </h2>

        <div class="row border p-5 mt-5"> 

            
            <div class="col-12 col-md-6 mb-3 ">
                <label>Notify me by: </label>
                <select class="form-control" name="" id="">
                    <option value="">Choose an option</option>
                </select>

            </div>
            
            <div class="col-12 mb-3 mt-5">
                <label class="mb-3">Notify me when:</label><br/>

                <label><input type="checkbox" /> I recieve  a 100% response  from  all invities.</label><br/>
                <label><input type="checkbox" checked /> 100%  response from mainstakeholders/speaker(s)</label><br/>
                <label><input type="checkbox" /> Poll is succesffully created .</label><br/>
                <label><input type="checkbox" checked/> Milestone/Progress.</label><br/>
            </div>
            

            <div class="col-12 mb-4 mt-5 text-center">
                <button class="btn btn-primary">Save Settings</button>
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