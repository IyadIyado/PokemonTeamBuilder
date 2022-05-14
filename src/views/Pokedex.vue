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
			<PokemonParty :pokemon="fetchParty(0)" />
			<PokemonParty :pokemon="fetchParty(1)" />
			<PokemonParty :pokemon="fetchParty(2)" />
			<PokemonParty :pokemon="fetchParty(3)" />
			<PokemonParty :pokemon="fetchParty(4)" />
			<PokemonParty :pokemon="fetchParty(5)" />
		</section>

		<section>
			<button v-on:click="testing">DELETE 3rd POKEMON</button>
		</section>
	</div>
</template>

<script>
import PokemonCard from "../components/PokemonCard.vue";
import InfoCard from "../components/InfoCard.vue";
import Search from "../components/Search.vue";
import AddButton from "../components/AddButton.vue";
import PokemonParty from "../components/PokemonParty.vue";
import { usePokemonStore } from "../../store/PokemonStore";

// let pokemonExists = true;
// let pokemonDoesNotExist = false;

export default {
	components: { PokemonCard, InfoCard, Search, AddButton, PokemonParty },
	setup() {
		const pokemonStore = usePokemonStore();
		return {
			pokemonStore,
		};
	},

	methods: {
		fetchParty(index) {
			let result;
			switch (index) {
				case 0:
					result = this.pokemonStore.fetchFirstPokemon();
					break;
				case 1:
					result = this.pokemonStore.fetchSecondPokemon();
					break;
				case 2:
					result = this.pokemonStore.fetchThirdPokemon();
					break;
				case 3:
					result = this.pokemonStore.fetchFourthPokemon();
					break;
				case 4:
					result = this.pokemonStore.fetchFifthPokemon();
					break;
				case 5:
					result = this.pokemonStore.fetchSixthPokemon();
					break;
			}
			return result;
		},

		testing() {
			console.log("Delete button pressed");
			this.pokemonStore.remove3();
		},
	},
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
