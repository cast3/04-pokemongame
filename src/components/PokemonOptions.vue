<template>
  <div class="options-container">
    <ul>
      <li
        @click="$emit('selection', pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: 90px 90px;
  grid-gap: 40px;
  padding: 0;
  margin: 30px auto;
}

li {
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-align: center;
  line-height: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: -10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
li:after {
  background-color: rgba(255, 0, 0, 0.05);
}
</style>
