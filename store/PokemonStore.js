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
	},

	actions: {
		fetchPokemon(payload) {
			this.pokemon = payload;
		},
	},
});
