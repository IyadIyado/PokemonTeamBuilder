import { defineStore } from "pinia";

export const usePokemonStore = defineStore("PokemonStore", {
	state: () => ({
		pokemon: null,
		party: [],
	}),
	getters: {
		getName() {
			let name = this.pokemon?.name;
			if (name) {
				return name.charAt(0).toUpperCase() + name.slice(1);
			}
		},
		getImage() {
			let sprite = this.pokemon?.sprites;
			if (sprite) {
				return sprite.other["official-artwork"]["front_default"];
			}
		},
		getAlt() {
			return "";
		},
		getID() {
			return this.pokemon?.id;
		},
		getFirstType() {
			let type = this.pokemon?.types[0].type.name;
			if (type) {
				return type?.charAt(0).toUpperCase() + type?.slice(1);
			} else {
				return "";
			}
		},
		getSecondType() {
			if (this.pokemon?.types.length > 1) {
				let type = this.pokemon.types[1].type.name;
				return type?.charAt(0).toUpperCase() + type?.slice(1);
			} else {
				return "";
			}
		},
		getParty() {
			this.party.forEach((pokemon) => {
				console.log(pokemon.name + " is in the party");
			});
		},
	},

	actions: {
		fetchPokemon(payload) {
			this.pokemon = payload;
		},
		addPokemonToParty() {
			if (this.party.length <= 5) {
				console.log(`Adding ${this.pokemon.name} to party`);
				console.dir(this.party);
				this.party.push(this.pokemon);
			} else {
				console.log("max capacity reached");
			}
		},

		fetchFirstPokemon() {
			if (this.party.length > 0) {
				return this.party[0];
			}
		},

		fetchSecondPokemon() {
			if (this.party.length >= 1) {
				return this.party[1];
			}
		},
		fetchThirdPokemon() {
			if (this.party.length >= 2) {
				return this.party[2];
			}
		},
		fetchFourthPokemon() {
			if (this.party.length >= 3) {
				return this.party[3];
			}
		},
		fetchFifthPokemon() {
			if (this.party.length > 4) {
				return this.party[4];
			}
		},
		fetchSixthPokemon() {
			if (this.party.length > 5) {
				return this.party[5];
			}
		},

		remove3() {
			if (this.party.length >= 2) {
				this.party.splice(2, 1);
				console.log("remove function called");
			}
		},
	},
});

//Next steps, create functions that will remove the clicked pokemon(one for each card)
