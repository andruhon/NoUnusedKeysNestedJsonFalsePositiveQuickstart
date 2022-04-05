import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";

export const i18n = createI18n({
    globalInjection: true,
    locale: "en-NZ",
    messages: {
        "en-NZ": require("@/locales/en-NZ.json")
    }
});

createApp(App).use(i18n).mount('#app')
