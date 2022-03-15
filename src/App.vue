<template>
  <v-app>
<<<<<<< HEAD
    
      <v-app-bar
      dark
      
      dense
      fixed
    >

      <v-toolbar-title></v-toolbar-title>
             <v-spacer></v-spacer>
             <v-btn icon>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>
    
    
=======
    <barlogin/>
>>>>>>> c61d7ee51c38d0d49c86d8bb45b5bec9a20812c2
    <cabecera/>
    <v-main>
      <v-container fluid>
 
        <router-view />
      </v-container>
    </v-main>
</v-app>
</template>

<script>
<<<<<<< HEAD
import Cabecera from "./components/Menu.vue";
=======
import Cabecera from "./components/Cabecera.vue";
import barlogin from "./components/barlogin.vue";

>>>>>>> c61d7ee51c38d0d49c86d8bb45b5bec9a20812c2
export default {
  name: "App",
  components: {
    cabecera: Cabecera,
    barlogin
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
</style>