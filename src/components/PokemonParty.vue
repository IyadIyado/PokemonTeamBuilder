<template>
	<div class="component">
		<div class="card">
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
				// return sprite["front_default"];
				return sprite.other["official-artwork"]["front_default"];
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
.card {
	background: white;
	/* margin: 0% 15%; */
	border-radius: 5%;
}

img {
	z-index: 10;
	width: 250px;
	height: auto;
	position: absolute;
}
.image {
	bottom: 310px;
	right: 20px;
	z-index: 10;
	position: relative;
	/* transition: transform 1s; */
}

.image:hover {
	animation: moveUpDown 0.5s ease-in-out infinite;
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
	justify-content: space-evenly;
}

.name {
	font-size: 1.5rem;
	letter-spacing: 2px;
	text-align: center;
	padding: 5% 0%;
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
}

.Bug {
	color: white;
	background: #729f40;
}

.Dark {
	color: white;
	background: #707070;
}
.Dragon {
	color: white;
	background: #e5735e;
}

.Electric {
	color: black;
	background: #eed435;
}
.Fairy {
	color: #024615;
	background: #fdb9ea;
}
.Fighting {
	color: white;
	background: #d56722;
}
.Fire {
	color: white;
	background: #fd7d24;
}

.Flying {
	color: white;
	background: #3dc7ee;
}
.Ground {
	color: white;
	background: #4e4310;
}

.Grass {
	color: white;
	background: #9bcc50;
}
.Ghost {
	color: white;
	background: #7b62a3;
}

.Ice {
	color: white;
	background: #52c4e8;
}

.Normal {
	color: white;
	background: #a4acb0;
}

.Poison {
	color: white;
	background: #b97fc9;
}
.Water {
	color: white;
	background: #4593c4;
}

.Psychic {
	color: white;
	background: #f466ba;
}

.Rock {
	color: white;
	background: #a38c22;
}

.Steel {
	color: white;
	background: #9eb8b9;
}
</style>
