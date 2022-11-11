<template>
  <!-- TODO: acerlo tipo tarjetas -->
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else="pokemon">
    <h1>¿Quién es esté pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
    <!-- TODO: Marcar como selected la respuesta -->
    <template v-if="showPokemon">
      <h2>{{ message }}</h2>
      <input @click="newGame" type="button" value="Nuevo juego" />
    </template>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: { PokemonOptions, PokemonPicture },
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
      const { id, name } = this.pokemon;
      if (pokId === id) {
        this.message = `Correcto! era ${name}`;
      } else {
        this.message = `Incorrecto! era ${name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.mixPokemonArr();
      this.pokemon = null;
    },
  },

  mounted() {
    this.mixPokemonArr();
  },
};
</script>

<style lang="scss" scoped></style>
