<template>
  <div
    class="
      flex
      justify-between
      bg-winter-green bg-opacity-20
      rounded-full
      w-full
      h-20
      pr-4
      items-center
    "
  >
    <div class="flex items-center space-x-3">
      <img
        src="/img/svg/male-avatar.svg"
        class="h-20 w-20 border-4 border-winter-green rounded-full"
      />
      <div class="flex flex-col">
        <h4 class="text-2xl">{{ name }}</h4>
        <!-- <p class="flex tracking-wider font-sm">Account Manager</p> -->
      </div>
    </div>

    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 sm:h-8 sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const currentUser = store.getters.getUserDetails;
    const name = currentUser.full_name;

    function logout() {}

    return { name, logout };
  },
};
</script>

<style lang="scss" scoped>
</style>