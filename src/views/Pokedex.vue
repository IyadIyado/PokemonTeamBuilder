<template>
	<div class="container">
		<div class="search">
			<Search />
		</div>
		<div class="info-components">
			<div class="card">
				<PokemonCard :key="pokemon?.id" />
			</div>

			<div class="info">
				<InfoCard />
			</div>
		</div>

		<div class="AddButton">
			<AddButton />
		</div>

		<section class="party">
			<!-- <PokemonParty :number="0" />
			<PokemonParty :number="1" />
			<PokemonParty :number="2" />
			<PokemonParty :number="3" />
			<PokemonParty :number="4" />
			<PokemonParty :number="5" /> 
			need to add pokemonparty to components -->
		</section>
	</div>
</template>

<script>
import PokemonCard from "../components/PokemonCard.vue";
import InfoCard from "../components/InfoCard.vue";
import Search from "../components/Search.vue";
import AddButton from "../components/AddButton.vue";
// import PokemonParty from "../components/PokemonParty.vue";

export default {
	components: { PokemonCard, InfoCard, Search, AddButton },
};
</script>

<style scoped>
div {
	padding: 1% 0;
}

.info {
	padding: 5%;
}

.container {
	padding: 2% 10%;
	display: flex;
	flex-direction: column;
}

.info-components {
	display: flex;
	justify-content: space-evenly;
	border: 1px solid black;
	border-radius: 5px;
	width: 100%;

	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
	border: 1px solid rgba(255, 255, 255, 0.18);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 10px;
}
</style>
