<template>
<v-container grid-list-md>
    <v-col cols="12">
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200" />
    </v-col>
    <h1 class="text-center">Colaboradores</h1>
    <p class="text-center">
        {{subtitle}}
    </p>
    <v-layout row wrap>
        <v-flex xs12 sm4 v-for="colaborador in collaborators" :key="colaborador.name">
            <v-card class="mx-auto" max-width="370" elevation="24">
                <v-img height="100%" :src="colaborador.cardImg"></v-img>
                <v-avatar size="180" style="position:absolute;top:15px;margin:0px 95px">
                    <v-img :src="colaborador.avatarImg"></v-img>
                </v-avatar>
                <v-card-title class="text-center" style="margin-top:30px">
                    <v-list-item color="rgba(0, 0, 0, .4)">
                        <v-list-item-content>
                            <v-list-item-title class="title">{{colaborador.name}}</v-list-item-title>
                            <v-list-item-subtitle>{{colaborador.profession}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card-title>
                <v-card-text>
                    <div class="font-weight-bold ml-8 mb-2">
                        Skills
                    </div>
                    <v-timeline align-top dense>
                        <v-timeline-item v-for="(item,i) in colaborador.skills" :key="i" :icon="item.icon" :color="item.color">

                            <div>
                                <div class="font-weight-normal">
                                    <strong>{{item.name }}</strong>
                                </div>
                                <div>
                                    <v-rating half-increments length="6" readonly size="20" color="amber darken-1" :empty-icon="item.icon" :value="item.rating">
                                    </v-rating>
                                </div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                    <v-divider></v-divider>

                </v-card-text>
                <v-card-actions>
                    <v-btn v-for="(link,x) in colaborador.links" :key="x" text dark :color="link.color">
                        <a :href="link.url" target="_blank" rel="noopener noreferrer" :style="'text-decoration:none'">
                            <v-icon :color="link.color">
                                {{link.icon}}
                            </v-icon>
                        </a>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>

</v-container>
</template>

<script>
export default {

    data: () => ({
        subtitle: `
        Somos un equipo de desarrollo
        enfocados en crear una solución tegnologica para crear documentación de cualquier
        tipo de área de desarrollo, compartir conocimiento con nuestros colaboradores e invitarlos a crear
        sus propias documentación para ayudar a los demás.
        `,
        collaborators: [{
                name: 'Alexis Bustamante',
                profession: 'full-stack developer',
                urlGithub: 'https://github.com/AlexisBustamante',
                avatarImg: 'https://avatars.githubusercontent.com/u/67126019?v=4',
                cardImg: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
                skills: [{
                        name: 'Javascript',
                        icon: 'mdi-language-javascript',
                        color: 'amber darken-1',
                        rating: 3.5
                    },
                    {
                        name: 'Vuejs',
                        icon: 'mdi-vuejs',
                        color: 'green darkgen-2',
                        rating: 3
                    },
                    {
                        name: 'NodeJS',
                        icon: 'mdi-nodejs',
                        color: 'green darkgen-2',
                        rating: 2.5
                    },
                    {
                        name: 'Postgresql',
                        icon: 'mdi-database-search',
                        color: 'primary',
                        rating: 2.5
                    }
                ],
                links: [{
                    name: 'Github',
                    url: 'https://github.com/AlexisBustamante',
                    color: 'black',
                    icon: 'mdi-github'
                }, {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com/in/alexis-bustamante-41b13a163/',
                    color: 'blue',
                    icon: 'mdi-linkedin'
                }]
            },
            {
                name: 'Diego Bustamante',
                profession: 'full-stack developer',
                urlGithub: 'https://github.com/AlexisBustamante',
                avatarImg: 'https://avatars.githubusercontent.com/u/32950166?v=4',
                cardImg: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
                skills: [{
                        name: 'Javascript',
                        icon: 'mdi-language-javascript',
                        color: 'amber darken-1',
                        rating: 3.5
                    },
                    {
                        name: 'Vuejs',
                        icon: 'mdi-vuejs',
                        color: 'green darkgen-2',
                        rating: 3
                    },
                    {
                        name: 'NodeJS',
                        icon: 'mdi-nodejs',
                        color: 'green darkgen-2',
                        rating: 2.5
                    },
                    {
                        name: 'Postgresql',
                        icon: 'mdi-database-search',
                        color: 'primary',
                        rating: 2.5
                    }
                ],
                 links: [{
                    name: 'Github',
                    url: 'https://github.com/krostyle',
                    color: 'black',
                    icon: 'mdi-github'
                }, {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com/in/diego-bustamantea/',
                    color: 'blue',
                    icon: 'mdi-linkedin'
                }]

            },
            {
                name: 'Nelson Anguita',
                profession: 'full-stack developer',
                urlGithub: 'https://github.com/AlexisBustamante',
                avatarImg: 'https://avatars.githubusercontent.com/u/36010149?v=4',
                cardImg: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
                skills: [{
                        name: 'Javascript',
                        icon: 'mdi-language-javascript',
                        color: 'amber darken-1',
                        rating: 3.5
                    },
                    {
                        name: 'Vuejs',
                        icon: 'mdi-vuejs',
                        color: 'green darkgen-2',
                        rating: 3
                    },
                    {
                        name: 'NodeJS',
                        icon: 'mdi-nodejs',
                        color: 'green darkgen-2',
                        rating: 2.5
                    },
                    {
                        name: 'Postgresql',
                        icon: 'mdi-database-search',
                        color: 'primary',
                        rating: 2.5
                    }
                ],
                links: [{
                    name: 'Github',
                    url: 'https://github.com/nelsonanguita',
                    color: 'black',
                    icon: 'mdi-github'
                }, {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com/in/nelson-anguita-norambuena/',
                    color: 'blue',
                    icon: 'mdi-linkedin'
                }]
            }
        ],
    }),

    components: {}
}
</script>

<style>

</style>
