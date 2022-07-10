<template>

    <div>
        <div class="container py-5" v-if="currentStep == 1">
            <h2 class="text-center">Create Group Poll</h2>
    
            <div class="row border p-5 mt-5">
                <div class="col-12 mb-4">
                    <label>Title</label>
                    <input type="text" v-model="poll_data.title" class="form-control" placeholder="What is the occassion about?" />
                </div>
                
                <div class="col-12 mb-4">
                    <label>Description</label>
                    <textarea name="" id="" class="form-control" placeholder="Here you can provide details of meeting"></textarea>
                </div>
                
                <div class="col-12 mb-4">
                    <label>Attach Agenda</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
    
                <div class="col-12 mb-4">
                    <label>Location</label>
                    <input type="text" class="form-control" placeholder="Where will this meeting happen?" />
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
                    <button class="btn btn-primary" @click.prevent="goToStep(2)">Choose Meeting Time(s)</button>
                </div>
    
            </div>
        </div>











        <div class="container py-5" v-if="currentStep == 2">
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

                <div class="col-12 mb-4 mt-5">
                    <label for="">Add Calender(s)</label>
                    <button class="btn btn-primary">Connect to calender</button>
                </div>

                <div class="col-12 mb-4 mt-5 text-center">
                    <button class="btn btn-primary" @click.prevent="goToStep(3)">Choose Poll Time(s)</button>
                </div>
            </div>
        </div>


        <div class="container py-5" v-if="currentStep == 3">
            <vue-cal active-view="month" :disable-views="['years', 'year', 'week']" />
        </div>



    </div>

</template>

<script>

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'


export default {
    name:"create-poll",
    components: { VueCal },
    data(){
        return {
            currentStep: 1,

            poll_data: {
                title: '',

            },


            processing:false
        }
    },

    created(){
        
    },

    methods: {

        goToStep: function(step) {
            this.currentStep = step;
        },

        create_poll() {
            let url = BASE_URL + '/api/poll/create';

            axios.post(url, this.poll_data).then(({data})=>{

                console.log(data);
                
            }).catch(({response:{data}})=>{
                console.log(data);
            }).finally(()=>{
                this.processing = false
            })

        },

        async all_polls(){
            

            await axios.get(url).then(({data})=>{
                console.log(data);
            })
        }
    }
}
</script>