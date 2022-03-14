import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/contact",
        name: "contacto",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Contacto.vue"),
    },
    {
        path: "/about",
        name: "sobre mi",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/post",
        name: "posts",
        component: () => import("../views/Post.vue"),
        children: [
            {
                path: ":id",
                name: "articulo1",
                component: () => import("../views/Article.vue"),
            },
        ] as RouteRecordRaw[],
    },
    {
        path: "/:catchAll(.*)",
        name: "missing",
        component: () => import("../views/Missing.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
