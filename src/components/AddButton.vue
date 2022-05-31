<template>
	<div>
		<button type="button" v-on:click="addToParty">Add</button>
		<!-- <button type="button" v-on:click="consoleLogParty">View</button> -->
	</div>
</template>

<script>
import { usePokemonStore } from "../../store/PokemonStore";

export default {
	name: "AddButton",
	setup() {
		const pokemonStore = usePokemonStore();
		return {
			pokemonStore,
		};
	},
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
