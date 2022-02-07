<template>
	<div>
		<button type="button" v-on:click="addToParty">Add</button>
		<button type="button" v-on:click="consoleLogParty">View</button>
	</div>
</template>

<script>
export default {
	name: "AddButton",
	data() {
		return {};
	},
	methods: {
		addToParty() {
			console.log("Added");
			this.$store.dispatch("addToParty");
		},
		consoleLogParty() {
			// console.log(this.$store.state.party);
			this.$store.getters.partyViewer;
		},
	},
};
</script>

<style scoped>
button {
	width: 100%;
}
</style>
