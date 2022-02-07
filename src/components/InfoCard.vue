<template>
	<div class="info-card">
		<h2 class="name">{{ name }}</h2>
		<div class="id">Pokedex #{{ id }}</div>
		<div :class="type1" class="type">{{ type1 }}</div>
		<div :class="type2" class="type" v-if="type2">{{ type2 }}</div>
	</div>
</template>

<script>
export default {
	name: "InfoCard",
	computed: {
		name() {
			return this.$store.getters.pokemonNameGetter;
		},
		id() {
			return this.$store.getters.idGetter;
		},
		type1() {
			return this.$store.getters.type1Getter;
		},
		type2() {
			return this.$store.getters.type2Getter;
		},
	},
};
</script>

<style scoped>
.name {
	font-weight: 600;
}

.info-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

div {
	padding: 10% 0;
}

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
