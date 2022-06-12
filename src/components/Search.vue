<template>
	<div>
		<form class="Search" @submit.prevent="onSubmit">
			<input
				id="searchBox"
				v-model="search"
				type="text"
				class="search-field"
				placeholder="Type Pokemon Name Here"
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
div {
	/* border: 1px black solid; */
	display: flex;
	justify-content: center;
}
.search-field {
	height: 50px;
	width: 50vw;
	border-radius: 5px;
	border: 1px black solid;
	/* border-radius: 10px;
	width: 100%;
	height: 3rem;
	font-size: 1.3rem;
	text-align: center; */
	/* margin: 4px 2px; */

	/* border: 1px solid #555555; */
	/* border-radius: 5px; */
	/* width: auto; */

	color: black;
	/* padding: 16px 32px; */
	text-align: center;
	text-decoration: none;
	/* display: inline-block; */
	/* font-size: 16px; */
	transition-duration: 0.4s;
}
</style>
