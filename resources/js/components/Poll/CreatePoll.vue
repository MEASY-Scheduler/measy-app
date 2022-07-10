<template>

    <div>

        <div v-for="(errorArray, idx) in notifmsg" :key="idx">
            <div v-for="(allErrors, idx) in errorArray" :key="idx">
                <span class="text-danger">{{ allErrors}} </span>
            </div>
        </div>

        <div class="container py-5" v-if="currentStep == 1">
            <h2 class="text-center">Create Group Poll</h2>
    
            <div class="row border p-5 mt-5">
                <div class="col-12 mb-4">
                    <label>Title</label>
                    <input type="text" v-model="poll_data.title" class="form-control" placeholder="What is the occassion about?" />
                </div>
                
                <div class="col-12 mb-4">
                    <label>Description</label>
                    <textarea v-model="poll_data.description " id="" class="form-control" placeholder="Here you can provide details of meeting"></textarea>
                </div>
                
                <div class="col-12 mb-4">
                    <label>Attach Agenda</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
    
                <div class="col-12 mb-4">
                    <label>Location</label>
                    <input type="text" v-model="poll_data.location" class="form-control" placeholder="Where will this meeting happen?" />
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
                    <button class="btn btn-primary" id="sendPollBtn" @click.prevent="createPoll">Send Poll</button>
                </div>
    
            </div>
        </div>











        <div class="container py-5" v-if="currentStep == 2">
            <h2 class="text-center">Set Up Meeting Time(s)</h2>

            <div class="row border p-5 mt-5"> 
                <div class="col-12 mb-4">
                    <label>Main Stakeholders</label>
                    <textarea v-model="poll_data.main_stakeholders" id="" class="form-control" placeholder="Copy and Paste Email address  of the main stakeholder or enter manually  seperated by (;)"></textarea>
                </div>

                <div class="col-12 mb-4">
                    <button class="btn btn-primary float-end">Verify Email Address</button>
                </div>

                <div class="col-12 mb-4">
                    <label>Other Stakeholders</label>
                    <textarea v-model="poll_data.other_stakeholders" id="" class="form-control" placeholder="Copy and Paste Email address  of the main stakeholder or enter manually  seperated by (;)"></textarea>
                </div>

                <div class="row mb-4">
                    <div class="col-12 col-lg-4 mb-3">
                        <label for="" class="mt-1">Meeting date range</label>
                    </div>
                    <div class="col-12 col-lg-4 mb-3">
                        <label>Start</label>
                        <input type="text" v-model="poll_data.meeting_start_range" class="form-control" placeholder="" />
                    </div>
                    <div class="col-12 col-lg-4 mb-3">
                        <label>End</label>
                        <input type="text" v-model="poll_data.meeting_end_range" class="form-control" placeholder="" />
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <label>Duration of Meeting</label>
                    <select v-model="poll_data.duration" class="form-control">
                        <option>Select</option>
                    </select>
                </div>

                <div class="col-12 mb-4">
                    <label>Choose  number  of  entries: </label>
                    <select v-model="poll_data.no_of_entries" class="form-control">
                        <option>Select</option>
                    </select>
                </div>

                <div class="row mb-4">
                    <div class="col-12 col-lg-4 mb-3">
                        <label for="" class="mt-1">Deadline For Response</label>
                    </div>
                    <div class="col-12 col-lg-4 mb-3">
                        <label>Date</label>
                        <input type="text" v-model="poll_data.deadline_date_for_response" class="form-control" placeholder="" />
                    </div>
                    <div class="col-12 col-lg-4 mb-3">
                        <label>Time</label>
                        <input type="text" class="form-control" v-model="poll_data.deadline_time_for_response" placeholder="" />
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
                    <button class="btn btn-primary me-4" @click.prevent="goToStep(1)">Back</button>
                    <button class="btn btn-primary" @click.prevent="goToStep(3)">Choose Poll Time(s)</button>
                </div>
            </div>
        </div>


        <div class="container py-5" v-if="currentStep == 3">
            
            <vue-cal :time-from="8 * 60" :time-to="19 * 60" :time-step="30" :disable-views="['years', 'year', 'month']" />


            <div class="col-12 mb-4 mt-5 text-center">
                
                <button class="btn btn-primary me-4" @click.prevent="goToStep(2)">Back</button>
                <button class="btn btn-primary" id="sendPollBtn" @click.prevent="createPoll">Send Poll</button>

            </div>
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
            notifmsg: '',

            poll_data: {
                title: 'New Poll',
                description: 'First Poll',
                location: 'London',
                main_stakeholders: 'email@email.com',
                other_stakeholders: 'email2@email.com',
                meeting_start_range: '25-07-2022',
                meeting_end_range: '30-07-2022',
                duration: '30mins',
                no_of_entries: '3',
                deadline_date_for_response: '30-07-2022',
                deadline_time_for_response: '13:00',
                speakers: 'me',
                other_attendees: 'Bruno',
                event_start_date_range: '25-07-2022',
                event_end_date_range: '30-07-2022',

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

        createPoll() {

            // document.querySelector('#sendPollBtn').innerHTML = 'Processing...';
            document.querySelector('#sendPollBtn').setAttribute('disabled', 'true');



            let all_errors = [];

            let url = BASE_URL + '/api/poll/create';

            axios.post(url, this.poll_data).then(({data})=>{

                this.$router.push({ name: 'poll.view', params: {poll_id: data.data.id }});
                // console.log(data.data.id);
                // console.log(data);
                
            }).catch(({response:{data}})=>{
                
                if(data.errors){
                    this.notifmsg = data.errors;

                    this.$toastr.e('An error has occured');
                }

            }).finally(()=>{
                this.processing = false;


                // document.querySelector('#sendPollBtn').innerHTML = 'Send Poll';
                document.querySelector('#sendPollBtn').removeAttribute('disabled');
            })

        },

        
    }
}
</script>