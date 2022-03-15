<template>
  <div>
       <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="drawer"
      permanent
      app
      expand-on-hover
    >
      <v-app-bar dark absolute permanent dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar>

      <v-list
        nav
        dense
        margin-top="200"
        class="mt-12 mx-auto"
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <v-list-item  to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
          
        </v-list-item>

        <v-list-group
         :value="false"
         prepend-icon="mdi-account-circle"
        >

            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Documentación</v-list-item-title>
              </v-list-item-content>
            </template>

            
          <v-list-item-group
            :value="true"
            prepend-icon="mdi-account-circle"
            active-class="deep-purple--text text--accent-3"
          >

            <v-list-group :value="false" no-action sub-group>
             
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title
                
                   >4D</v-list-item-title>
                </v-list-item-content>
              </template>

                  
              <v-list-item
                v-for="(item, index) in Documentacion"
                :key="index"
                link
                :to="item.path"
              >
                <v-list-item-icon>
                  <v-icon
                  
                  >{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item>


            </v-list-group>
            
          </v-list-item-group>
           



        </v-list-group >

             <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-beer</v-icon>
          </v-list-item-icon>

          <v-list-item-title>About</v-list-item-title>
          
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    items1: [
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

    Documentacion: [
      {
        path: "/EdicionMetodo",
        name: "Metodos",
        icon: "mdi-home",

      },
      {
        path: "/",
        name: "SuperReport",
        icon: "mdi-folder",
      },
      {
        path: "/",
        name: "Exportables",
        icon: "mdi-car",
      },
     
    ],
    Listado: [
      ["Listado", "mdi-account-multiple-outline"],
      ["Busqueda", "mdi-account-multiple-outline"],
      ["Ingresar metodo", "mdi-account-multiple-outline"],
    ],

       drawer: true,
    overlay: false,
    mostrar: true,
  }),
};
</script>
