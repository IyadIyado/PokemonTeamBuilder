<template>
	<div class="pokemon-card">
		<!-- <div class="name">{{ pokemonName }}</div> -->
		<div class="image">
			<img :src="pokemonStore.getImage" :alt="alt" />
		</div>
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

	computed: {
		alt() {
			if (this.pokemonStore.pokemon) {
				return `Pokedex image for ${this.pokemonStore.getName}`;
			}
			return "";
		},
	},

	name: "PokemonCard",
	// computed: {
	// 	image() {
	// 		return this.$store.getters.pokemonImageGetter;
	// 	},
	// 	// pokemonName() {
	// 	// 	return this.$store.getters.pokemonNameGetter;
	// 	// },
	// },
};
</script>

<style scoped>
.image {
	transition: transform 0.5s ease-in-out;
}

.image:hover {
	transform: scale(1.1);
}
</style>
