import Vue from "vue";
import VueRouter from "vue-router";
import Browse from "../components/Browse.vue";
import MainPage from "../components/MainPage.vue";

// Load router
Vue.use(VueRouter);

const routes = [
    { path: "/browse", name: "Browse", component: Browse },
    { path: "/", name: "MainPage", component: MainPage },
];

export default new VueRouter({
    mode: "history",
    base: __dirname,
    routes,
});
