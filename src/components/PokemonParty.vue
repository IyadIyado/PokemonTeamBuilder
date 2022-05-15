<template>
	<div>
		<!-- <img :src="image" :alt="alt" /> -->
		<h2 class="name">{{ name() }}</h2>
		<div class="type">{{ type1() }}</div>
		<div v-if="type2()" class="type">{{ type2() }}</div>
		<div>
			<img :src="image()" alt="" />
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
			return this.pokemon?.name;
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
				return sprite.other["official-artwork"]["front_default"];
			}
		},
	},
	computed: {},
};
</script>

<style scoped>
.name {
	font-size: 2.5rem;
	letter-spacing: 2px;
}

.id {
	font-size: 2.5rem;
}

.type {
	margin: 1%;
	border-radius: 5px;
	font-size: 2rem;
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
