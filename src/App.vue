<template>
  <v-app>
      <menuNavegation/>     
      <barlogin/>
  
    
    <v-main >
      <v-container >
 
        <router-view />
      </v-container>
    </v-main>
</v-app>
</template>

<script>
import Menu from "./components/VistaApp/Menu.vue"
import Barlogin from "./components/VistaApp/NavBar.vue";

export default {
  name: "App",
  components: {
    menuNavegation: Menu,
    barlogin: Barlogin
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
#app
{
  background-color: rgba(0,0,0,.1);
}

body {
  background-repeat: no-repeat;
  background-position: right top;
}

</style>