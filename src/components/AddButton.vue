<template>
	<div>
		<button type="button" :class="getType()" v-on:click="addToParty">
			Add
		</button>
		<!-- <button type="button" v-on:click="consoleLogParty">View</button> -->
	</div>
</template>

<script>
import { usePokemonStore } from "../../store/PokemonStore";

export default {
	name: "AddButton",
	setup() {
		const pokemonStore = usePokemonStore();
		return {
			pokemonStore,
		};
	},
	data() {
		return {};
	},
	methods: {
		addToParty() {
			this.pokemonStore.addPokemonToParty();
		},
		consoleLogParty() {
			this.pokemonStore.getParty;
		},
		getType() {
			return this.pokemonStore.getFirstType;
		},
	},
};
</script>

<style scoped>
button {
	width: 100%;
	height: 50px;
	color: white;
	border: 1px solid #555555;

	border-radius: 5px;
	font-size: 16px;
	position: relative;
	/* width: 10vw; */
	height: auto;
	text-align: center;
	font-size: 16px;
	cursor: pointer;
	/* background-color: #555555; */
	height: 50px;
}

button:hover {
	background: rgba(224, 230, 231, 0.356);
	/* color: black; */
	color: black;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(0px);
}

.Bug {
	color: white;
	/* background: #729f40; */
	background-image: linear-gradient(
		160deg,
		#78f530 0%,
		#62c593 48%,
		#729f40 100%
	);
}

.Dark {
	color: white;
	background: #707070;
	background-image: linear-gradient(
		160deg,
		#afafaf 0%,
		rgba(0, 0, 0, 0.39) 100%
	);
}
.Dragon {
	/* background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%); */
	background-image: linear-gradient(
		160deg,
		#ff8177 0%,
		#ff867a 0%,
		#ff8c7f 21%,
		#f99185 52%,
		#cf556c 78%,
		#b12a5b 100%
	);
	color: white;
	/* background: #e5735e; */
}

.Electric {
	color: black;
	background: #ffea64;
	background-image: linear-gradient(160deg, #ffea64 0%, #e4c70f 100%);
}
.Fairy {
	color: #024615;
	background: #fdb9ea;
	background-image: linear-gradient(160deg, #fdb9ea 0%, #f578dc 100%);
}
.Fighting {
	color: white;
	background: #d56722;
	background-image: linear-gradient(160deg, #ff5858 0%, #d56722 100%);
}
.Fire {
	color: white;
	background: #fd7d24;
	background-image: linear-gradient(160deg, #fc8d24 0%, #fd7d24 100%);
}

.Flying {
	color: white;
	/* background: #3dc7ee; */
	background-image: linear-gradient(160deg, #4facfe 0%, #3dc7ee 100%);
}
.Ground {
	color: white;
	background: #4e4310;
	background-image: linear-gradient(160deg, #a1786d 0%, #4e4310 100%);
}

.Grass {
	color: white;
	/* background: #9bcc50; */
	background-image: linear-gradient(160deg, #c3e672 0%, #9bcc50 100%);
}
.Ghost {
	color: white;
	background: #7b62a3;
	background-image: linear-gradient(160deg, #5f72bd 0%, #7b62a3 100%);
}

.Ice {
	color: white;
	background: #52c4e8;
	background-image: linear-gradient(160deg, #94bdff 0%, #52c4e8 100%);
}

.Normal {
	color: white;
	background: #a4acb0;
	background-image: linear-gradient(160deg, #c0cbd1 0%, #a4acb0 100%);
}

.Poison {
	color: white;
	background: #b97fc9;
	background-image: linear-gradient(160deg, #873fa1fa 0%, #b97fc9 100%);
}
.Water {
	color: white;
	background: #4593c4;
	background-image: linear-gradient(160deg, #94bdff 0%, #4593c4 100%);
}

.Psychic {
	color: white;
	background: #f466ba;
	background-image: linear-gradient(160deg, #f195fc 0%, #f466ba 100%);
}

.Rock {
	color: white;
	background: #a38c22;
	background-image: linear-gradient(160deg, #b6b677 0%, #a38c22 100%);
}

.Steel {
	color: white;
	background: #9eb8b9;
	background-image: linear-gradient(160deg, #dee1e4 0%, #728383 100%);
}
</style>
