import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import "primeicons/primeicons.css";

import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import Tooltip from  "primevue/tooltip";
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false || 'none',
          },

    }
});
app.directive('tooltip',Tooltip);
app.mount("#app");
// createApp(App).use(PrimeVue).use(.mount("#app");
