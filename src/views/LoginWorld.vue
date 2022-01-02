<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vue" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
        <div>Vue Project</div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-img class="white--text" src="../assets/influencerbackground.jpg">
        <v-container fluid fill-height>

          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form ref="form">
                    <v-text-field name="username" label="Username" v-model="username" type="text"><template v-slot:prepend>
                        <img class="suffix-icon" src="../assets/person_outline.png">
                      </template></v-text-field>
                    <v-text-field id="password" name="password" label="Password" v-model="password" type="password">
                      <template v-slot:prepend><img class="suffix-icon" src="../assets/password.png">
                      </template>
                    </v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="doLogin">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>

        </v-container>
      </v-img>
    </v-content>
  </v-app>
</template>


<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    ...mapActions('login', {
      login: 'login'
    }),
    reset () {
      this.$refs.form.reset();
    },
    doLogin () {
      const { username, password } = this;
      if (this.username != "" && this.password != "") {
        this.login({ username, password });
        this.$snackbar({ type: 'success', message: 'Login succesfully' })
      } else {
        this.$snackbar({
        type: 'warning',
        message: 'Please fill the text!'
      })
      }
    }
  },
}
</script>
<style scoped>
  .suffix-icon {
    height: 20px;
    width: 20px;
  }
</style>
