<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="drawer"
      app
      expand-on-hover
      hide-overlay
      mobile-breakpoint="960"
      floating
      permanent
      clipped
      fluid
      absolute
    >
      <v-app-bar dark absolute permanent dense> </v-app-bar>

      <v-list
        nav
        dense
        margin-top="200"
        class="mt-12 mx-auto"
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        
        <v-list-group color="" no-action prepend-icon="mdi-file-document-multiple">

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Documentación</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.name"
              v-model="item.active"
              :prepend-icon="item.action"
              sub-group
              color="primary"
              active-class="pink--text"
            >
              <template v-slot:activator>
                <v-list-item-content>  
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child in item.subcategories" :key="child.name"  @click="guardarID(child.id)"  :to="`/Documentacion/${child.name.replaceAll(' ','')}/${child.id}`">
                <v-list-item-content >
                  <v-list-item-title  v-text="child.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
         
        </v-list-group>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-glass-mug-variant</v-icon>
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
    idSubcategoria:0,
    items: [
      { },
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
  methods: {
    async traeMenuCategorias() {
      try {
        const res = await this.axios.get("/api/categories");
        this.items = res.data.categories;

        console.log(this.items)
      } catch (error) {
        console.log(error);
      }
    },
    guardarID(id){
      localStorage.setItem("Obtener_ID", id);
      //this.localStorage=id
      //this.idSubcategoria=id
    },

  },
  created() {
    this.traeMenuCategorias();
  },
  watch: {
    
  
  }
};
</script>

