import Vue from "vue";
import VueRouter from "vue-router";
import Browse from "../components/Browse.vue";
import MainPage from "../components/MainPage.vue";
import LoginPage from "../components/LoginPage.vue";

// Load router
Vue.use(VueRouter);

// Specify which component to use on a route
const routes = [
  { path: "/browse", name: "Browse", component: Browse },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/", name: "MainPage", component: MainPage },
];

export default new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});
