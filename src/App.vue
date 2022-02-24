<template>
  <v-app>
    <v-app-bar app  color="teal"
          dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>MENU</v-toolbar-title>

    
    </v-app-bar>
 
     <v-navigation-drawer 
     app 
     v-model="drawer" 
     temporary 
     
    >
    <v-list-item @click.stop="drawer = !drawer">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-list-item-content >
          <v-list-item-title class="text-h6 text-center"  >
            MENU
          </v-list-item-title>
          <v-list-item-subtitle>
            
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

       <v-list
          nav
          dense
        >
          <v-list-item link :to="{ name: 'ListadoMetodos' }" @click.stop="drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title :to="x">Documentación</v-list-item-title>
          </v-list-item>
          <v-list-item link @click.stop="drawer = !drawer">
            
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>-----------</v-list-item-title>
          </v-list-item>
          <v-list-item link='www.google.cl' @click.stop="drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>-----------</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    //
  }),
};
</script>
