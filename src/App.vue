<template>
  <v-app >
    <v-app-bar app color="teal" dark>
     
    </v-app-bar>
   
        
    <v-navigation-drawer 
      app 
      v-model="drawer"
      :mini-variant.sync="drawer"
      permanent >
      <v-list-item class="px-2">


        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Porongas</v-list-item-title>

        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-list-item @click.stop="drawer = !drawer">
        <v-list-item-content>
          <v-list-item-title v-if="!drawer" class="text-h6 text-center">
            MENU
          </v-list-item-title>
            <v-list-item-subtitle> </v-list-item-subtitle>
            
        </v-list-item-content>
        
      </v-list-item>
      <v-divider></v-divider>


      <v-list nav dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
          @click.stop="drawer = !drawer" :value="!drawer"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-overlay @click.stop="drawer = !drawer" :value="!drawer"></v-overlay>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      {
        path: "/",
        name: "Home",
        icon: "mdi-home",
      },
      {
        path: "/EdicionMetodo",
        name: "Documentación",
        icon: "mdi-folder",
      },
      {
        path: "/about",
        name: "Nosotros",
        icon: "mdi-car",
      },
    ],
    drawer: false,
    overlay: false,
    //
  }),
};
</script>
