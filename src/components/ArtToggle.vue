<template>
	<div>
		<button class="button button5" v-on:click="toggle">
			{{ buttonText }}
		</button>
	</div>
</template>

<script>
import { usePokemonStore } from "../../store/PokemonStore";

export default {
	name: "ArtToggle",

	setup() {
		const pokemonStore = usePokemonStore();
		return {
			pokemonStore,
		};
	},

	data() {
		return {};
	},

	computed: {
		buttonText() {
			if (this.pokemonStore.pixelArt == true) {
				return "Official Art";
			} else {
				return "Pixel Art";
			}
		},
	},

	methods: {
		toggle() {
			this.pokemonStore.togglePixelArt();
		},
	},
};
</script>

<style scoped>
.button {
	background-color: #4caf50; /* Green */
	border: none;
	bottom: 5px;
	position: relative;
	color: white;
	padding: 16px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	transition-duration: 0.4s;
	cursor: pointer;
}
.button5 {
	background-color: white;
	color: black;
	border: 2px solid #555555;
}

.button5:hover {
	background-color: #555555;
	color: white;
}
</style>
