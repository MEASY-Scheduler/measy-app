<template>
    <div class="pt-3 m-5">
        
        <h2 class="text-center">Please verify your email</h2>

    </div>
    
</template>

<script>
export default {
    name:"email-verification",
    data(){
        return {}
    },
    methods:{
        asset(path){
            return `${BASE_URL}/${path}`;
        }
    }
}
</script>