<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../assets/person.png" transition="scale-transition" width="40" />
        <div>Hello User</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="logoutDialog = true" target="_blank" text>
        <span class="mr-2">Logout</span>
        <v-img alt="logout Logo" class="shrink mr-2" contain src="../assets/Logout_Icon.svg" transition="scale-transition" width="40" />
      </v-btn>
    </v-app-bar>
    <v-container fluid fill-height>
      <v-img class="white--text" src="../assets/backgroundaddinfo1.jpg">
        <v-layout align-center justify-center style="margin-top:80px;">
          <v-flex xs12 sm8 md4>
            <v-card style="width:900px;">
              <v-toolbar card color="pink" dark>
                <v-icon>arrow_back</v-icon>
                <v-toolbar-title>Compose</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon>send</v-icon>
              </v-toolbar>
              <v-form>
                <div style="margin:20px;">
                  <v-text-field label="Blog Tittle" v-model="blogTitle" single-line full-width hide-details></v-text-field>
                  <v-divider></v-divider>
                  <v-textarea v-model="title" label="Write blog" counter maxlength="120" full-width single-line></v-textarea>
                </div>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-img>
      <v-dialog v-model="logoutDialog" persistent max-width="290">
        <v-card>
          <v-card-text>Are you sure you want to logout?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="logoutDialog = false">cancel</v-btn>
            <v-btn color="red darken-1" flat @click="doLogout">Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      info: 'You are have been login and this is Home Page',
      logoutDialog: false,
      selected: ['Trevor Handsen'],
      items: ['Trevor Handsen', 'Alex Nelson'],
      blog: '',
      blogTitle: ''
    }
  },
  methods: {
    ...mapActions('login', {
      logout: 'logout'
    }),
    reset () {
      this.$refs.form.reset();
    },
    doLogout () {
      this.logout();
      this.logoutDialog = false
      this.$snackbar({
        type: 'success',
        message: 'You have logged out successfully'
      })
      this.logout();
    }
  },
}
</script>
