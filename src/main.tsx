import "./assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import IconContainer from "./components/IconContainer.vue";

const app = createApp(App);

app.use(router);

app.component('icon-container', IconContainer);

app.mount("#app");
