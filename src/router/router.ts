import { createMemoryHistory, createRouter } from "vue-router";
import BlogComponent from "../components/BlogComponent.vue";
import HomeComponent from "../components/HomeComponent.vue";
import PlayerComponent from "../components/PlayerComponent.vue";
import ResultsComponent from "../components/ResultsComponent.vue";
import RulesComponent from '../components/RulesComponent.vue'

const routes = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/players',
        component: PlayerComponent,
    },
    {
        path: '/results',
        component: ResultsComponent,
    },
    {
        path: '/rules',
        component: RulesComponent,
    },
    {
        path: '/blog',
        component: BlogComponent,
    },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})