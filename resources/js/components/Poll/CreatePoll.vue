<template>
    <div class="container py-5">
        <h2 class="text-center">Create Group Poll</h2>

        <div class="row border p-5 mt-5">
            <div class="col-12 mb-4">
                <label>Title</label>
                <input type="text" class="form-control" placeholder="What is the occassion about?" />
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
                <button class="btn btn-primary">Choose Meeting Time(s)</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"create-poll",
    data(){
        return {
            
           
        }
    },

    created(){
        
    },

    methods: {
        async all_polls(){
            
            let url = BASE_URL + '/api/poll/all';

            await axios.get(url).then(({data})=>{
                console.log(data);
            })
        }
    }
}
</script>