import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project",
    name: "project",
    component: Project,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/footer",
    name: "footer",
    component: Footer,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
