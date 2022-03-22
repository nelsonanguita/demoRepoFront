<template>
<v-container>
    <formularioCredenciales/>
</v-container>
</template>

<script>
import FormularioCredenciales from '../components/VistaApp/Profile.vue'

export default ({
    components:{
        formularioCredenciales:FormularioCredenciales
    },
    data() {
        return {

        }
    },
        created() {

        if (!this.$store.state.auth) {
          //this.$router.push("/");
          //si no hay usuario auth no debe acceder a pagina profile
        }
    },
})
</script>
