<template>
  <div
    class="h-3/4 w-4/5 p-3 bg-white m-auto shadow device-wrapper bg-zinc-500 border-4 border-neutral-700"
  >
    <div class="h-full w-1/5">
      <div class="h-1/6 mb-7 p-5 device-button border-4">Pokedex</div>
      <div class="h-1/6 mb-7 p-5 device-button border-4">Your Team</div>
      <div class="h-1/6 mb-7 p-5 device-button border-4">World</div>
      <div class="h-1/6 mb-7 p-5 device-button border-4">Leaders</div>
      <div class="h-1/6 mb-7 p-5 device-button border-4">Fight</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.device-button {
  cursor: pointer;
  background-color: #ff4538;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 40px;
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
  opacity: 60%;
}
.device-wrapper {
  border-radius: 25px;
  font-family: "Open Sans", sans-serif;
}
</style>
