<template>
  <div
    class="screenWrapper w-4/5 h-3/4 bg-stone-200 border-8 border-neutral-700 m-auto mr-20"
  >
    <div class="w-1/5 m-auto flex justify-around mt-3 mb-3">
      <div class="lamp" />
      <div class="lamp" />
    </div>
    <div class="mainScreen bg-white h-5/6 w-5/6 m-auto"></div>
  </div>
</template>

<script>
import getPokemon from "./apiPokedex.js";

export default {
  created: function () {
    getPokemon();
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
</style>
