<template>
  <v-container>

    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">LISTADO DE METODOS</h2>
      </v-col>
    
    </v-row>
     

        <v-list
      nav
      dense
       :headers="headers"
    >
        <template v-slot:top>

    </template>
      <v-list-item v-for="(item, i) in desserts" :key="i" :to="item.link" link>
     
                <v-list-item-title>{{item.name}}</v-list-item-title>
                <v-list-item-title>{{item.descripcion}}</v-list-item-title>
                <v-list-item-title>{{item.modulo}}</v-list-item-title>

      </v-list-item>
    </v-list>

    


  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Nombre del metodo',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Descripción', value: 'descripcion' },
          { text: 'Modulo', value: 'modulo' },
 
        ],
        desserts: [
          {
            name: 'SR_format2',
            descripcion: 'da formato al RUT',
            modulo: 'ACT',
            link: '/metodos',
          },
                    {
            name: '_seleccionaPeriodo',
            descripcion: 'Selecciona periodo escolar',
            modulo: 'ST',
            link: '/metodos',
          },
                      {
            name: 'SR_fecha',
            descripcion: 'Seleccion de fecha por rango',
            modulo: 'ST',
            link: '/metodos',
          },
                                {
            name: 'CalcularIntereses',
            descripcion: 'Calcula interes',
            modulo: 'ACT',
            link: '/metodos',
          },

        ],
      }
    },
  }
</script>

