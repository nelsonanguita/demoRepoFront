<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">METODO KRL_RELATE</h2>
<v-spacer></v-spacer>
        <v-col cols="12">
          <p class="text-justify">
            Miremos la nueva versión del método Mi Informe. El usuario elige
            Informe en el menú Personas. Un método llamado Mi informe2 se asocia
            al comando de menú. Se ve de esta manera:
          </p>

          <v-img
            :src="require('../assets/metodo1.jpg')"
            class="my-3"
            contain
            height="200"
          />
                  <p class="text-justify">
          Se ejecuta la primera línea:
          QUERY([Personas];[Personas]Empresa="Acme") No aparece el editor de
          búsquedas. En su lugar, la consulta se especifica y realiza por el
          comando QUERY. El usuario no tiene que hacer nada. Se ejecuta la
          segunda línea del método Mi informe2: ORDER
          BY([Personas];[Personas]Apellido;>;[Personas]Nombre;>) El editor
          Ordenar no aparece, y la ordenación se realiza de inmediato. Una vez
          más, no es necesaria ninguna acción por parte del usuario. Se ejecutan
          las líneas finales del método Mi informe2: OUTPUT FORM ([Personas];
          "Informe") PRINT SELECTION ([Personas]; *)
        </p>
        </v-col>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
