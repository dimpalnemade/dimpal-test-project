<template>
  <v-snackbar
    v-model="snackbar"
    top
    multi-line
    :timeout="timeout"
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackBar',
  data () {
    return {
      snackbar: true,
      timeout: 2000,
      message: ''
    }
  }
}
</script>
<style>
  .v-snack--multi-line .v-snack__content {
    height: 80px;
    padding: 24px;
    font-family: "Open Sans", sans-serif !important;
  }
</style>
