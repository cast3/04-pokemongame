<template>
	<div class="tittle">
		<img
			src="https://fontmeme.com/permalink/221112/3fdbade8fff9ad03a3465b0dad7b0d72.png"
			alt="Cuál es este" />
		<img
			src="https://fontmeme.com/permalink/221112/341ce90b56dacc3167dd14cfaf3ad0e3.png"
			alt="Pokemon"
			srcset="" />
		<img
			src="https://fontmeme.com/permalink/221112/68001c019c01f13c3c58112a55b6c2da.png"
			alt="?"
			srcset="" />
	</div>
	<div>
		<h2 v-if="showAnswer" class="answer">{{ message }}</h2>
	</div>

	<loading v-if="!pokemon" class="loader" />
	<main v-else="pokemon" class="container no-draw">
		<article class="card no-draw">
			<img
				src="@/assets/rose-petals.svg"
				alt="Background"
				class="card-header" />
			<div class="card-body">
				<div class="card-body-contentimg">
					<PokemonPicture
						:pokemonId="pokemon.id"
						:showPokemon="showPokemon"
						class="card-body-contentimg-img" />
				</div>
				<div v-if="showPokemon" class="card-body-text">
					<h1>
						{{ pokemon.name }} #<span>{{ pokemon.id }}</span>
					</h1>
				</div>
				<p>Colecionable</p>
			</div>
			<div v-if="!showPokemon" class="card-footer">
				<div class="card-footer-options">
					<PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
				</div>
			</div>
		</article>
		<input
			v-if="showPokemon"
			class="new-game"
			@click="newGame"
			value="Nuevo juego" />
	</main>
</template>

<script>
	import PokemonOptions from "@/components/PokemonOptions.vue";
	import PokemonPicture from "@/components/PokemonPicture.vue";
	import getPokemonOptions from "@/helpers/getPokemonOptions";
	import loading from "@/helpers/CustomLoader.vue";

	export default {
		components: { PokemonOptions, PokemonPicture, loading },
		data() {
			return {
				pokemonArr: [],
				pokemon: null,
				showPokemon: false,
				message: String,
				showAnswer: false,
			};
		},
		methods: {
			async mixPokemonArr() {
				this.pokemonArr = await getPokemonOptions();
				const randomInt = Math.floor(Math.random() * 4);
				this.pokemon = this.pokemonArr[randomInt];
			},
			checkAnswer(pokId) {
				this.showPokemon = true;
				this.showAnswer = true;
				const { id } = this.pokemon;
				if (pokId === id) {
					this.message = `Correcto!`;
				} else {
					this.message = `Incorrecto!`;
				}
			},
			newGame() {
				Object.assign(this.$data, this.$options.data());
				this.mixPokemonArr();
			},
		},

		mounted() {
			this.mixPokemonArr();
		},
	};
</script>

<style scoped>
	.no-draw {
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.loader {
		position: absolute;
		top: 40%;
		left: 45%;
		transform: translate(-50%, -50%);
	}
	.container {
		display: grid;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.card {
		background-color: rgb(235, 240, 240);
		width: 340px;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
	}

	.card-header {
		width: 100%;
		display: block;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 1px solid rgb(0, 0, 0);
	}
	.card-body-contentimg {
		border: 5px solid rgb(212, 100, 72);
		border-radius: 50%;
		background-color: rgb(255, 255, 255);
		box-shadow: 0px -10px 10px rgba(236, 190, 178, 0.5);
		margin-top: -110px;
	}

	.card-body-contentimg-img {
		padding: 20px;
		width: 150px;
		height: 150px;
	}
	.card-body-title {
		position: relative;
		margin-top: 10px;
	}
	.card-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}

	.new-game {
		box-shadow: 1px 0px rgba(255, 255, 255, 0.5);
		border-radius: 10px;
		margin-top: 30px;
		text-align: center;
		padding: 10px;
		margin: 30px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		font-size: 1.2rem;
		cursor: pointer;
		color: rgb(255, 255, 255);
		background-color: #356abc;
	}

	.answer {
		align-items: center;
		display: flex;
		justify-content: center;
		margin-top: -30vh;
		padding: 10px;
		font-size: 1.2rem;
		color: #fff;
		box-shadow: 1px 0px 15px rgba(235, 229, 229, 0.5);
		border-radius: 10px;
		background-color: #356abc;
	}

	.tittle {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -50%);
		align-items: center;
		display: flex;
		justify-content: center;
	}
</style>
