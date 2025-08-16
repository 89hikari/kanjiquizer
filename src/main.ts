import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles/main.css";
import colors from "vuetify/util/colors";

// Icons
import "@mdi/font/css/materialdesignicons.css";

// Pinia
import { createPinia } from "pinia";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          E: colors.red.lighten2,
          D: colors.deepOrange.lighten2,
          C: colors.yellow.lighten2,
          B: colors.green.lighten2,
          A: colors.blue.lighten2,
        },
      },
    },
  },
});

const app = createApp(App);
app.use(createPinia());
app.use(vuetify);
app.mount("#app");
