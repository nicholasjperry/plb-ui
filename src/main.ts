import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router/router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createPinia } from 'pinia';

const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(pinia)
    .use(router)
    .use(vuetify)
    .mount('#app')
