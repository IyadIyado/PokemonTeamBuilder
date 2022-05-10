import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// import store from "../store/index"; // short for @/store/index

createApp(App).use(createPinia()).use(router).mount("#app");
