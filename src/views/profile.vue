<template>
<v-container>
    <h1> WELCOME TO DASHBOARD</h1>
    <h3 v-if="$store.state.auth">
       {{$store.state.userSession.user.name}}
    </h3>
</v-container>
</template>

<script>
export default {
    created(){

        if(!this.$store.state.auth){
            this.$router.push("/");
            //si no hay usuario auth no debe acceder a pagina profile
        }
    },
    data: () => ({
        
    }),
    computed:{

    }
}
</script>
