// import { createStore } from "vuex";

// export default createStore({
// 	state: {
// 		pokemon: null,
// 		party: [],
// 	},

// 	mutations: {
// 		//Change the pokemon in state to the selected pokemon
// 		VIEW_POKEMON(state, payload) {
// 			state.pokemon = payload;
// 		},
// 		//Add selected pokemon to the party
// 		ADD_TO_PARTY(state) {
// 			if (state.party.length <= 5) {
// 				state.party.push(state.pokemon);
// 			} else {
// 				console.log("Reached max capacity");
// 			}
// 		},
// 		//Remove the selected pokemon from the party
// 		REMOVE_FROM_PARTY(state, payload) {
// 			for (let i = 0; i < state.party.length; i++) {
// 				if (state.party[i] == payload) {
// 					state.party.splice(i, 1);
// 				}
// 			}
// 		},
// 	},
// 	actions: {
// 		viewPokemon({ commit }, payload) {
// 			commit("VIEW_POKEMON", payload);
// 		},
// 		addToParty({ commit }) {
// 			commit("ADD_TO_PARTY");
// 		},
// 		removeFromParty({ commit }, payload) {
// 			commit("REMOVE_FROM_PARTY", payload);
// 		},
// 	},

// 	getters: {
// 		pokemonNameGetter(state) {
// 			let name = state.pokemon?.name;
// 			if (name) {
// 				return name.charAt(0).toUpperCase() + name.slice(1);
// 				// return name.toUpperCase();
// 			}
// 		},

// 		partyGetter1(state) {
// 			return state?.party[1];
// 		},

// 		pokemonImageGetter(state) {
// 			let sprite = state.pokemon?.sprites;
// 			if (sprite) {
// 				return sprite.other["official-artwork"]["front_default"];
// 			}
// 		},

// 		// pokemonImageGetter1(state) {
// 		// 	let sprite = state.party[0]?.sprites;
// 		// 	if (sprite) {
// 		// 		return sprite.other["official-artwork"]["front_default"];
// 		// 	}
// 		// },

// 		idGetter(state) {
// 			return state.pokemon?.id;
// 		},

// 		partyViewer(state) {
// 			return console.log(state.party);
// 		},

// 		type1Getter(state) {
// 			let type = state?.pokemon?.types[0].type.name;
// 			if (type) {
// 				return type?.charAt(0).toUpperCase() + type?.slice(1);
// 			} else {
// 				return "";
// 			}
// 		},

// 		type2Getter(state) {
// 			if (state?.pokemon?.types.length > 1) {
// 				let type = state.pokemon.types[1].type.name;
// 				return type?.charAt(0).toUpperCase() + type?.slice(1);
// 			} else {
// 				return "";
// 			}
// 		},
// 	},
// });
