import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/util/colors";

export default createVuetify({
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
