import { createApp } from 'vue';
// createApp(App).mount('#app')
import store from './Store.js';
import App from './App.vue';

const app = createApp(App);
app.use(store);
app.mount('#app');