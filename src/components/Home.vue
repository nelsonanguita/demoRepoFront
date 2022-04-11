<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/fondo.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          BIENVENIDO
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

 
    }),
  }
</script>
