<template>

</template>

<script>
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

<style>
.card {
    background-color: rgba(0, 0, 0, .1);
}
</style>
