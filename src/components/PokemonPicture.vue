<template>
	<div class="pokemon-container">
		<img :src="imgSrc" class="hidden-pokemon" alt="pokemon" srcset="" />
		<img
			v-if="showPokemon"
			:src="imgSrc"
			class="fade-in"
			alt="pokemon"
			srcset="" />
	</div>
</template>

<script>
	export default {
		props: {
			pokemonId: {
				type: Number,
				required: true,
			},
			showPokemon: {
				type: Boolean,
				required: true,
				default: false,
			},
		},
		data() {
			return {
				pokemon: this.pokemonId,
			};
		},
		computed: {
			imgSrc() {
				return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon}.svg`;
			},
		},
	};
</script>

<style scoped>
	.hidden-pokemon {
		filter: brightness(0);
	}

	.pokemon-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		width: 150px;
		height: 150px;
		position: absolute;
		user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
	}
</style>
