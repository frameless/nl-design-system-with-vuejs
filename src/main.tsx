import "./assets/main.scss";
import Logo from "./components/Logo.vue";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.component('Logo', Logo);

app.mount("#app");
