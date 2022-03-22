<template>
  <v-app>
      <menuNavegation/>     
      <barlogin/>
<<<<<<< HEAD
    <v-main>
      <v-container fluid>
=======
  
    
    <v-main >
      <v-container >
 
>>>>>>> a602793b84906e38816a8997c975752788ea3896
        <router-view />
      </v-container>
    </v-main>
</v-app>
</template>

<script>
import Menu from "./components/VistaApp/Menu.vue"
import Barlogin from "./components/VistaApp/NavBar.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    menuNavegation: Menu,
    barlogin: Barlogin
  },
  beforeCreate(){
  
  },
  created(){
    this.readStorage();
  },
  data: () => ({

    //
  }),
  methods:{
    ...mapActions(['readStorage'])
    //readLocalStorage(){
      //this.$store.dispatch('readStorage');
    //}
  }
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