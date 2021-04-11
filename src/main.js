import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueParticles from 'vue-particles'
import VueTyperPlugin from 'vue-typer'

Vue.use(VueParticles)
Vue.use(VueTyperPlugin)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
