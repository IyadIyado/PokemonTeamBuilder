import { createRouter, createWebHistory } from "vue-router";
import Pokedex from "../views/Pokedex.vue";

const routes = [
	{
		path: "/",
		name: "Pokedex",
		component: Pokedex,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
