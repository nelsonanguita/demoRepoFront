<template lang="pug">
v-container(class="my-6") 
    v-alert(v-model="alert.show" :type="alert.type" dismissible) {{alert.message}}
    v-btn(v-if="$store.state.auth" fab fixed color="success" :right="true" bottom @click="showNuevo=true")
        v-icon mdi-plus
    v-row(justify="center")
        v-dialog(v-model="editShow")
            v-card
                v-card-title Editar Método
                v-card-text
                    v-form(ref="formEditDocument" @submit.prevent="editDocument()")
                        v-row
                            v-col 
                                v-text-field( outlined  label="Nombre del Método" :rules="[(v) => !!v || 'Nombre es requerido']" v-model="documentToEdit.name")
                        v-row 
                            v-col
                                v-textarea( outlined  label="Descripción Breve" :rules="[(v) => !!v || 'Descripcion es requerido']" v-model="documentToEdit.description")
                        v-row
                            v-col
                                vue-editor(  height="300px" v-model="documentToEdit.contenthtml" )

                        v-row        

                    v-card-actions
                        v-btn(text color="error" @click="editShow=false") CANCELAR
                        v-btn(text type="submit" color="primary" @click="editDocument()") EDITAR
    v-row(justify="center")
        v-dialog(v-model="delShow")
            v-card
                v-card-title ¿Eliminar el Método {{documentToDel.name}}?
                v-card-actions 
                    v-btn(text color="error" @click="delShow=false") CERRAR
                    v-btn(text type="submit" color="primary" @click="delDocument(documentToDel.id)") ACEPTAR
    v-row(justify="center")
        v-dialog(v-model="showNuevo")

            v-card
                v-toolbar(color="blue" dark dense flat)
                    v-icon mdi-clipboard-plus
                    v-toolbar-title Nuevo Documento
                    v-spacer
                    v-btn(icon @click="showNuevo=false")
                     v-icon mdi-close
                     
                v-card-text
                    v-form(ref="fromAddDocuments" @submit.prevent="addDocuments()")
                        v-row
                            v-col 
                        v-row
                            v-col 
                                v-text-field( outlined  label="Nombre documento" :rules="[(v) => !!v || 'Nombre es requerido']" v-model="documentToAdd.name")
                        v-row 
                            v-col
                                v-textarea( outlined  label="Descripción Breve" :rules="[(v) => !!v || 'Descripcion es requerido']" v-model="documentToAdd.description")
                        v-row
                            v-col

                                vue-editor(v-model="content")
                    v-divider
                    v-card-actions
                        v-btn(text color="error" @click="closeFormNew()") CERRAR
                        v-btn(text type="submit" color="primary" @click="addDocuments()") GUARDAR
    v-row(justify="center")
        v-dialog(v-model="show"  max-width="600px" max-height="600")

            v-card(max-width="100%" )

                v-toolbar(color="blue" dark dense flat)
                    v-toolbar-title {{documentSel.name}}

                v-card-subtitle(class="subtitle")  {{documentSel.description}}
                v-card-text
                    <span v-html="documentSel.contenthtml"></span>
                v-card-actions
                    v-btn(text color="primary" @click="show=false") CERRAR
                        v-icon(dark left x-small) mdi-checkbox-marked-circle

        v-col(class="mb-1" cols="12")

        v-col(class="mb-5" cols="12")
            base-material-card 
                template( v-slot:heading)
                    div(class="display-1 font-weight-light") Documentos
                    div(class="subtitle-3 font-weight-light") todos los documentos relacionados a la categoria seleccionada en el menú
                    
                v-text-field(v-model="search" label="Buscar" prepend-icon="mdi-magnify")

                v-data-table(:headers="headers" :items="documents" :search="search" :loading="loadTable")
                    <template v-slot:item.actions="{ item }">
                        v-icon(dark color="purple" class="mr-2"  @click="showDocument(item)") mdi-eye
                        v-icon(v-if="$store.state.auth" dark color="red" class="mr-2"  @click="setDocumentsToDel(item)") mdi-delete
                        v-icon(v-if="$store.state.auth" dark color="blue" class="mr-2"  @click="setDocumentToEdit(item)") mdi-pencil
                    </template>
</template>

<script>
import {
    VueEditor
} from "vue2-editor";
import baseMaterialCard from '../components/materialCard.vue'

export default {
    components: {
        VueEditor,
        baseMaterialCard
    },
    data() {
        return {
            content: "",
            loadTable:false,
            documents: [],
            alert: {
                type: 'success',
                message: '',
                show: false,
            },
            editShow: false,
            documentToEdit: {},
            documentToDel: {},
            documentSel: {
                name: '',
                description: '',
                contenthtml: ''
            },
            delShow: false,
            showNuevo: false,
            show: false,
            search: '',
            documentToAdd: {
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
    created: async function () {

        //se debe validar usuario registrado sino hay session no puede modificar registros.
        try {
            this.loadTable = true;
            const res = await this.axios.get("/api/documents");
            this.documents = res.data.documents;
            this.loadTable = false;

        } catch (error) {
            console.log(error);
        }

    },

    methods: {
        saveContent: function () {
            // You have the content to save
        },
        closeFormNew(){
            this.showNuevo=false;
            this.$refs.fromAddDocuments.reset();
        },
        showDocument(item) {
            this.documentSel = item;
            this.show = true;

        },
        async addDocuments() {
            let valid = this.$refs.fromAddDocuments.validate();
            if (valid) {
                this.documentToAdd.contenthtml = this.content;
                try {
                    const res = await this.axios.post('/api/documents', this.documentToAdd);
                    this.documents.push(res.data.document);
                    this.content = '';
                    this.$refs.fromAddDocuments.reset();
                    this.showNuevo = false;
                    this.alert.show = true;
                    this.alert.type = 'success';
                    this.alert.message = 'Regitro Creado.'

                } catch (error) {
                    this.showNuevo = false;
                    this.content = ''
                    this.$refs.fromAddDocuments.reset();
                    this.alert.show = true;
                    this.alert.type = 'error';
                    this.alert.message = 'No es posible crear métodos con el mismo nombre'

                }

            }

        },
        setDocumentsToDel(item) {
            this.documentToDel = item;
            this.delShow = true;
        },
        async delDocument(id) {
            try {
                const document = await this.axios.delete(`/api/documents/${id}`);
                this.delShow = false;
                let pos = this.documents.findIndex((m) => m.id == id);
                this.documents.splice(pos, 1);
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

        setDocumentToEdit(item) {
            this.editShow = true;
            this.content = '';
            this.documentToEdit = item;
        },
        async editDocument() {
            let valid = this.$refs.formEditDocument.validate();
            if (valid) {
                try {
                    this.documentToEdit.id_user = this.$store.state.userSession.user.id;
                    const record = await this.axios.put(`api/documents/${this.documentToEdit.id}`, this.documentToEdit);
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

        }

    }
}
</script>

<style>

</style>
