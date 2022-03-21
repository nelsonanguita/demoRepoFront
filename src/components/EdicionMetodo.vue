<template lang="pug">
v-container(class="my-6") 

    

    v-alert(v-model="alert.show" :type="alert.type" dismissible) {{alert.message}}

    v-btn(fab fixed color="success" :right="true" bottom @click="showNuevo=true")
        v-icon mdi-plus
    v-row(justify="center")
        v-dialog(v-model="editShow")
            v-card
                v-card-title Editar Método
                v-card-text
                    v-form(ref="fromEditMetodo" @submit.prevent="editMetodo()")
                        v-row
                            v-col 
                                v-text-field( outlined  label="Nombre del Método" :rules="[(v) => !!v || 'Nombre es requerido']" v-model="metodoToEdit.name")
                        v-row 
                            v-col
                                v-textarea( outlined  label="Descripción Breve" :rules="[(v) => !!v || 'Descripcion es requerido']" v-model="metodoToEdit.description")
                        v-row
                            v-col
                                vue-editor(  height="300px" v-model="metodoToEdit.contenthtml" )
                        
                        v-row        
                                


                    v-card-actions
                        v-btn(text color="error" @click="editShow=false") CANCELAR
                        v-btn(text type="submit" color="primary" @click="editMetodo()") EDITAR
    v-row(justify="center")
        v-dialog(v-model="delShow")
            v-card(wi)
                v-card-title ¿Eliminar el Método {{metodoToDel.name}}?
                v-card-actions 
                    v-btn(text color="error" @click="delShow=false") CERRAR
                    v-btn(text type="submit" color="primary" @click="delMetodo(metodoToDel.id)") ACEPTAR
    v-row(justify="center")
        v-dialog(v-model="showNuevo")
           
            v-card
                v-card-title Crear Nuevo Método
                v-card-text
                    v-form(ref="fromAddMetodo" @submit.prevent="addMetodo()")
                        v-row
                            v-col 
                                v-text-field( outlined  label="Nombre del Método" :rules="[(v) => !!v || 'Nombre es requerido']" v-model="metodoToAdd.name")
                        v-row 
                            v-col
                                v-textarea( outlined  label="Descripción Breve" :rules="[(v) => !!v || 'Descripcion es requerido']" v-model="metodoToAdd.description")
                        v-row
                            v-col
                               
                                vue-editor(v-model="content")
                               
                    v-card-actions
                        v-btn(text color="error" @click="showNuevo=false") CERRAR
                        v-btn(text type="submit" color="primary" @click="addMetodo()") GUARDAR



    v-row(justify="center")
        v-dialog(v-model="show"  max-width="600px" max-height="600")
            
            v-card(max-width="100%" )

                v-toolbar(color="blue" dark dense flat)
                    v-toolbar-title {{metodoSel.name}}
                
                v-card-subtitle(class="subtitle")  {{metodoSel.description}}
                v-card-text
                    <span v-html="metodoSel.contenthtml"></span>
                v-card-actions
                    v-btn(text color="primary" @click="show=false") CERRAR
                        v-icon(dark left x-small) mdi-checkbox-marked-circle
                        
                        





        v-col(class="mb-1" cols="12")
            h2(class="headline font-weight-bold mb-3 text-center" ) LISTADO DE METODOS 
            

        v-col(class="mb-5" cols="12")

            v-card 
                v-card-title
                    v-text-field(v-model="search" label="Buscar" prepend-icon="mdi-magnify")

                v-data-table(:headers="headers" :items="metodos" :search="search")
                    <template v-slot:item.actions="{ item }">
                        v-icon(dark color="purple" class="mr-2"  @click="MostrarMetodo(item)") mdi-eye
                        v-icon(dark color="red" class="mr-2"  @click="setMetodoToDel(item)") mdi-delete
                        v-icon(dark color="blue" class="mr-2"  @click="setMetodoToEdit(item)") mdi-pencil
                    </template>
</template>

<script>
import Menu from '../components/VistaApp/Menu.vue'
import { VueEditor } from "vue2-editor";
export default {
    components: {
    VueEditor,
    Menu
  },
      data() {
    return {
        id:0,
        idSubcategoria:0,
        content: "",
        metodos: [],
        alert: {
                type: 'success',
                message: '',
                show: false,
            },
            editShow:false,
            metodoToEdit: {},
            metodoToDel: {},
            metodoSel: {
                 name: '',
                description: '',
                contenthtml: ''
            }
            ,
            delShow: false,
            metodoToDel: {},
            showNuevo: false,
            show: false,
            search: '',
            metodoToAdd: {
                name: '',
                description: '',
                contenthtml: '',
                id_usuario: 1,
            },
            headers: [{
                    text: "Nombre",
                    value: "name"
                },
                {
                    text: "Descripción",
                    value: "description"
                },
                {
                    text: "Acciones",
                    value: "actions",
                    sortable: false
                },
            ],
    };
  },
  created(){
    this.obtenerSubcategorias(this.idSubcategoria)
  } ,
  methods: {
    saveContent: function() {
      // You have the content to save
      console.log(this.content);
    },
    MostrarMetodo(item) {
            //console.log(item);
            this.metodoSel = item;
            this.show = true;

        },
    async addMetodo() {
            let valid = this.$refs.fromAddMetodo.validate();
            if (valid) {
                this.metodoToAdd.contenthtml = this.content;
                try {
                    const res = await this.axios.post('/methods/nuevo', this.metodoToAdd);
                    //console.log(res.data.record);
                    this.metodos.push(res.data.record);
                    this.content = '';
                    this.$refs.fromAddMetodo.reset();
                    this.showNuevo = false;
                    this.alert.show = true;
                    this.alert.type = 'success';
                    this.alert.message = 'Regitro Creado.'

                } catch (error) {
                    this.showNuevo = false;
                    this.content = ''
                    this.$refs.fromAddMetodo.reset();
                    this.alert.show = true;
                    this.alert.type = 'error';
                    this.alert.message = 'No es posible crear métodos con el mismo nombre'

                }

            }

        },
    setMetodoToDel(item) {
            this.metodoToDel = item;
            this.delShow = true;
    },
    async delMetodo(id) {
            try {
                const record = await this.axios.delete(`/methods/eliminar/${id}`);

                this.delShow = false;

                let pos = this.metodos.findIndex((m) => m.id == id);
                this.metodos.splice(pos, 1);

                this.alert.show = true;
                this.alert.type = 'primary';
                this.alert.message = 'Registro Eliminado'

            } catch (error) {
                this.delShow = false;
                this.alert.show = true;
                this.alert.type = 'error';
                this.alert.message = 'No es posible eliminar registro'
            }

        },

    setMetodoToEdit(item) {
            this.editShow = true;
            this.content = '';
            this.metodoToEdit = item;
    },
    async editMetodo() {
            //console.log(this.metodoToEdit);
            let valid = this.$refs.fromEditMetodo.validate();

            if (valid) {
                try {
                    const record = await this.axios.put('/methods/editar', this.metodoToEdit)
                    
                    this.editShow = false;

                    this.alert.show = true;
                    this.alert.type = 'success';
                    this.alert.message = 'Registro editado.'

                } catch (error) {
                    this.editShow = false;
                    this.alert.show = true;
                    this.alert.type = 'error';
                    this.alert.message = 'No es posible Editar registro'
                }

            }

        },
    async obtenerSubcategorias(ID){
        
        try {
            const res = await this.axios.get(`/api/documents/subcategory/${ID}`);
            this.metodos = res.data.document;
            
        } catch (error) {
            console.log(error);
        }
    },
},

  watch: {
    '$route.fullPath': function () {
     this.obtenerSubcategorias(this.$route.params.idFa)
     console.log(this.$route.params.idFa)

  },

}

}

</script>

<style>

</style>