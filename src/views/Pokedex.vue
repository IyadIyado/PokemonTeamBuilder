<template>
	<div class="container">
		<div class="control">
			<div class="search">
				<Search />
			</div>
			<div class="toggle">
				<ArtToggle />
			</div>
		</div>

		<div class="info-components">
			<div class="card">
				<PokemonCard :key="pokemon?.id" />
			</div>

			<div class="info">
				<InfoCard />
				<div class="AddButton">
					<AddButton />
				</div>
			</div>
		</div>

		<!-- <div class="AddButton">
			<AddButton />
		</div> -->

		<h1>Party</h1>
		<section class="party" id="partyBar">
			<div class="party1 party">
				<PokemonParty
					:pokemon="fetchParty(0)"
					@click="removePokemon(0)"
				/>
				<PokemonParty
					:pokemon="fetchParty(1)"
					@click="removePokemon(1)"
				/>
				<PokemonParty
					:pokemon="fetchParty(2)"
					@click="removePokemon(2)"
				/>
			</div>

			<div class="party2 party">
				<PokemonParty
					:pokemon="fetchParty(3)"
					@click="removePokemon(3)"
				/>
				<PokemonParty
					:pokemon="fetchParty(4)"
					@click="removePokemon(4)"
				/>
				<PokemonParty
					:pokemon="fetchParty(5)"
					@click="removePokemon(5)"
				/>
			</div>
		</section>

		<!-- <section>
			<button v-on:click="testing">DELETE 3rd POKEMON</button>
		</section> -->
	</div>
</template>

<script>
import ArtToggle from "../components/ArtToggle.vue";
import PokemonCard from "../components/PokemonCard.vue";
import InfoCard from "../components/InfoCard.vue";
import Search from "../components/Search.vue";
import AddButton from "../components/AddButton.vue";
import PokemonParty from "../components/PokemonParty.vue";
import { usePokemonStore } from "../../store/PokemonStore";

// let party = this.pokemonStore.party;

// let pokemonExists = true;
// let pokemonDoesNotExist = false;

export default {
	components: {
		PokemonCard,
		InfoCard,
		Search,
		AddButton,
		PokemonParty,
		ArtToggle,
	},
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
					result = this.pokemonStore.getFirstPokemon;
					break;
				case 1:
					result = this.pokemonStore.getSecondPokemon;
					break;
				case 2:
					result = this.pokemonStore.getThirdPokemon;
					break;
				case 3:
					result = this.pokemonStore.getFourthPokemon;
					break;
				case 4:
					result = this.pokemonStore.getFifthPokemon;
					break;
				case 5:
					result = this.pokemonStore.getSixthPokemon;
					break;
			}
			return result;
		},

		removePokemon(index) {
			if (index == 0) {
				this.pokemonStore.removePokemon();
			} else {
				for (let i = 1; i <= index; i++) {
					this.pokemonStore.incrementRemoveCounter();
				}
				this.pokemonStore.removePokemon();
			}
		},
	},
};
</script>

<style scoped>
div {
	padding: 1% 0;
}

.container {
	display: flex;
}

#partyBar {
	display: flex;
	justify-content: center;
}

.search {
	flex-grow: 0.98;
}

.control {
	display: flex;
	justify-content: space-between;
}

.info {
	padding: 5%;
}

.container {
	padding: 2% 10%;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.info-components {
	display: flex;
	justify-content: space-evenly;
	border: 1px solid black;
	border-radius: 5px;
	width: 100%;
	/* height: 50vh; */

	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
	border: 1px solid rgba(255, 255, 255, 0.18);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 10px;
}

.party {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 10px;
	height: auto;
}
</style>
