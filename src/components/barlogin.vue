<template>
<v-container>
    <v-app-bar dark fixed dense>
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog=true">
            <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">

        <v-card>
            <v-toolbar dark>
              
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                        <h4 class="text-center">Login in to Your Account</h4>
                        <h6 class="text-center  grey--text ">Log in to your account so you can continue builiding <br>and editing yours documents</h6>
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">

                                <v-text-field label="Email" outlined dense color="blue" autocomplete="false" class="mt-16" />
                                <v-text-field label="Password" outlined dense color="blue" autocomplete="false" type="password" />
                                <v-row>
                                    <v-col cols="12" sm="7">
                                        <v-checkbox label="Remember Me" class="mt-n1" color="blue"> </v-checkbox>
                                    </v-col>
                                    <v-col cols="12" sm="5">
                                        <span class="caption blue--text">Forgot password</span>
                                    </v-col>
                                </v-row>
                                <v-btn color="blue" dark block tile>Log in</v-btn>

                                <h5 class="text-center  grey--text mt-4 mb-3">Or Log in using</h5>
                                <div>
                                    <v-alert v-model="dialogErr" type="error">
                                        Mensaje de error al logear
                                    </v-alert>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="black rounded-bl-xl">
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
export default {
    data: () => ({
        step: 1,
        dialog: false,
        dialogErr:true,
        
    }),
    props: {
        source: String
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
