import { defineStore } from "pinia";

export const usePokemonStore = defineStore("PokemonStore", {
	state: () => ({
		pokemon: null,
		party: [],
		removeCounter: 0,
		pixelArt: false,
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
				if (this.pixelArt.valueOf() == false) {
					return sprite.other["official-artwork"]["front_default"];
				} else {
					return sprite["front_default"];
				}
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

		getFirstPokemon() {
			if (this.party.length > 0) {
				return this.party[0];
			}
		},

		getSecondPokemon() {
			if (this.party.length >= 1) {
				return this.party[1];
			}
		},
		getThirdPokemon() {
			if (this.party.length >= 2) {
				return this.party[2];
			}
		},
		getFourthPokemon() {
			if (this.party.length >= 3) {
				return this.party[3];
			}
		},
		getFifthPokemon() {
			if (this.party.length > 4) {
				return this.party[4];
			}
		},
		getSixthPokemon() {
			if (this.party.length > 5) {
				return this.party[5];
			}
		},
		getPixelArt() {
			return this.pixelArt;
		},
		getHP() {
			return this.pokemon?.stats[0]["base_stat"];
		},
		getAttack() {
			return this.pokemon?.stats[1]["base_stat"];
		},

		getDefense() {
			return this.pokemon?.stats[2]["base_stat"];
		},
		getSpAttack() {
			return this.pokemon?.stats[3]["base_stat"];
		},
		getSpDefense() {
			return this.pokemon?.stats[4]["base_stat"];
		},
		getSpeed() {
			return this.pokemon?.stats[5]["base_stat"];
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

		incrementRemoveCounter() {
			this.removeCounter++;
		},

		removePokemon() {
			let index = this.removeCounter;
			this.party.splice(index, 1);
			this.removeCounter = 0;
		},
		togglePixelArt() {
			this.pixelArt = !this.pixelArt;
			console.log(`Status changed to: ${this.pixelArt}`);
			// console.log();
			// console.log(this.getPixelArt());
		},
	},
});

//Next steps, Time to redesign, start by designing new layout and the cards for the party pokemon.
