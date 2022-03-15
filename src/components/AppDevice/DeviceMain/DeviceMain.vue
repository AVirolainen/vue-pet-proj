<template>
  <div class="w-3/4">
    <div class="lamp-component flex h-1/6 p-4">
      <div class="big-lamp mr-5">
        <div class="inner-big-lamp">
          <div class="inner-shine"></div>
        </div>
      </div>
      <div class="small-lamp mx-3 bg-red-500">
        <div class="small-shine"></div>
      </div>
      <div class="small-lamp mx-3 bg-amber-400">
        <div class="small-shine"></div>
      </div>
      <div class="small-lamp mx-3 bg-emerald-500">
        <div class="small-shine"></div>
      </div>
    </div>
    <device-screen />
    <device-footer />
  </div>
</template>

<script>
import DeviceScreen from "./DeviceScreen/DeviceScreen.vue";
import DeviceFooter from "./DeviceFooter/DeviceFooter.vue";

export default {
  components: {
    DeviceScreen,
    DeviceFooter,
  },
};
</script>

<style>
.lamp-component {
  margin-bottom: -20px;
}
.big-lamp {
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner-big-lamp {
  width: 70px;
  height: 70px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: aqua;
  border: 3px solid grey;
  border-radius: 35px;
}
.inner-shine {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 8px;
}
.small-lamp {
  width: 50px;
  height: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 3px solid grey;
  border-radius: 25px;
}
.small-shine {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 8px;
}
</style>
