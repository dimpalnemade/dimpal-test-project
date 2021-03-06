import Vue from "vue";
import App from "./App.vue";
import { router } from './router';
import { store } from "./store/index";
import vuetify from './plugins/vuetify'
import '@/components/snackbar'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
