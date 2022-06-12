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
div {
	/* border: black 1px solid; */
}
img {
	/* -webkit-transform: translateZ(0); */
	width: 20vw;

	image-rendering: crisp-edges;
}

/* .official {
} */

.pixel {
	/* width: 20vw; */
	object-fit: cover;
}
</style>
