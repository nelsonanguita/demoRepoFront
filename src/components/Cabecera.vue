<template>
<div>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="drawer" permanent app>
        <v-app-bar dark absolute permanent dense>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-list nav dense margin-top="200" class="mt-12 mx-auto">
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-3">
                <v-list-item v-for="item in items" :key="item.title" link :to="item.path" @click.stop="drawer = !drawer" :value="!drawer">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    data: () => ({
        items: [{
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
        drawer: true,
        overlay: false,
        mostrar: true,
        group:false,
    }),
};
</script>
