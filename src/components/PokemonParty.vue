<template>
	<div class="component">
		<div class="stats"></div>
		<div v-if="pokemon" class="card">
			<div class="blank"></div>
			<div class="types">
				<div :class="type1()" class="type">{{ type1() }}</div>
				<div v-if="type2()" :class="type2()" class="type">
					{{ type2() }}
				</div>
			</div>

			<h2 class="name">{{ name() }}</h2>
		</div>
		<div class="image">
			<img :src="image()" :alt="alt" />
			<!-- <div class="platform"></div> -->
		</div>
		<div class="backdrop" :class="type1()"></div>
		<div v-if="type2()" class="backdrop2" :class="type2()"></div>
		<div v-else class="backdrop2" :class="type1()"></div>
	</div>
</template>

<script>
import { usePokemonStore } from "../../store/PokemonStore";

export default {
	setup() {
		const pokemonStore = usePokemonStore();
		return {
			pokemonStore,
		};
	},

	name: "Pokemon-Party",
	props: {
		pokemon: {
			type: Object,
			required: true,
		},
	},
	methods: {
		name() {
			let name = this.pokemon?.name;
			if (name) {
				return name.charAt(0).toUpperCase() + name.slice(1);
			}
		},

		type1() {
			let type = this.pokemon?.types[0].type.name;
			if (type) {
				return type?.charAt(0).toUpperCase() + type?.slice(1);
			} else {
				return "";
			}
		},

		type2() {
			if (this.pokemon?.types.length > 1) {
				let type = this.pokemon.types[1].type.name;
				return type?.charAt(0).toUpperCase() + type?.slice(1);
			} else {
				return "";
			}
		},

		image() {
			let sprite = this.pokemon?.sprites;
			if (sprite) {
				if (this.pokemonStore.pixelArt.valueOf() == false) {
					return sprite.other["official-artwork"]["front_default"];
				} else {
					return sprite["front_default"];
				}
			}
		},
	},
	computed: {
		alt() {
			if (this.name()) {
				return `Pokedex image for ${this.name()}`;
			} else {
				return "";
			}
		},
	},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@400;700&display=swap");
.component {
	margin: 5px;
	/* background: red; */
}

.backdrop {
	width: 51%;
	height: 103%;
	position: relative;
	bottom: 101%;
	left: 1%;
	z-index: 1;
	border-radius: 10px 0% 0% 10px;
	/* border-radius: 10px; */

	/* border: black 1px solid; */
}

.backdrop2 {
	width: 51%;
	height: 103%;
	position: relative;
	left: 48%;
	z-index: 1;
	bottom: 204%;
	/* border-radius: 10px; */
	border-radius: 0 10px 10px 0;
}

.card {
	background: white;
	background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
	/* border: solid 1px rgba(85, 85, 85, 0.26); */
	/* margin: 0% 15%; */
	border-radius: 5%;
	width: 94%;
	position: relative;
	left: 3%;
	z-index: 3;
}

img {
	z-index: 10;
	width: 120%;
	object-fit: cover;
	height: auto;
	position: absolute;
	image-rendering: crisp-edges;
}
.image {
	bottom: 310px;
	right: 20px;
	z-index: 10;
	position: relative;
	/* transition: transform 1s; */
}

.image:hover {
	animation: moveUpDown 1.5s ease-in-out infinite;
}

@keyframes moveUpDown {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-15px);
	}
}

.blank {
	height: 200px;
	width: 200px;
}

.types {
	display: flex;
	justify-content: center;
}

.name {
	font-size: 1rem;
	letter-spacing: 1px;
	text-align: center;
	padding: 5% 0%;
	font-family: "Montserrat", sans-serif;
	font-family: "Raleway", sans-serif;
}

.id {
	font-size: 2.5rem;
}

.type {
	margin: 1%;
	padding: 1% 7%;
	border-radius: 2px;
	/* font-size: 2rem; */
	text-align: center;
	font-family: "Montserrat", sans-serif;
	font-family: "Raleway", sans-serif;
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
