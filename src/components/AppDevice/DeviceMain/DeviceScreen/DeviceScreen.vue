<template>
  <div
    class="screenWrapper w-4/5 h-3/4 bg-stone-200 border-8 border-neutral-700 m-auto mr-20"
  >
    <div class="w-1/5 m-auto flex justify-around mt-3 mb-3">
      <div class="lamp" />
      <div class="lamp" />
    </div>
    <div class="mainScreen bg-white h-5/6 w-5/6 m-auto overflow-y-auto">
      <div class="w-full flex justify-between">
        <div class="w-1/2">
          <div
            v-for="(pokemon, index) in pokedex"
            :key="index"
            @click="selectPokemon(pokemon)"
            class="pokemonListItem h-1/7 my-1 cursor-pointer"
          >
            <div class="w-full flex justify-around">
              <img class="pokeball" src="./assets/pokeball.png" />
              <div class="w-2/3 text-2xl flex items-center pl-5">
                №{{ ++index }}
                {{ capitalizeName(pokemon.name) }}
              </div>
              <img class="pokeball" src="./assets/pokeball.png" />
            </div>
          </div>

          <!-- <div class="h-1/5 w-full mt-5">
            <div class="flex justify-around items-center">
              <button
                class="page-button"
                @click="page -= 1"
                :disabled="page <= 1"
              >
                <img class="w-12" src="./assets/left-arrow.png" />
              </button>
              <div class="text-5xl">{{ page }}</div>
              <div class="page-button" @click="page += 1">
                <img class="w-12" src="./assets/right-arrow.png" />
              </div>
            </div>
          </div> -->
        </div>
        <div class="bg-stone-200 pokemonScreen mt-6 sticky top-6">
          <transition name="fade" v-if="selectedPokemon">
            <div class="pokemonInnerScreen">
              <img class="pokemonImage" :src="selectedPokemon.sprite" />
            </div>
          </transition>
          <transition name="fade" v-if="!selectedPokemon">
            <div class="pokemonInnerScreen">
              <img class="tv-noise" src="./assets/tv.gif" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getPokemonList,
  getPokemon,
  formatedPokemonData,
} from "./apiPokedex.js";

export default {
  data: function () {
    return {
      pokedex: [],
      selectedPokemon: null,
      page: 1,
      pokeAmountOnPage: 5,
    };
  },
  created: function () {
    this.getPokemonToPage();
  },
  computed: {
    startIndex() {
      return this.page == 1 ? 1 : this.page + this.pokeAmountOnPage * 2;
    },
    endIndex() {
      return this.page * this.pokeAmountOnPage;
    },
  },
  methods: {
    capitalizeName: function (name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    selectPokemon: function (pokemon) {
      getPokemon(pokemon.url).then((data) => {
        this.selectedPokemon = formatedPokemonData(data);
      });
    },
    getPokemonToPage: function () {
      getPokemonList(this.startIndex).then((info) => (this.pokedex = info));
    },
  },
  watch: {
    page() {
      this.getPokemonToPage();
    },
  },
};
</script>

<style scoped>
.pokemonInnerScreen {
  width: 93%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #fff;
  height: 250px;
  border-top-left-radius: 50px;
  /* border-radius: 50px; */
}
.pokemonScreen {
  height: 400px;
  width: 350px;
  border-top-left-radius: 50px;
  /* border-bottom-left-radius: 50px; */
}
.tv-noise {
  height: 100%;
  width: 100%;
  border-top-left-radius: 50px;
}
.page-button {
  border-radius: 35px;
  border: 4px solid #ff3d00;
  width: 50px;
  height: 50px;
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
  height: 4px;
  background: rgb(64 64 64);
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
  width: 250px;
  height: 250px;
  margin: 0 auto;
}
</style>
