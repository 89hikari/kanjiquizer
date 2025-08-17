import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles/main.css";
import vuetify from "./plugins/vuetify.plugin";

// Icons
import "@mdi/font/css/materialdesignicons.css";

// Pinia
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.use(vuetify);
app.mount("#app");
