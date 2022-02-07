import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://pokeapi.co/api/v2/pokemon",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

<script src="../components/Search.vue"></script>;

export default {
	props: {
		type: String,
		required: true,
	},
	// If a pokemon is given, it will return that pokemon, otherwise it will return a list of the first 100 pokemon
	getPokemonData(pokemon) {
		return apiClient.get(`/${pokemon}`);
	},
};
