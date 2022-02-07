<template>
	<div>
		<img :src="image" alt="" />
		<h2 v-if="name" class="name">{{ name }}</h2>
	</div>
</template>

<script>
export default {
	name: "Pokemon-Party",
	props: {
		number: {
			type: Number,
			required: true,
		},
	},
	computed: {
		pokemon() {
			console.log(this.$store.getters.partyGetter1);
			return this.$store.getters.partyGetter1;
		},
		name() {
			return this.pokemon?.name;
		},
		// image() {
		// 	return this.$store.getters.pokemonImageGetter1;
		// },
	},
};
</script>

<style scoped></style>
