<template>
<v-container justify="center" fill-height>
    <v-row justify="center" align="">
        <v-col>
        </v-col>
    </v-row>
    <v-row justify="center" align="">
        <v-col>
        </v-col>
    </v-row>

    <v-row justify="center">
        <v-col>
            <h1 class="primary--text text-h3 text-center">Whoops, 404</h1>
            <h4 class="text-h4 text-center">The page you were looking for does not exist</h4>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col>
            <v-btn 
            @click="$router.push('/')"
            class="text-h5" block dark text color="primary">GET ME OUT OF HERE!</v-btn>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data: () => ({

    })
}
</script>

<style>

</style>
