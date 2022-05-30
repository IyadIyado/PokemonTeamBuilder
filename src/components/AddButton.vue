<template>
	<div>
		<button type="button" v-on:click="addToParty">Add</button>
		<!-- <button type="button" v-on:click="consoleLogParty">View</button> -->
	</div>
</template>

<script>
import { usePokemonStore } from "../../store/PokemonStore";

export default {
	setup() {
		const pokemonStore = usePokemonStore();
		return {
			pokemonStore,
		};
	},
	name: "AddButton",
	data() {
		return {};
	},
	methods: {
		addToParty() {
			this.pokemonStore.addPokemonToParty();
		},
		consoleLogParty() {
			this.pokemonStore.getParty;
		},
	},
};
</script>

<style scoped>
button {
	width: 100%;
}
</style>
