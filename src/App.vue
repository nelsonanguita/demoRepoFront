<template>
  <v-app>
    <barlogin/>
    <cabecera/>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
</v-app>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import barlogin from "./components/barlogin.vue";

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
