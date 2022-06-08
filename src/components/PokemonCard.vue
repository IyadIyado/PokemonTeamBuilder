<template>
	<div class="pokemon-card">
		<!-- <div class="name">{{ pokemonName }}</div> -->
		<div class="image">
			<img :class="pixel" :src="pokemonStore.getImage" :alt="alt" />
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

		pixel() {
			if (this.pokemonStore.pixelArt.valueOf()) {
				return "pixel";
			} else {
				return "official";
			}
		},
	},

	name: "PokemonCard",
};
</script>

<style scoped>
.image {
	transition: transform 0.5s ease-in-out;
}

.official {
	width: 100%;
}

.image:hover {
	transform: scale(1.1);
}

.pixel {
	padding-left: 10px;
	width: 100%;
	/* position: relative; */
	right: 150%;
}
</style>
