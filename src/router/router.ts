import { createMemoryHistory, createRouter } from "vue-router";
import HomeComponent from "../components/HomeComponent.vue";

const routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})