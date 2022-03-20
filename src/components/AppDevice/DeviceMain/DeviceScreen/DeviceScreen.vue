<template>
  <div
    class="screenWrapper w-4/5 h-3/4 bg-stone-200 border-8 border-neutral-700 m-auto mr-20"
  >
    <div class="w-1/5 m-auto flex justify-around mt-3 mb-3">
      <div class="lamp" />
      <div class="lamp" />
    </div>
    <div class="mainScreen bg-white h-5/6 w-5/6 m-auto p-2">
      <div class="w-full flex h-4/5">
        <div class="w-1/2">
          <div
            v-for="pokemon in pokedex"
            :key="pokemon.order"
            @click="selectPokemon(pokemon)"
            class="pokemonListItem h-1/6 my-1 cursor-pointer"
          >
            <div class="w-full flex justify-around">
              <img class="pokeball" src="./assets/pokeball.png" />
              <div class="w-2/3 text-2xl flex items-center pl-5">
                №{{ pokemon.order }}
                {{ capitalizeName(pokemon.name) }}
              </div>
              <img class="pokeball" src="./assets/pokeball.png" />
            </div>
          </div>
        </div>
        <transition name="fade">
          <div class="w-1/2" v-if="selectedPokemon">
            <img class="pokemonImage" :src="selectedPokemon.sprite" />
          </div>
        </transition>
      </div>
      <div class="h-1/5 w-full">
        <div class="h-full w-1/2 m-auto flex justify-around items-center">
          <div class="page-button">
            <img class="w-12" src="./assets/left-arrow.png" />
          </div>
          <div class="text-5xl">{{ page }}</div>
          <div class="page-button">
            <img class="w-12" src="./assets/right-arrow.png" />
          </div>
        </div>
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
      selectedPokemon: null,
      page: 1,
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
    selectPokemon: function (pokemon) {
      this.selectedPokemon = pokemon;
    },
  },
  watch: {
    // selectedPokemon() {
    //   if (this.selectedPokemon) {
    //     this.selectedPokemon == null;
    //   }
    // },
  },
};
</script>

<style scoped>
.page-button {
  border-radius: 35px;
  border: 4px solid #ff3d00;
  width: 70px;
  height: 70px;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 10px 5px rgba(34, 60, 80, 0.2);
  cursor: pointer;
}
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
.pokemonList {
  display: inline-block;
  margin: 0;
}
.pokemonListItem:hover .pokeball {
  animation: rotation 2s infinite linear;
}
.pokemonListItem {
  display: inline-block;
  width: 100%;
  color: #000;
  text-decoration: none;
}

.pokemonListItem::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s;
}

.pokemonListItem:hover::after {
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.pokemonImage {
  width: 300px;
  height: 300px;
}
</style>
