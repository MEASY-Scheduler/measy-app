<template>
    <div class="container">
        <div class="row">
            <div class="col-12">


                <data-table
                    :columns="columns"
                    url="http://example.test/example">
                </data-table>

                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"dashboard",
    data(){
        return {
            user:this.$store.state.auth.user,
            columns: [
                {
                    label: 'Date/Time',
                    name: 'id',
                    orderable: true,
                },
                {
                    label: 'Responded Responses',
                    name: 'name',
                    orderable: true,
                },
                {
                    label: 'Yes',
                    name: 'email',
                    orderable: true,
                },
                {
                    label: 'No',
                    name: 'email',
                    orderable: true,
                },
                {
                    label: 'Awaiting Responses',
                    name: 'email',
                    orderable: true,
                },
            ]
        }
    },

    created(){
        this.all_polls();
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