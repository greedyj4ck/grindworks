// Global plugins boot file

import { boot } from "quasar/wrappers";
import { Plugin } from "vue-responsive-video-background-player";
import VueAnimXyz from "@animxyz/vue3"; // Vue 3 Animxyz integration
import "@animxyz/core"; // Anymxyz core css

export default boot(({ app }) => {
  app.use(Plugin);
  app.use(VueAnimXyz);
});
