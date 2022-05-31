<template>
	<div>
		<form class="Search" @submit.prevent="onSubmit">
			<input
				id="searchBox"
				v-model="search"
				type="text"
				class="search-field"
			/>
		</form>

		<!-- <div>
			<span v-if="loading">Loading</span>
		</div> -->
	</div>
</template>

<script>
import PokemonService from "../services/PokemonService.js";
import { usePokemonStore } from "../../store/PokemonStore";

export default {
	name: "Search",

	setup() {
		const pokemonStore = usePokemonStore();
		return {
			pokemonStore,
		};
	},
	data() {
		return {
			search: "",
			// result: null,
			loading: false,
		};
	},
	methods: {
		async onSubmit() {
			this.loading = true;
			try {
				let term = this.search.toLowerCase();
				const res = await PokemonService.getPokemonData(term);
				this.pokemonStore.fetchPokemon(res.data);
				this.loading = false;
				this.search = "";
				console.log(res.data);
			} catch (error) {
				console.log(error);
			}
		},
	},
	computed: {},
};
</script>

<style scoped>
.search-field {
	/* border-radius: 10px;
	width: 100%;
	height: 3rem;
	font-size: 1.3rem;
	text-align: center; */

	border: 1px solid #555555;
	width: 93%;
	color: black;
	padding: 16px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	/* margin: 4px 2px; */
	transition-duration: 0.4s;
}
</style>
