<template>
  <v-app>
    
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
    
    
    <cabecera/>
    <v-main>
      <v-container fluid>
 
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Cabecera from "./components/Menu.vue";
export default {
  name: "App",
  components: {
    cabecera: Cabecera,
  },
  data: () => ({
    //
  }),
};
</script>
