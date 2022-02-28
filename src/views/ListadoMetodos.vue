<template lang="pug">
v-container 
 v-btn(fab fixed color="success" :right="true" bottom)
    v-icon mdi-plus
 v-row(justify="center")
    v-dialog(v-model="show"  max-width="850px" max-height="800")
      v-card(max-width="100%" )
        v-card-title( class="text-h5" color="primary") {{metodoSel.name}}
        v-card-subtitle(class="subtitle")  {{metodoSel.description}}
        v-divider
        v-card-text
            editor(api-key="77bvlwqw98a7l3nd933zih3vcr04gyobuhp0m6h4rfpn1z3m" 
                cloud-channel="5-dev"
                :disabled="true"
                :init= "{  }"
                initial-value=""
                :inline="true"
                model-events= ""
                plugins=""
                tag-name=""
                toolbar=""
                :value="metodoSel.contenthtml"
            )  
        v-divider
        v-card-actions
          v-btn(text color="primary" @click="show=false") CERRAR

 v-row(class="text-center")

  v-col(class="mb-5" cols="12")
    h2(class="headline font-weight-bold mb-3") LISTADO DE METODOS
  
  v-col(class="mb-5" cols="12")
   
   v-card 
    v-card-title 
    v-data-table(:headers="headers" :items="metodos" :search="search")
      <template v-slot:item.actions="{ item }">
        v-icon(dark color="primary" class="mr-2"  @click="MostrarMetodo(item)") mdi-eye
      </template>

</template>

<script>
import Editor from '@tinymce/tinymce-vue';

  export default {
    data () {
      return {
        search:'',
        show:false,
        content:'',
        metodoSel:{},
         headers: [{
                text: "Nombre",
                value: "name"
            },
            {
                text: "Descripción",
                value: "description"
            },
            {
                text: "Actions",
                value: "actions",
                sortable: false
            },
        ],
        metodos: []
        ,
      }
    },
       created: async function () {
         try {
                const res = await this.axios.post("/metodos/todos");
                this.metodos = res.data.metodos;
                console.log("created")
                console.log(this.metodos);

         } catch (error) {
           console.log(error);
         }

       },

       methods:{
         MostrarMetodo(item){
           console.log(item);
           this.metodoSel=item;
           this.show=true;
         }
       },
       components:{
         'editor': Editor
       }
  }

</script>

