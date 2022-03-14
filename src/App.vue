<template>
  <div class="mainWrapper h-screen">
    <app-header />
    <app-device />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader/AppHeader.vue";
import AppDevice from "./components/AppDevice/AppDevice.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppDevice,
  },
};
</script>

<style>
.mainWrapper {
  background-image: url("./assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
