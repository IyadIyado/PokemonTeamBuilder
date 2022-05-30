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
	background: #ffd9c0;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
