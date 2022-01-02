import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeWorld'),
},

{
    path: '/',
    name: 'login',
    component: () => import('../views/LoginWorld.vue'),
}
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// export default router;
