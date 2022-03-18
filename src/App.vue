<template>
  <v-app>
      <menuNavegation/>     
      <barlogin/>
    <v-main>
      <v-container fluid>
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
</style>