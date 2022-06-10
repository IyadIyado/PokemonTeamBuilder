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

	name: "PokemonCard",
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
};
</script>

<style scoped>
img {
	/* -webkit-transform: translateZ(0); */
	image-rendering: crisp-edges;
}

/* .image {
	transition: transform 0.5s ease-in-out;
} */

.official {
	width: 20vw;
}

/* .image:hover {
	transform: scale(1.1);
} */

.pixel {
	width: 20vw;
	object-fit: cover;
}
</style>
