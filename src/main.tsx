import "./assets/main.scss";
import PageFooter from './components/PageFooterRVO.vue';

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.component('PageFooter', PageFooter);

app.mount("#app");
