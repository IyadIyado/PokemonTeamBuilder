<template>
	<div class="pokedex">
		<Pokedex />
	</div>
</template>

<script>
// import Pokedex from "@components/Pokedex.vue";
import Pokedex from "./views/Pokedex.vue";

export default {
	name: "App",
	components: {
		Pokedex,
	},
};
</script>

<style>
* {
	margin: 0;
}
.pokedex {
	background-image: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
