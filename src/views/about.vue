<template>
<v-container>


<div>
    <v-spacer></v-spacer>
    <v-row>
            <v-col>
                <editor api-key="77bvlwqw98a7l3nd933zih3vcr04gyobuhp0m6h4rfpn1z3m" 
                v-model="content"
                />    
            </v-col>
            <v-divider>

            </v-divider>
            <v-col>
               <editor api-key="77bvlwqw98a7l3nd933zih3vcr04gyobuhp0m6h4rfpn1z3m" 
                cloud-channel="5-dev"
                :disabled="true"
                :init= "{  }"
                initial-value=""
                :inline="true"
                model-events= ""
                plugins=""
                tag-name=""
                toolbar=""
                :value="content"
                />    
            </v-col>
               <v-col>

            </v-col>
    </v-row>




   <p>
       {{content}}
   </p>
</div>

<v-btn round color="primary" dark>text</v-btn>

</v-container>


</template>


<script>
import Editor from '@tinymce/tinymce-vue';

export default {

data:()=>({
    content:'hola mundo',
}),

components:{
    'editor': Editor
}
}
</script>

<style>

</style>