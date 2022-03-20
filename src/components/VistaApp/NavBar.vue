<template>
<v-container>
    <v-app-bar 
    dark 
    fixed 
    dense
    >
        <v-spacer></v-spacer>
        <v-btn v-show="!$store.state.auth" outlined  @click="dialog=true" color="green">
            <v-icon>mdi-account-circle-outline</v-icon>
             Login 
        </v-btn>
        <div v-if="$store.state.auth">
            <v-col cols="4" sm="2" md="1">
                <h3 class="white--text">
                    {{$store.state.userSession.user.name}}
                </h3>
            </v-col>
        </div>
        <div v-if="$store.state.auth">
            <v-col cols="4" sm="2" md="1">
                <v-menu bottom min-width="200px" rounded offset-y>
                    <template v-slot:activator="{on}">
                        <v-btn icon x-large v-on="on">
                            <v-avatar size="30" color="primary">
                                AA
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-card dark>
                        <v-list-item-content class="justify-center">
                            <div class="mx-auto text-center">
                                <v-avatar size="30" color="primary">
                                    AA
                                </v-avatar>
                                <h3>{{ $store.state.userSession.user.name }}</h3>
                                <p class="text-caption mt-1">
                                    {{ $store.state.userSession.user.email }}
                                </p>
                                <v-divider class="my-3"></v-divider>
                                <v-btn depressed rounded text to="/profile">
                                    PROFILE
                                </v-btn>
                                <v-divider class="my-3"></v-divider>
                                <v-btn depressed rounded text @click="out()">
                                    LOGOUT
                                </v-btn>
                            </div>
                        </v-list-item-content>
                    </v-card>
                </v-menu>
            </v-col>
        </div>

    </v-app-bar>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="showdialog()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                        <v-form ref="formLogin">
                            <v-img :src="require('@/assets/logo.svg')" class="my-3" contain height="140" />
                            <h3 class="text-center">Login in to Your Account</h3>
                            <h5 class="text-center  grey--text ">Log in to your account so you can continue builiding <br>and editing yours documents</h5>
                            <v-row v-show="Showfrom" align="center" justify="center" margin-top="10" margin-bottom="">
                                <v-col cols="12" sm="8">
                                    <v-text-field v-model="credentials.email" :rules="emailRules" label="email" outlined dense color="blue" autocomplete="false" class="mt-16" />
                                    <v-text-field v-model="credentials.password" label="Password" outlined dense color="blue" autocomplete="false" type="password" />
                                    <v-row>
                                    </v-row>
                                    <v-btn color="blue" dark block tile @click="log()">Log in</v-btn>
                                    <h5 class="text-center  grey--text mt-4 mb-3"></h5>
                                    <div>
                                        <v-alert dense text dismissible border="left" v-model="alert.show" :type="alert.type">
                                            {{alert.message}}
                                        </v-alert>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row v-show="!Showfrom" align="center" justify="center">
                                <v-progress-circular :width="7" :size="100" color="primary" indeterminate></v-progress-circular>
                            </v-row>
                        </v-form>

                    </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="cyan rounded-bl-xl">
                    <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text">
                            <h1 class="text-center ">Welcome!</h1>
                            <h6 class="text-center">thanks for the contribution</h6>
                        </v-card-text>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    
    </v-dialog>


</v-container>
</template>

<script>
import { mapActions } from "vuex";


export default {
    data: () => ({
        step: 1,
        cargando: false,
        showBtnLogin: true,
        Showfrom: true,
        dialog: false,
        dialogErr: true,
        credentials: {
            password: '',
            email: ''
        },
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],

        alert: {
            message: 'error',
            type: 'error',
            show: false,
        },

    }),
    props: {
        source: String
    },
    methods: {
        ...mapActions(['login','logout']),
        out() {
            this.logout();
            this.showBtnLogin = true;
            if(this.$route.meta.requiresAuth){
                this.$router.push('/');
            }

        },
        async log() {
            let valid = this.$refs.formLogin.validate()
            if (valid) {
                this.Showfrom = false;
                try {
                    const res = await this.login(this.credentials);
                    //const res = await this.$store.dispatch('login', this.credentials);
                    if (res) {
                        this.showBtnLogin = false;
                        this.showdialog();
                        //this.$router.push("/");//aca,se debe enviar al dashboard de usuario crear dashborad para el user
                    } else {
                        this.alert.message = "the username or password is incorrect"
                        this.alert.type = 'error';
                        this.alert.show = true;
                    }
                } catch (error) {
                    //console.log(error);
                    this.alert.message = "the username or password is incorrect"
                    this.alert.type = 'error';
                    this.alert.show = true;

                }
                this.Showfrom = true;

            }
        },
        showdialog() {
            this.dialog = false;
            this.$refs.formLogin.reset();
             this.alert.show = false;
        }
    }

}
</script>

<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
