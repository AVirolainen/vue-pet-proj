<template>
  <div
    class="screenWrapper w-4/5 h-3/4 bg-stone-200 border-8 border-neutral-700 m-auto mr-20"
  >
    <div class="w-1/5 m-auto flex justify-around mt-3 mb-3">
      <div class="lamp" />
      <div class="lamp" />
    </div>
    <div class="mainScreen bg-white h-5/6 w-5/6 m-auto p-2">
      <div
        v-for="pokemon in pokedex"
        :key="pokemon.order"
        class="pokemonListItem w-full h-1/6 flex"
      >
        <img class="pokeball" src="./assets/pokeball.png" />
        <div class="w-5/6 text-2xl flex items-center pl-5">
          <img :src="pokemon.sprite" />
          {{ capitalizeName(pokemon.name) }}
        </div>
        <img class="pokeball" src="./assets/pokeball.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatedPokemonData } from "./apiPokedex.js";

export default {
  data: function () {
    return {
      pokedex: [],
    };
  },
  created: function () {
    formatedPokemonData().then((info) => (this.pokedex = info));
  },
  computed: {},
  methods: {
    capitalizeName: function (name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>

<style scoped>
.lamp {
  width: 20px;
  height: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #f54251;
  border: 3px solid grey;
  border-radius: 10px;
}
.mainScreen {
  box-shadow: 0px 0px 18px 0px rgba(34, 60, 80, 0.2) inset;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.pokeball {
  height: 60px;
  width: 60px;
}
.pokemonListItem:hover .pokeball {
  animation: rotation 2s infinite linear;
}
</style>
