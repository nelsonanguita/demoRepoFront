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
          <v-list-item 
          v-for="item in items" :key="item.title" link :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title >{{item.name}}</v-list-item-title>
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
    items:[
      {
      path:'/',
      name:'Home',
      icon:'mdi-home'
    },
    {
       path:'/ListadoMetodos',
      name:'Documentación',
      icon:'mdi-folder'
    },
        {
       path:'/about',
      name:'Nosotros',
      icon:'mdi-car'
    }
    ],
    drawer: false,
    //
  }),
};
</script>
