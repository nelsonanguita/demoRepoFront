<template>
  <v-container fluid class="my-6">
    <v-row justify="center">
      <v-card>
                <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <div
              class=" v-sheet theme--dark elevation-6 success pa-6"
              
            >
                          EDITAR PERFIL

            </div>

            <v-row>
              <template> </template>
              <v-card
                v-bind="$attrs"
                :class="classes"
                class="my-12 mx-auto"
                width="380"
                outlined
              >
                <v-card-text>

                  <v-row>
                    <v-col align="center" cols="12">
                      <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        class="mx-auto"
                        align-items="center"
                      >
                        <v-text-field
                          v-model="name"
                          :rules="nameRules"
                          label="Nombre"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="lastname"
                          :rules="lastnameRules"
                          label="Apellidos"
                          required
                        ></v-text-field>

                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>

                        <v-text-field
                          v-model="password"
                          :rules="passRules"
                          label="Contraseña"
                          required
                        ></v-text-field>

                        <v-btn
                          :disabled="!valid"
                          color="success"
                          class="mr-4"
                          @click="validate"
                        >
                          ACEPTAR
                        </v-btn>

                        <v-btn color="error" class="mr-4" @click="reset">
                          CANCELAR
                        </v-btn>
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      </v-card>

    </v-row>
  </v-container>
</template>


<script  >
export default {
  created() {
    if (!this.$store.state.auth) {
      //this.$router.push("/");
      //si no hay usuario auth no debe acceder a pagina profile
    }
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "El nombre es obligatorio",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
    ],
    lastname: "",
    lastnameRules: [
      (v) => !!v || "El nombre es obligatorio",
      (v) =>
        (v && v.length <= 30) || "Last Name must be less than 30 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style >
.card
{
  background-color: rgba(0,0,0,.1);
}
</style>