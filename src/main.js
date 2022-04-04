import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import vuetify from 'vuetify'

createApp(App).mount('#app')

new Vue({
    vuetify,
    render: h => h(App)
  }).$mount("#app");
