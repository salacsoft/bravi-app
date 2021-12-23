import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import 'mosha-vue-toastify/dist/style.css'
import './index.css'

createApp(App).use(store).use(router).mount("#app");
