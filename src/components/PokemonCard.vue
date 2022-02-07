<template>
	<div class="pokemon-card">
		<!-- <div class="name">{{ pokemonName }}</div> -->
		<div class="image">
			<img :src="image" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: "PokemonCard",
	computed: {
		image() {
			return this.$store.getters.pokemonImageGetter;
		},
		// pokemonName() {
		// 	return this.$store.getters.pokemonNameGetter;
		// },
	},
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
