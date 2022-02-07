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
		<p v-if="loading">Loading</p>
	</div>
</template>

<script>
import PokemonService from "../services/PokemonService.js";
export default {
	name: "Search",
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
				// this.result = res.data;//
				this.$store.dispatch("viewPokemon", res.data);
				// console.log(res.data);
				this.loading = false;
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
	border-radius: 10px;
	width: 100%;
	height: 2rem;
	font-size: 1.3rem;
	text-align: center;
}
</style>
