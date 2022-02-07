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
	background: url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
