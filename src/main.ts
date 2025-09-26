import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { addIcons, OhVueIcon } from 'oh-vue-icons';
import { BiQuestionCircle } from 'oh-vue-icons/icons';

addIcons(BiQuestionCircle);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.component('v-icon', OhVueIcon);

app.mount('#app');
