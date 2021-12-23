<template>
  <div
    class="
      auth-page
      bg-winter-white
      h-screen
      flex flex-col
      justify-between
      relative
    "
  >
    <div class="bubble bg-green-300 bg-opacity-60 rounded-b-full"></div>
    <div class="flex justify-center items-center bg-winter-white bg-opacity-60">
      <router-view />
    </div>
    <div class="bubble rounded-t-full self-end"></div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
};
</script>

<style lang="css" scoped>
.auth-page {
  background-image: url("/img/svg/login.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @apply text-winter-black;
}

.header {
  background-image: url("/img/waves/wave-up.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.bubble {
  @apply h-28      
         sm:h-56
         md:h-72
         w-3/5
         lg:w-2/5
         xl:w-1/5
        bg-winter-green bg-opacity-60;
}
</style>