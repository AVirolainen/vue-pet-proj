<template>
  <div
    class="flex h-3/4 w-4/5 m-auto shadow-2xl device-wrapper border-8 border-neutral-700"
  >
    <div
      class="h-full w-1/4 p-2 pr-10 border-r-8 border-neutral-700 buttons-pallet"
    >
      <div class="h-1/6 mb-7 p-5 device-button border-4">Pokedex</div>
      <div class="h-1/6 mb-7 p-5 device-button border-4">Your Team</div>
      <div class="h-1/6 mb-7 p-5 device-button border-4">World</div>
      <div class="h-1/6 mb-7 p-5 device-button border-4">Leaders</div>
      <div class="h-1/6 mb-7 p-5 device-button border-4">Fight</div>
    </div>
    <device-main />
  </div>
</template>

<script>
import DeviceMain from "./DeviceMain/DeviceMain.vue";

export default {
  components: {
    DeviceMain,
  },
};
</script>

<style>
.device-button {
  cursor: pointer;
  background-color: #303030;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 38px;
  text-transform: uppercase;
  box-shadow: 0 9px #999;
}
.device-button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.device-button:first-child {
  border-top-left-radius: 24px;
}
.device-button:last-child {
  border-bottom-left-radius: 22px;
}
.device-button:hover {
  opacity: 90%;
}
.device-wrapper {
  border-radius: 25px;
  background-color: #ff4538;
  font-family: "Open Sans", sans-serif;
}
.buttons-pallet {
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
}
</style>
